import MacIconStrip from "./MacIconStrip";
import MacHero from "./MacHero";
import MacProducts from "./MacProducts";
import MacFeatures from "./MacFeatures";
import MacEcosystem from "./MacEcosystem";

const Mac = () => {
  return (
    <main className="bg-white text-black">
      <MacIconStrip />
      <MacHero />
      <MacProducts />
      <MacFeatures />
      <MacEcosystem />
    </main>
  );
};

export default Mac;
