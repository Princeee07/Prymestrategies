import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-light tracking-[0.2em] uppercase text-xl text-white">
                PRYME{' '}
                <span className="text-[var(--color-bronze)]">STRATEGIES</span>
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed">
              We build meaningful brand connections through direct, personal
              engagement. Our face-to-face marketing strategies deliver
              ROI-driven results while helping our team members become better
              people through marketing.
            </p>
          </div>

          <div>
            <h3 className="text-white font-heading tracking-widest uppercase text-sm mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--color-bronze)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[var(--color-bronze)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[var(--color-bronze)] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="hover:text-[var(--color-bronze)] transition-colors"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[var(--color-bronze)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading tracking-widest uppercase text-sm mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li>Huntsville, AL</li>
              <li>
                <a
                  href="mailto:info@prymestrategies.com"
                  className="hover:text-[var(--color-bronze)] transition-colors"
                >
                  info@prymestrategies.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} PRYME Strategies. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-[var(--color-bronze)] transition-colors font-heading tracking-widest uppercase"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-bronze)] transition-colors font-heading tracking-widest uppercase"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-bronze)] transition-colors font-heading tracking-widest uppercase"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
