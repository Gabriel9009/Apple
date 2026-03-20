import HorizontalCarousel from "../../Components/HorizontalCarousel";
import SectionWrapper from "../../components/layout/SectionWrapper";
import ProductCard from "../../components/product/ProductCard";
import iphoneprod from "./iphoneprod";

const IPhoneProducts = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="text-5xl font-bold ml-20 py-10">Explore the lineup.</h1>
      <SectionWrapper noPadding className="pb-24">
      <HorizontalCarousel>
        {iphoneprod.map((product) => (
          <ProductCard
            key={product.id}
            data-card
            name={product.name}
            description={product.description}
            colors={product.colors}
            image={product.image}
          />
        ))}
      </HorizontalCarousel>
    </SectionWrapper>
    </div>
    
  );
};

export default IPhoneProducts;
