/**
 * IconStrip
 * A horizontal scrollable icon navigation strip.
 * Used at the top of Mac, iPhone, iPad, and other product pages.
 *
 * Props:
 *  - items      : [{ name: string, image: string (svg/img src), href?: string }]
 *  - className  : extra classes on the wrapper div
 *
 * Usage:
 *  <IconStrip items={macProducts} />
 */
const IconStrip = ({ items = [], className = "" }) => {
  return (
    <div className={`mt-12 overflow-x-auto ${className}`}>
      <div className="flex w-max gap-14 px-6 mx-auto">
        {items.map((item) => {
          const Tag = item.href ? "a" : "div";
          return (
            <Tag
              key={item.name}
              href={item.href}
              className="flex flex-col items-center cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-12 transition-transform duration-300 group-hover:scale-105"
              />
              <p className="mt-2 text-sm text-gray-700 group-hover:text-black">
                {item.name}
              </p>
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default IconStrip;
