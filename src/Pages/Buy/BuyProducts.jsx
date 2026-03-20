import { useState, useMemo } from "react";
import HorizontalCarousel from "../../Components/HorizontalCarousel";
import FilterTabs from "../../components/ui/FilterTabs";
import ProductCard from "../../components/product/ProductCard";
import SectionWrapper from "../../components/layout/SectionWrapper";
import products from "../Macc/product";
import iphoneprod from "../Iphone/iphoneprod";
import IPadprod from "../iPad/IPadprod";
const categories = [
  {label:"Mac", value:"mac"},
  {label:"Ipad", value:"ipad"},
  {label:"Iphone", value:"iphone"},
]



const BuyProducts = () => {
  const [label, setLabel] = useState("mac");

  const filteredProducts = useMemo(() => {
    if (label === 'mac') return products;
    if (label === "ipad") return IPadprod;
    if (label === "iphone") return iphoneprod;
    return [];
  }, [label]);
  return (
     <SectionWrapper>
      <FilterTabs
        tabs={categories}
        active={label}
        onChange={setLabel}
      />
      <HorizontalCarousel key={label}>
        {filteredProducts.map((prod) => (
          <ProductCard key={prod.id}
          data-card
            name={prod.name}
            chip={prod.chip}
            description={prod.description}
            colors={prod.colors}
            image={prod.image}
           />
        ))}
      </HorizontalCarousel>
    </SectionWrapper>
  )
}

export default BuyProducts;