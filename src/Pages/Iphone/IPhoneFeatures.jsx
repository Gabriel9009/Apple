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
    title: "Beautiful and durable by design",
    subtitle: "Innovation",
    image: "/innovation.jpg",
  },
  {
    title: "Picture your best photos and videos",
    subtitle: "Cutting-Edge Cameras",
    image: "/camera.jpg",
  },
  {
    title: "Fast and Battery Life",
    subtitle: "Chip and Battery Life",
    image: "/chip.jpg",
  },
  {
    title: "New look. Even more magic",
    subtitle: "iOS and Apple Intelligence",
    image: "/ios.jpg",
  },
  {
    title: "Designed with the earth in mind",
    subtitle: "Environment",
    image: "/environment.jpg",
  },
  {
    title: "Your data. Just where you want it",
    subtitle: "Privacy",
    image: "/privacy.jpg",
  },
];

const IPhoneFeatures = () => {
  return (
    <SectionWrapper>
      {/* SectionHeading: same component — title prop changes per page */}
      <SectionHeading title="Get to know iPhone." />

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

export default IPhoneFeatures;
