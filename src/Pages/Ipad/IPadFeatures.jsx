import HorizontalCarousel from "../../Components/HorizontalCarousel";
import SectionWrapper from "../../components/layout/SectionWrapper";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/product/FeatureCard";

/**
 * iPadFeatures
 * "Get to know iPad" carousel section.
 *
 * How it uses shared components:
 *  - SectionWrapper  → consistent section padding
 *  - SectionHeading  → consistent h2 style; only the title text changes
 *  - FeatureCard     → tall image card with overlay text; same as Mac
 *
 * The only thing unique to this file is the iPad-specific `features` array.
 */
const features = [
  {
    title: "IPadOS +  Apps",
    subtitle: "Everyday superpowers. Bulit right in",
    image: "/fc_ipados.jpg",
  },
  {
    title: "Productivity",
    subtitle: "Your workplace can be any place",
    image: "/fc_productivity.jpg",
  },
  {
    title: "Cretivity.",
    subtitle: "Take your inner artist out and about",
    image: "/fc_creativity.jpg",
  },
  {
    title: "Learning",
    subtitle: "Your classroom can be anywhere",
    image: "/fc_learning.jpg",
  },
  {
    title: "Entertainment",
    subtitle: "Kick back. Tune in. Game on.",
    image: "/fc_entertainment.jpg",
  },
  {
    title: "Apple Pencil",
    subtitle: "Dream it up. Jot it down",
    image: "/fc_pencil.jpg",
  },
  {
    title: "Apple Intelligence",
    subtitle: "Personal, Private, Powerful",
    image: "/fc_apple_intelligence.jpg",
  },
];

const IPadFeatures = () => {
  return (
    <SectionWrapper>
      {/* SectionHeading: same component — title prop changes per page */}
      <SectionHeading title="Get to know iPad." />

      <HorizontalCarousel>
        {features.map((feature, index) => (
          // FeatureCard: exactly the same component used in MacFeatures
          <FeatureCard
            key={index}
            data-card
            title={feature.title}
            subtitle={feature.subtitle}
            image={feature.image}
          />
        ))}
      </HorizontalCarousel>
    </SectionWrapper>
  );
};

export default IPadFeatures;
