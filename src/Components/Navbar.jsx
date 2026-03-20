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
  if (scrolled) return "bg-black/70 backdrop-blur-md"; // keep scroll effect

  switch (location.pathname) {
    case "/":
      return "bg-black";
    case "/mac":
      return "bg-black"; // example color for Mac page
    case "/mac/explore-all-mac":
      return "bg-black"; // example color for Mac page
    case "/ipad":
      return "bg-white"; // example color for iPad page
    case "/iphone":
      return "bg-white"; // example color for iPhone page
    case "/support":
      return "bg-white"; // example color for Support page
    case "/buy":
      return "bg-white"; // example color for Where to Buy page
    default:
      return "bg-white"; // default color
  }
};

  const getNavbarTextColor = () => {
    // You can customize text colors per page if needed
    switch (location.pathname) {
      case "/":
        return "text-white";
     case "/mac":
        return "text-white";
     case "/mac/explore-all-mac":
        return "text-white";
      case "/ipad":
        return "text-black";
      case "/iphone":
        return "text-black";
      case "/support":
        return "text-black";
      case "/buy":
        return "text-black"; // Example: different text color for buy page
      default:
        return "text-black";
    }
  };

  // Dropdown content for each menu item
  const dropdownContent = {
    mac: {
      sections: [
        {
          title: "Explore Mac",
          links: [
            "Explore All Mac",
            // "MacBook Air",
            // "MacBook Pro",
            // "iMac",
            // "Mac mini",
            // "Mac Studio",
            // "Mac Pro",
            // "Displays",
          ],
        },
        // {
        //   title: "More from Mac",
        //   links: ["Mac Support", "macOS Sequoia", "Apps for Mac", "Shop Mac"],
        // },
      ],
    },
    ipad: {
      sections: [
        {
          title: "Explore iPad",
          links: [
            "Explore All iPad",
            // "iPad Pro",
            // "iPad Air",
            // "iPad",
            // "iPad mini",
            // "Apple Pencil",
            // "Keyboards",
          ],
        },
        // {
        //   title: "More from iPad",
        //   links: ["iPad Support", "iPadOS 18", "Apps for iPad", "Shop iPad"],
        // },
      ],
    },
    iphone: {
      sections: [
        {
          title: "Explore iPhone",
          links: [
            "Explore All iPhone",
            // "iPhone 16 Pro",
            // "iPhone 16",
            // "iPhone 15",
            // "iPhone 14",
            // "iPhone SE",
          ],
        },
        // {
        //   title: "More from iPhone",
        //   links: [
        //     "iPhone Support",
        //     "iOS 18",
        //     "Apps for iPhone",
        //     "Shop iPhone",
        //   ],
        // },
      ],
    },
    support: {
      sections: [
        {
          title: "Explore Support",
          links: [
            "iPhone Support",
            // "Mac Support",
            // "iPad Support",
            // "Watch Support",
            // "AirPods Support",
            // "Music Support",
            // "TV Support",
          ],
        },
        // {
        //   title: "Get Help",
        //   links: [
        //     "Community",
        //     "Check Coverage",
        //     "Repair",
        //     "Contact Us",
        //   ],
        // },
      ],
    },
    buy: {
      sections: [
        {
          title: "Find a Store",
          links: [
            "Find a Retailer",
          ],
        },
      ],
    },
  };

  return (
    <>
      <header
        className={`
          w-full px-6 py-4 font-[Inter] fixed top-0 z-40
          transition-all duration-300
        ${getNavbarBg()} ${getNavbarTextColor()} ` }  onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-5xl mx-auto">
          <nav className="flex justify-between">
            <div>
              <Link to="/">
                <img className="w-4" src={logo} alt="apple logo" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 font-medium text-xs">
              <li
                onMouseEnter={() => setActiveDropdown("mac")}
               
              >
                <Link to="/mac" className="hover:text-gray-300 transition-colors">
                  Mac
                </Link>
              </li>
              <li
                onMouseEnter={() => setActiveDropdown("ipad")}
              
              >
                <Link to="/ipad" className="hover:text-gray-300 transition-colors">
                  iPad
                </Link>
              </li>
              <li
                onMouseEnter={() => setActiveDropdown("iphone")}
               
              >
                <Link to="/iphone" className="hover:text-gray-300 transition-colors">
                  iPhone
                </Link>
              </li>
              <li
                onMouseEnter={() => setActiveDropdown("support")}
                
              >
                <Link to="/support" className="hover:text-gray-300 transition-colors">
                  Support
                </Link>
              </li>
              <li
                onMouseEnter={() => setActiveDropdown("buy")}
               
              >
                <Link to="/buy" className="hover:text-gray-300 transition-colors">
                  Where to Buy
                </Link>
              </li>
            </ul>

            <div className="flex gap-2.5">
              <button onClick={handleSearchToggle}>
                <CiSearch />
              </button>

              <button onClick={handleMenuToggle} className="md:hidden">
                <RxHamburgerMenu />
              </button>
            </div>
          </nav>

          {/* Mobile Fullscreen Menu */}
          {open && (
            <div className="fixed inset-0 bg-[#181818] z-50 md:hidden px-8 py-10 transition-all duration-75">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-2xl transition-all duration-300"
              >
                ✕
              </button>

              <ul className="flex flex-col gap-8 text-3xl font-semibold mt-16">
                <li>
                  <Link to="/mac" onClick={() => setOpen(false)}>
                    Mac
                  </Link>
                </li>
                <li>
                  <Link to="/ipad" onClick={() => setOpen(false)}>
                    iPad
                  </Link>
                </li>
                <li>
                  <Link to="/iphone" onClick={() => setOpen(false)}>
                    iPhone
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => setOpen(false)}>
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/buy" onClick={() => setOpen(false)}>
                    Where to Buy
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {search && (
            <div className="fixed inset-0 bg-[#181818] z-50 md:hidden px-8 py-10">
              <button
                onClick={() => setSearch(false)}
                className="absolute top-4 right-6 font-sans"
              >
                ✕
              </button>
              <form>
                <div className="flex flex-row items-center">
                  <CiSearch className="inline text-3xl mr-2.5" />
                  <input
                    className="outline-0 text-3xl bg-transparent"
                    autoFocus
                    type="search"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Dropdown Menus */}
      {activeDropdown && (
        <div
          className="fixed left-0 right-0 top-12 bg-[#181818] text-white z-30 hidden md:block"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)} 
          
        >
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 ">
              {dropdownContent[activeDropdown]?.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-xs text-gray-400 font-semibold mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          to={`/${activeDropdown}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-2xl font-semibold hover:text-gray-300 transition-colors block"
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
        </div>
      )}
    </>
  );
};

export default Navbar;