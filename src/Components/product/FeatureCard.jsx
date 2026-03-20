/**
 * FeatureCard
 * A tall image card used in "Get to know [product]" carousels.
 * Used on Mac, iPhone, iPad feature sections.
 *
 * Props:
 *  - title      : main bold heading
 *  - subtitle   : small label above the title
 *  - image      : image src string
 *  - href       : optional link (default "#")
 *  - className  : extra classes on the card wrapper
 */
const FeatureCard = ({ title, subtitle, image, href = "#", className = "" }) => {
  return (
    <div
      className={`min-w-[85%] sm:min-w-95 h-155 rounded-3xl overflow-hidden snap-start relative ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text */}
      <div className="relative p-8 text-white">
        {subtitle && (
          <p className="text-sm opacity-80 mb-2">{subtitle}</p>
        )}
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default FeatureCard;
