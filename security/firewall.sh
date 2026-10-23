#!/usr/bin/env bash
# ==============================================================================
# Firewall Rules for hping3 & Network Flood Mitigation (iptables / nftables)
# Usage: sudo bash security/firewall.sh
# ==============================================================================
set -euo pipefail

echo "[+] Applying kernel firewall rules against hping3 and DoS floods..."

# 1. Flush old rules (if resetting, uncomment below lines when safe)
# iptables -F
# iptables -X
# iptables -t raw -F
# iptables -t mangle -F

# ------------------------------------------------------------------------------
# 2. RAW Table: Drop Invalid & Malformed Packets at the earliest possible stage
# ------------------------------------------------------------------------------
# Drop packets with state INVALID
iptables -A INPUT -m conntrack --ctstate INVALID -j DROP

# Drop new incoming TCP packets that do not have SYN flag set
iptables -A INPUT -p tcp ! --syn -m conntrack --ctstate NEW -j DROP

# Drop packets with bogus TCP flags (typical of hping3 reconnaissance & fuzzing)
# NULL Scan (hping3 -F -S -R -P -A -U 0 flags)
iptables -t mangle -A PREROUTING -p tcp --tcp-flags ALL NONE -j DROP
# ALL flags set (XMAS scan)
iptables -t mangle -A PREROUTING -p tcp --tcp-flags ALL ALL -j DROP
# SYN and FIN both set
iptables -t mangle -A PREROUTING -p tcp --tcp-flags SYN,FIN SYN,FIN -j DROP
# SYN and RST both set
iptables -t mangle -A PREROUTING -p tcp --tcp-flags SYN,RST SYN,RST -j DROP
# FIN without ACK
iptables -t mangle -A PREROUTING -p tcp --tcp-flags FIN,ACK FIN -j DROP

# Drop bogus MSS (Maximum Segment Size) values used in fragmentation attacks
iptables -t mangle -A PREROUTING -p tcp -m conntrack --ctstate NEW -m tcpmss ! --mss 536:65535 -j DROP

# ------------------------------------------------------------------------------
# 3. Connection Rate Limiting & hping3 SYN Flood Protection
# ------------------------------------------------------------------------------
# Create custom chain for SYN rate limiting
iptables -N SYN_FLOOD 2>/dev/null || iptables -F SYN_FLOOD

# Rate limit TCP SYN packets per source IP on public web ports (80, 443)
# Allows up to 25 SYN packets/sec with a burst of 50 per IP address
iptables -A INPUT -p tcp -m multiport --dports 80,443 --syn -j SYN_FLOOD
iptables -A SYN_FLOOD -m hashlimit \
  --hashlimit-name syn_flood_rate \
  --hashlimit-above 25/sec \
  --hashlimit-burst 50 \
  --hashlimit-mode srcip \
  --hashlimit-htable-expire 10000 \
  -j DROP

# Limit max concurrent connections per client IP to 30
iptables -A INPUT -p tcp -m multiport --dports 80,443 -m connlimit --connlimit-above 30 --connlimit-mask 32 -j REJECT --reject-with tcp-reset

# ------------------------------------------------------------------------------
# 4. ICMP (Ping Flood) Rate Limiting (hping3 -1)
# ------------------------------------------------------------------------------
iptables -A INPUT -p icmp --icmp-type echo-request -m limit --limit 2/sec --limit-burst 5 -j ACCEPT
iptables -A INPUT -p icmp --icmp-type echo-request -j DROP

# ------------------------------------------------------------------------------
# 5. Allow Established Connections & Localhost Loopback
# ------------------------------------------------------------------------------
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

echo "[✔] Anti-hping3 firewall rules applied successfully."
