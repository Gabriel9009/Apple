const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] px-4 py-8 text-sm mt-2">
      <div className="mx-auto max-w-245">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 gap-8 pb-6 md:grid-cols-4">
          {/* Explore Column */}
          <div>
            <h3 className="mb-2 text-xs font-semibold text-[#1d1d1f]">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  Mac
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  iPad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  iPhone
                </a>
              </li>
            </ul>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="mb-2 text-xs font-semibold text-[#1d1d1f]">
              Account
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  Manage Your Apple Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  iCloud.com
                </a>
              </li>
            </ul>
          </div>

          {/* Apple Values Column */}
          <div>
            <h3 className="mb-2 text-xs font-semibold text-[#1d1d1f]">
              Apple Values
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* About Apple Column */}
          <div>
            <h3 className="mb-2 text-xs font-semibold text-[#1d1d1f]">
              About Apple
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  Apple Leadership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  Career Opportunities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#424245] hover:text-[#0066cc] hover:underline"
                >
                  Ethics & Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Find a Retailer */}
        <div className=" border-[#d2d2d7] py-4">
          <p className="text-xs text-[#424245]">
            <a href="#" className="text-[#0066cc] hover:underline">
              Find a retailer
            </a>{" "}
            near you.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start justify-between border-t border-[#d2d2d7] pt-4 text-xs text-[#86868b] md:flex-row md:items-center">
          <div className="mb-2 flex flex-wrap items-center gap-x-2 md:mb-0">
            <span>Copyright © 2026 Apple Inc. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Site Map
            </a>
          </div>
          <div>Nigeria</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
