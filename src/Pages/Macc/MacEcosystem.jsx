import EcosystemSection from "../../components/product/EcosystemSection";

const ecosystemItems = [
  {
    id: "iphone",
    title: "Mac and iPhone",
    description:
      "Answer calls or messages from your iPhone directly on your Mac...",
    image: "/mac_iphone.jpg",
  },
  {
    id: "ipad",
    title: "Mac and iPad",
    description:
      "Use iPad as a second display or draw directly into your Mac apps...",
    image: "/mac_ipad_es.jpg",
  },
  {
    id: "watch",
    title: "Mac and Apple Watch",
    description:
      "Unlock your Mac automatically and approve secure actions...",
    image: "/mac_watch.jpg",
  },
];

const MacEcosystem = () => (
  <EcosystemSection
    title="Unlock the world of Apple."
    items={ecosystemItems}
  />
);

export default MacEcosystem;
