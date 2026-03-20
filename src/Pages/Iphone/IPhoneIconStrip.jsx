import IconStrip from "../../components/ui/IconStrip";

// SVG icon imports — same pattern as MacIconStrip.jsx
import iphone_16 from "/nav_iphone_16.png";
import iphone_16e from "/nav_iphone_16e.png";
import iphone_17 from "/nav_iphone_17.png";
import iphone_17_pro from "/nav_iphone_17pro.png";
import iphone_air from "/nav_iphone_air.png";

/**
 * iPadIconStrip
 * The product nav strip at the top of the iPad page.
 * Feeds iPad-specific items into the shared IconStrip component.
 */
const IPhoneIconStrip = () => {
  const items = [
    { name: "iPhone 17 pro", image: iphone_17_pro },
    { name: "iPhone Air", image: iphone_air },
    { name: "iPhone 17", image: iphone_17 },
    { name: "iPhone 16", image: iphone_16 },
    { name: "iPhone 16e", image: iphone_16e },
  ];

  return <IconStrip items={items} />;
};

export default IPhoneIconStrip;
