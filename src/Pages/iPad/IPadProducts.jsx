import HorizontalCarousel from "../../Components/HorizontalCarousel";
import SectionWrapper from "../../components/layout/SectionWrapper";
import ProductCard from "../../components/product/ProductCard";
import ipadprod from "./ipadprod";
const IPadProducts = () => {
  return (
    <SectionWrapper noPadding className="pb-24">
      <HorizontalCarousel>
        {ipadprod.map((product) => (
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
  );
};

export default IPadProducts;
