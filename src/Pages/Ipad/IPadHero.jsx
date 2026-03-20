import SectionWrapper from "../../components/layout/SectionWrapper";

/**
 * iPadHero
 * Hero heading for the iPad page.
 * Identical structure to MacHero — just a different title.
 * Uses SectionWrapper for consistent spacing.
 */
const IPadHero = () => {
  return (
    <SectionWrapper noPadding className="pt-24 pb-16">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
        iPad
      </h1>
    </SectionWrapper>
  );
};

export default IPadHero;
