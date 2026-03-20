/**
 * FilterTabs
 * Pill-style filter/tab switcher used in product grids.
 * Reusable across Mac, iPhone, iPad, and any filtered list.
 *
 * Props:
 *  - tabs     : [{ label: string, value: string }]
 *  - active   : currently selected value (string)
 *  - onChange : (value: string) => void
 *  - className: extra wrapper classes
 */
const FilterTabs = ({ tabs, active, onChange, className = "" }) => {
  return (
    <div className={`mb-10 ${className}`}>
      <div className="inline-flex bg-gray-100 p-1 rounded-full gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                active === tab.value
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;
