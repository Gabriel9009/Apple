/**
 * AccordionItem
 * A single expandable/collapsible row.
 * Used in MacEcosystem and any FAQ / feature-detail section.
 *
 * Props:
 *  - title      : accordion header text
 *  - isOpen     : boolean — whether this item is expanded
 *  - onToggle   : () => void — called when header is clicked
 *  - children   : content to reveal when open
 *  - className  : extra classes on the wrapper div
 */
const AccordionItem = ({ title, isOpen, onToggle, children, className = "" }) => {
  return (
    <div className={`border-b border-gray-300 py-6 ${className}`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-3xl font-medium">{title}</span>
        <span className="text-gray-500 text-2xl leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        {isOpen && (
          <div className="mt-4 text-lg text-gray-600 leading-relaxed">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
