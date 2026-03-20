import HorizontalCarousel from "../../Components/HorizontalCarousel";
import SectionWrapper from "../../components/layout/SectionWrapper";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/product/FeatureCard";

const features = [
  {
    title: "Go fast. Go far.",
    subtitle: "Performance and Battery Life",
    image: "/fc_performance.jpg",
  },
  {
    title: "Smart. Secure. On device.",
    subtitle: "Built for AI",
    image: "/fc_intelligence.jpg",
  },
  {
    title: "Together they work wonders.",
    subtitle: "Mac + iPhone",
    image: "/fc_iphone.jpg",
  },
  {
    title: "Mac runs your favorite apps.",
    subtitle: "Compatibility",
    image: "/fc_compatibility.jpg",
  },
  {
    title: "Your Business is nobody else's.",
    subtitle: "Privacy and Security",
    image: "/fc_security.jpg",
  },
  {
    title: "Built to stand the test of time.",
    subtitle: "Durability",
    image: "/fc_durability.jpg",
  },
  {
    title: "Our values drive everything we do.",
    subtitle: "Apple Values",
    image: "/fc_values.jpg",
  },
];

const MacFeatures = () => {
  return (
    <SectionWrapper>
      <SectionHeading title="Get to know Mac." />
      <HorizontalCarousel>
        {features.map((feature, index) => (
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

export default MacFeatures;
