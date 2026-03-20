import { useState, useMemo } from "react";
import HorizontalCarousel from "../../Components/HorizontalCarousel";
import FilterTabs from "../../components/ui/FilterTabs";
import ProductCard from "../../components/product/ProductCard";
import SectionWrapper from "../../components/layout/SectionWrapper";
import products from "./product";
const categories = [
  { label: "All products", value: "all" },
  { label: "Laptops", value: "laptop" },
  { label: "Desktops", value: "desktop" },
  { label: "Displays", value: "display" },
];


const MacProducts = () => {
  const [category, setCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    if (category === "all") return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  return (
    <SectionWrapper noPadding className="pb-24">
      <FilterTabs tabs={categories} active={category} onChange={setCategory} />

      <HorizontalCarousel>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            data-card
            name={product.name}
            chip={product.chip}
            description={product.description}
            colors={product.colors}
            image={product.image}
          />
        ))}
      </HorizontalCarousel>
    </SectionWrapper>
  );
};

export default MacProducts;
