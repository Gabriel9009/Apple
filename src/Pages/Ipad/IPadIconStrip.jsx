import IconStrip from "../../components/ui/IconStrip";

// SVG icon imports — same pattern as MacIconStrip.jsx
import ipadPro from "/ipad_pro.svg";
import ipadAir from "/ipad_air.svg";
import ipadMini from "/ipad_mini.svg";
import ipad from "/ipad.svg";

/**
 * iPadIconStrip
 * The product nav strip at the top of the iPad page.
 * Feeds iPad-specific items into the shared IconStrip component.
 */
const IPadIconStrip = () => {
  const items = [
    { name: "iPad Pro", image: ipadPro },
    { name: "iPad Air", image: ipadAir },
    { name: "iPad mini", image: ipadMini },
    { name: "iPad", image: ipad },

  ];

  return <IconStrip items={items} />;
};

export default IPadIconStrip;
