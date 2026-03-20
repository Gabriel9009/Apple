






import IPhoneHero from "./IPhoneHero";
import IPhoneEcosystem from "./IPhoneEcosystem";
import IPhoneFeatures from "./IPhoneFeatures";
import IPhoneIconStrip from "./IPhoneIconStrip";
import IPhoneProducts from './IPhoneProducts'



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
const IPhone = () => {
  return (
    <main className="bg-white text-black">
      <IPhoneHero />
      <IPhoneIconStrip />
      
      <IPhoneProducts />
      <IPhoneFeatures />
      <IPhoneEcosystem />
    </main>
  );
};

export default IPhone;
