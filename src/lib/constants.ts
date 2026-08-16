export const SITE_NAME = 'PrymeStrategies';
export const SITE_DESCRIPTION =
  'Premium face-to-face marketing strategies that drive results. Book a consultation today.';
export const SITE_URL = 'https://www.prymestrategies.com';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Now', href: '/booking' },
] as const;

export const ADMIN_NAV_LINKS = [
  { label: 'Dashboard', href: '/admin', icon: 'LayoutDashboard' },
  { label: 'Bookings', href: '/admin/bookings', icon: 'CalendarDays' },
] as const;

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
} as const;

export type BookingStatus =
  (typeof BOOKING_STATUS)[keyof typeof BOOKING_STATUS];
