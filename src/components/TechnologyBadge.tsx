interface TechnologyBadgeProps {
  group: number;
  technology: string;
}

const symbols = ["</>", "{}", "☁", "◇"] as const;

export function TechnologyBadge({ group, technology }: TechnologyBadgeProps) {
  return (
    <span className={`technology-badge technology-group-${group + 1}`}>
      <span aria-hidden="true" className="technology-symbol">
        {symbols[group] ?? "•"}
      </span>
      <span>{technology}</span>
    </span>
  );
}
