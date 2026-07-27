import { useRef, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { content, type Locale, type TimelineItem } from "../content/portfolio";

interface JourneyProps {
  locale: Locale;
}

type JourneyTab = "education" | "experience";

function Timeline({
  items,
  currentLabel,
}: {
  items: readonly TimelineItem[];
  currentLabel: string;
}) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.period}-${item.organization}-${item.title}`}>
          <time>{item.period}</time>
          <div>
            <h3>{item.title}</h3>
            <p>{item.organization}</p>
            {item.current && (
              <span className="status-pill">{currentLabel}</span>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Journey({ locale }: JourneyProps) {
  const copy = content[locale].journey;
  const [active, setActive] = useState<JourneyTab>("education");
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const tabs: Array<{ id: JourneyTab; label: string }> = [
    { id: "education", label: copy.education },
    { id: "experience", label: copy.experience },
  ];

  const selectWithKeyboard = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    const nextTab = tabs[nextIndex];
    setActive(nextTab.id);
    tabsRef.current[nextIndex]?.focus();
  };

  return (
    <section
      className="section section-journey"
      id="trajetoria"
      aria-labelledby="journey-title"
    >
      <div className="container journey-grid">
        <SectionHeading
          eyebrow={copy.eyebrow}
          id="journey-title"
          title={copy.title}
        />
        <div>
          <div className="tabs" role="tablist" aria-label={copy.eyebrow}>
            {tabs.map((tab, index) => (
              <button
                aria-controls={`${tab.id}-panel`}
                aria-selected={active === tab.id}
                id={`${tab.id}-tab`}
                key={tab.id}
                onClick={() => setActive(tab.id)}
                onKeyDown={(event) => selectWithKeyboard(event, index)}
                ref={(node) => {
                  tabsRef.current[index] = node;
                }}
                role="tab"
                tabIndex={active === tab.id ? 0 : -1}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div
            aria-labelledby={`${active}-tab`}
            id={`${active}-panel`}
            role="tabpanel"
            tabIndex={0}
          >
            <Timeline
              currentLabel={copy.current}
              items={
                active === "education"
                  ? copy.educationItems
                  : copy.experienceItems
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
