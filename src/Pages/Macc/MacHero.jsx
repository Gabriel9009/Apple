


import SectionWrapper from "../../components/layout/SectionWrapper";

/**
 * MacHero
 * Hero heading for the Mac page.
 * Uses SectionWrapper for consistent padding/layout.
 */
const MacHero = () => {
  return (
    <SectionWrapper noPadding className="pt-24 pb-16">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
        Mac
      </h1>
    </SectionWrapper>
  );
};

export default MacHero;
