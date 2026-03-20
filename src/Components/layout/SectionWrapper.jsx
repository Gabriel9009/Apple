/**
 * SectionWrapper
 * A consistent section container used across all product pages.
 * Handles vertical padding, max-width, and horizontal padding.
 *
 * Props:
 *  - children        : section content
 *  - className       : extra classes for the <section> tag
 *  - innerClassName  : extra classes for the inner max-width div
 *  - maxWidth        : Tailwind max-w class (default "max-w-6xl")
 *  - noPadding       : skips py-24 when you need custom vertical rhythm
 */
const SectionWrapper = ({
  children,
  className = "",
  innerClassName = "",
  maxWidth = "max-w-6xl",
  noPadding = false,
}) => {
  return (
    <section className={`${noPadding ? "" : "py-24"} ${className}`}>
      <div className={`${maxWidth} mx-auto px-6 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
