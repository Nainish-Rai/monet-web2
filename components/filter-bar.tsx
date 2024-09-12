import * as React from "react";
import { FilterButton } from "./filter-button";
import { TypeButton } from "./type-button";

const filterOptions = new Map([
  ["all", { label: "All", id: "all" }],
  ["latest", { label: "Latest", id: "latest" }],
  ["trending", { label: "Trending", id: "trending" }],
  ["expiring", { label: "Expiring", id: "expiring" }],
  ["highToLow", { label: "Highest to lowest", id: "highToLow" }],
]);

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");

  const filterButtons = React.useMemo(() => {
    return Array.from(filterOptions.values()).map((option) => (
      <FilterButton
        key={option.id}
        label={option.label}
        isActive={activeFilter === option.id}
        onClick={() => setActiveFilter(option.id)}
      />
    ));
  }, [activeFilter]);

  return (
    <nav className="flex flex-wrap gap-2 items-center text-base">
      {filterButtons}
      <TypeButton />
    </nav>
  );
};

export default FilterBar;
