import ColorDots from "../ui/ColorDots";

/**
 * ProductCard
 * A card used in all Apple product listing carousels (Mac, iPhone, iPad, etc.).
 * Renders image, color swatches, chip info, description, and CTA buttons.
 *
 * Props:
 *  - name           : product name
 *  - chip           : chip description (optional)
 *  - description    : short product description
 *  - colors         : string[] of CSS color values (optional)
 *  - image          : JSX image element or src string
 *  - learnMoreHref  : URL for "Learn more" button (default "#")
 *  - buyHref        : URL for "Find a store" link (default "#")
 *  - className      : extra classes on the card wrapper
 */
const ProductCard = ({
  name,
  chip,
  description,
  colors,
  image,
  learnMoreHref = "#",
  buyHref = "#",
  className = "",
}) => {
  const imageEl =
    typeof image === "string" ? (
      <img src={image} alt={name} className="w-full h-full object-contain" />
    ) : (
      image
    );

  return (
    <div
      className={`min-w-65 sm:min-w-70 lg:min-w-75 shrink-0 bg-gray-50 rounded-2xl overflow-hidden snap-start flex flex-col ${className}`}
    >
      {/* Image */}
      <div className="w-full flex items-center justify-center px-6 pt-6 h-75">
        {imageEl}
      </div>

      {/* Color Swatches */}
      <ColorDots colors={colors} />

      {/* Text & CTA */}
      <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-0.5">{name}</h3>
        {chip && <p className="text-sm text-gray-500 mb-1">{chip}</p>}
        <p className="text-sm text-gray-600 mb-5 flex-1">{description}</p>

        <div className="flex items-center gap-4">
          <a
            href={learnMoreHref}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Learn more
          </a>
          <a
            href={buyHref}
            className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
          >
            Find a store &rsaquo;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
