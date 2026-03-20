import { useState } from "react";
import AccordionItem from "../ui/AccordionItem";
import SectionHeading from "../ui/SectionHeading";

/**
 * EcosystemSection
 * A two-column layout: accordion list on the left, contextual image on the right.
 * Used on Mac, iPhone, iPad pages to show cross-device integration.
 *
 * Props:
 *  - title   : section heading (e.g. "Unlock the world of Apple.")
 *  - items   : [{
 *                id: string,
 *                title: string,
 *                description: string,
 *                image: string (src),
 *              }]
 *  - defaultActive : id of item open by default (defaults to first item)
 */
const EcosystemSection = ({ title, items = [], defaultActive }) => {
  const [active, setActive] = useState(defaultActive ?? items[0]?.id);

  const activeItem = items.find((item) => item.id === active);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={title} size="5xl" className="mb-4" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-gray-100 rounded-2xl px-10">
          {/* LEFT — Accordion */}
          <div>
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                title={item.title}
                isOpen={active === item.id}
                onToggle={() => setActive(item.id)}
              >
                {item.description}
              </AccordionItem>
            ))}
          </div>

          {/* RIGHT — Image */}
          <div className="relative">
            {activeItem && (
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full rounded-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
