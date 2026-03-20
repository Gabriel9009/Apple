/**
 * ColorDots
 * Renders a row of color swatch dots for product cards.
 * Used in Mac, iPhone, iPad product listings.
 *
 * Props:
 *  - colors     : string[] — array of CSS color values
 *  - className  : extra wrapper classes
 */
const ColorDots = ({ colors, className = "" }) => {
  if (!colors || colors.length === 0) return null;

  return (
    <div className={`flex justify-center gap-1.5 mt-3 mb-1 ${className}`}>
      {colors.map((color, i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full border border-gray-200"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ColorDots;
