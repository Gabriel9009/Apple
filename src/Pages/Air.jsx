import logo from "../assets/logo.jpeg";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchToggle = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSearch(!search);
  };

  const handleMenuToggle = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(!open);
  };

  const getNavbarBg = () => {
    if (scrolled) return "bg-black/70 backdrop-blur-md";
    switch (location.pathname) {
      case "/mac":
        return "bg-blue-800";
      case "/ipad":
        return "bg-green-800";
      case "/iphone":
        return "bg-red-800";
      case "/support":
        return "bg-purple-800";
      case "/buy":
        return "bg-yellow-800";
      default:
        return "bg-[#181818]";
    }
  };

  const dropdownContent = {
    mac: {
      sections: [
        {
          title: "Explore Mac",
          links: [
            "Explore All Mac",
            "MacBook Air",
            "MacBook Pro",
            "iMac",
            "Mac mini",
            "Mac Studio",
            "Mac Pro",
            "Displays",
          ],
        },
        {
          title: "More from Mac",
          links: ["Mac Support", "macOS Sequoia", "Apps for Mac", "Shop Mac"],
        },
      ],
    },
    ipad: {
      sections: [
        {
          title: "Explore iPad",
          links: [
            "Explore All iPad",
            "iPad Pro",
            "iPad Air",
            "iPad",
            "iPad mini",
            "Apple Pencil",
            "Keyboards",
          ],
        },
        {
          title: "More from iPad",
          links: ["iPad Support", "iPadOS 18", "Apps for iPad", "Shop iPad"],
        },
      ],
    },
    iphone: {
      sections: [
        {
          title: "Explore iPhone",
          links: [
            "Explore All iPhone",
            "iPhone 16 Pro",
            "iPhone 16",
            "iPhone 15",
            "iPhone 14",
            "iPhone SE",
          ],
        },
        {
          title: "More from iPhone",
          links: [
            "iPhone Support",
            "iOS 18",
            "Apps for iPhone",
            "Shop iPhone",
          ],
        },
      ],
    },
    support: {
      sections: [
        {
          title: "Explore Support",
          links: [
            "iPhone Support",
            "Mac Support",
            "iPad Support",
            "Watch Support",
            "AirPods Support",
            "Music Support",
            "TV Support",
          ],
        },
        {
          title: "Get Help",
          links: ["Community", "Check Coverage", "Repair", "Contact Us"],
        },
      ],
    },
    buy: {
      sections: [
        {
          title: "Find a Store",
          links: [
            "Find a Retailer",
            "Genius Bar",
            "Today at Apple",
            "Apple Camp",
            "Apple Store App",
          ],
        },
      ],
    },
  };

  return (
    <>
      <div
        className={`${getNavbarBg()} fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-white">
          <Link to="/">
            <img src={logo} alt="logo" className="w-8" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link
              to="/mac"
              onMouseEnter={() => setActiveDropdown("mac")}
              className="hover:text-gray-300"
            >
              Mac
            </Link>

            <Link
              to="/ipad"
              onMouseEnter={() => setActiveDropdown("ipad")}
              className="hover:text-gray-300"
            >
              iPad
            </Link>

            <Link
              to="/iphone"
              onMouseEnter={() => setActiveDropdown("iphone")}
              className="hover:text-gray-300"
            >
              iPhone
            </Link>

            <Link
              to="/support"
              onMouseEnter={() => setActiveDropdown("support")}
              className="hover:text-gray-300"
            >
              Support
            </Link>

            <Link
              to="/buy"
              onMouseEnter={() => setActiveDropdown("buy")}
              className="hover:text-gray-300"
            >
              Where to Buy
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <CiSearch
              onClick={handleSearchToggle}
              className="text-2xl cursor-pointer hover:text-gray-300"
            />
            <RxHamburgerMenu
              onClick={handleMenuToggle}
              className="md:hidden text-2xl cursor-pointer hover:text-gray-300"
            />
          </div>
        </div>

        {/* Dropdown Menus */}
        {activeDropdown && (
          <div className="bg-white text-black shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 gap-12">
              {dropdownContent[activeDropdown]?.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-xs text-gray-500 mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-2xl hover:text-gray-600"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center space-y-8 text-3xl font-light">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-2xl transition-all duration-300"
          >
            ✕
          </button>

          <Link to="/mac" onClick={() => setOpen(false)}>
            Mac
          </Link>
          <Link to="/ipad" onClick={() => setOpen(false)}>
            iPad
          </Link>
          <Link to="/iphone" onClick={() => setOpen(false)}>
            iPhone
          </Link>
          <Link to="/support" onClick={() => setOpen(false)}>
            Support
          </Link>
          <Link to="/buy" onClick={() => setOpen(false)}>
            Where to Buy
          </Link>
        </div>
      )}

      {search && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-start justify-center pt-20">
          <button
            onClick={() => setSearch(false)}
            className="absolute top-4 right-6 font-sans"
          >
            ✕
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="w-3/4 md:w-1/2 bg-transparent border-b-2 border-white text-white text-2xl py-2 outline-none"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;