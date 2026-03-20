/**
 * SectionHeading
 * Consistent heading style across product pages.
 *
 * Props:
 *  - title      : main heading text (required)
 *  - subtitle   : optional smaller text above the title
 *  - size       : "xl" | "2xl" | "3xl" | "4xl" | "5xl" (default "4xl")
 *  - className  : extra classes on the wrapper div
 *  - align      : "left" | "center" | "right" (default "left")
 */
const SectionHeading = ({
  title,
  subtitle,
  size = "4xl",
  className = "",
  align = "left",
}) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {subtitle && (
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          {subtitle}
        </p>
      )}
      <h2 className={`text-${size} font-semibold tracking-tight`}>{title}</h2>
    </div>
  );
};

export default SectionHeading;
