import EcosystemSection from "../../components/product/EcosystemSection";

/**
 * iPadEcosystem
 * Cross-device integration section for the iPad page.
 *
 * How it uses shared components:
 *  - EcosystemSection → handles ALL layout, accordion state, and image switching.
 *    We only pass in iPad-specific `title` and `items` data.
 *    The Mac page passes Mac-specific items. Completely interchangeable.
 */
const ecosystemItems = [
  {
    id: "iphone",
    title: "iPhone and Mac",
    description:
      "You can copy images, video or text from your iPhone and paste it into a different app on your Mac, as well as answer calls or messages from your iPhone. And with iCloud, you can access your favourite files from either your iPhone or Mac.",
    image: "/watch.jpg",
  },
  {
    id: "mac",
    title: "iPhone and Apple Watch",
    description:
      "Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction. To set up a group photo on your iPhone, join the group and use Apple Watch as a viewfinder to snap the shot. And when you take a call on your Apple Watch, just tap your iPhone to continue the conversation there.",
    image: "/mac_medium.jpg",
  },

  
];

const IPhoneEcosystem = () => (
  // EcosystemSection is a drop-in — same component, iPad data
  <EcosystemSection
    title="Significant others."
    items={ecosystemItems}
    defaultActive="iphone"
  />
);

export default IPhoneEcosystem;
