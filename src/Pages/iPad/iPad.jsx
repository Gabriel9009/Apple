






import IPadIconStrip from "./iPadIconStrip";
import IPadEcosystem from "./iPadEcosystem";
import IPadFeatures from "./iPadFeatures";
import IPadProducts from "./iPadProducts";
import IPadHero from "./IPadHero"



/**
 * iPad page
 *
 * Structure is identical to Mac.jsx — the only differences are:
 *  1. The section-level files (iPadIconStrip, iPadProducts, etc.) which
 *     each hold iPad-specific DATA (product names, images, feature cards).
 *  2. Those section files delegate all layout/UI to the shared components.
 *
 * To build an iPhone page, you'd follow this exact same pattern.
 */
const IPad = () => {
  return (
    <main className="bg-white text-black">
      <IPadIconStrip />
      <IPadHero />
      <IPadProducts />
      <IPadFeatures />
      <IPadEcosystem />
    </main>
  );
};

export default IPad;
