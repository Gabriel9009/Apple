import HorizontalCarousel from "../../Components/HorizontalCarousel.jsx";
import SectionWrapper from "../../components/layout/SectionWrapper.jsx";
import ProductCard from "../../components/product/ProductCard.jsx";
import IPadprod from "./IPadata.js";
const IPadProducts = () => {
  return (
    <SectionWrapper noPadding className="pb-24">
      <HorizontalCarousel>
        {IPadprod.map((product) => (
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
