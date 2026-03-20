/**
 * iPhone.jsx — Example showing how the same components power a new page
 * with zero repeated layout code.
 */
import { useState, useMemo } from "react";
import HorizontalCarousel from "../../Components/HorizontalCarousel";
import {
  SectionWrapper,
  SectionHeading,
  FilterTabs,
  ProductCard,
  FeatureCard,
  EcosystemSection,
  IconStrip,
} from "../../components";

// -- Data ----------------------------------------------------------------

import iphone from "/iphone.svg"; // your SVG assets
import iphoneCase from "/iphone-case.svg";
import airpods from "/airpods.svg";
import appleWatch from "/apple-watch.svg";

const iconItems = [
  { name: "iPhone 16", image: iphone },
  { name: "iPhone 16 Pro", image: iphone },
  { name: "Compare", image: iphone },
  { name: "AirPods", image: airpods },
  { name: "Apple Watch", image: appleWatch },
];

const categories = [
  { label: "All models", value: "all" },
  { label: "iPhone 16", value: "16" },
  { label: "iPhone 16 Pro", value: "16pro" },
];

const products = [
  {
    id: 1,
    name: "iPhone 16",
    chip: "A18 chip",
    description: "A new era. Built for Apple Intelligence.",
    category: "16",
    colors: ["#e87c5b", "#f5d5b8", "#9ab5e0", "#232325"],
    image: "/iphone16.jpg",
  },
  {
    id: 2,
    name: "iPhone 16 Plus",
    chip: "A18 chip",
    description: "Big screen. Big performance.",
    category: "16",
    colors: ["#e87c5b", "#f5d5b8", "#9ab5e0", "#232325"],
    image: "/iphone16plus.jpg",
  },
  {
    id: 3,
    name: "iPhone 16 Pro",
    chip: "A18 Pro chip",
    description: "Pro. Forged in titanium.",
    category: "16pro",
    colors: ["#c8b89a", "#d4c5b0", "#232325", "#e8e8e8"],
    image: "/iphone16pro.jpg",
  },
  {
    id: 4,
    name: "iPhone 16 Pro Max",
    chip: "A18 Pro chip",
    description: "The biggest Pro. Ever.",
    category: "16pro",
    colors: ["#c8b89a", "#d4c5b0", "#232325", "#e8e8e8"],
    image: "/iphone16promax.jpg",
  },
];

const features = [
  { title: "Power you can feel.", subtitle: "A18 chip", image: "/if_chip.jpg" },
  { title: "See everything.", subtitle: "Camera System", image: "/if_camera.jpg" },
  { title: "All day. All night.", subtitle: "Battery Life", image: "/if_battery.jpg" },
  { title: "Made to last.", subtitle: "Durability", image: "/if_durability.jpg" },
];

const ecosystemItems = [
  {
    id: "mac",
    title: "iPhone and Mac",
    description: "Continue tasks between your iPhone and Mac seamlessly with Handoff and Universal Clipboard.",
    image: "/iphone_mac.jpg",
  },
  {
    id: "watch",
    title: "iPhone and Apple Watch",
    description: "Track your fitness, get notifications, and unlock your devices together.",
    image: "/iphone_watch.jpg",
  },
  {
    id: "ipad",
    title: "iPhone and iPad",
    description: "Share files, use your iPhone as a webcam, and more.",
    image: "/iphone_ipad.jpg",
  },
];

// -- Page ----------------------------------------------------------------

const iPhone = () => {
  const [category, setCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    if (category === "all") return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  return (
    <main className="bg-white text-black">
      {/* Same IconStrip component, different items */}
      <IconStrip items={iconItems} />

      {/* Hero — just a heading, no special component needed */}
      <SectionWrapper noPadding className="pt-24 pb-16">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">iPhone</h1>
      </SectionWrapper>

      {/* Products — same FilterTabs + ProductCard pattern as Mac */}
      <SectionWrapper noPadding className="pb-24">
        <FilterTabs tabs={categories} active={category} onChange={setCategory} />
        <HorizontalCarousel>
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              chip={p.chip}
              description={p.description}
              colors={p.colors}
              image={p.image}
            />
          ))}
        </HorizontalCarousel>
      </SectionWrapper>

      {/* Features — same FeatureCard carousel pattern */}
      <SectionWrapper>
        <SectionHeading title="Get to know iPhone." />
        <HorizontalCarousel>
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} subtitle={f.subtitle} image={f.image} />
          ))}
        </HorizontalCarousel>
      </SectionWrapper>

      {/* Ecosystem — same EcosystemSection, different items */}
      <EcosystemSection
        title="Unlock the world of Apple."
        items={ecosystemItems}
      />
    </main>
  );
};

export default iPhone;
