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
    title: "iPad and iPhone",
    description:
      "iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations, and more. You can also pick up wherever you left off with Handoff.",
    image: "/ipad_iphone.jpg",
  },
  {
    id: "mac",
    title: "iPad and Mac",
    description:
      "iPad and Mac are designed to work together to form the ultimate creative setup. Sketch on your iPad and have it appear instantly on your Mac with Sidecar. Then use your iPad for drawing or editing with Apple Pencil or as a second display. Extend your workflow to new places, and when you return to your desk, Universal Control allows you to use one mouse or trackpad seamlessly across both devices.",
    image: "/ipad_mac.jpg",
  },
  {
    id: "watch",
    title: "iPad and Apple Watch",
    description:
      "iPad is perfect for seeing rich Health data tracked from Apple Watch and reviewing trends and highlights in your Health app on a larger display. You can also invite your loved ones to securely share their health information with you to give you peace of mind and stay connected to each other.",
    image: "/ipad_watch.jpg",
  },
  
];

const IPadEcosystem = () => (
  // EcosystemSection is a drop-in — same component, iPad data
  <EcosystemSection
    title="Unlock the world of Apple."
    items={ecosystemItems}
    defaultActive="iphone"
  />
);

export default IPadEcosystem;
