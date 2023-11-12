import { FC, useState } from "react";
import {
  IListAction,
  IListFilter,
} from "../../interfaces/genricModule/icolumn.interface";
import "./genericList.css";
import { Button, Select } from "flowbite-react";
import { MdDashboard, MdDns } from "react-icons/md";
import BadgeCustom from "../../pages/components/BadgeCustom";

const GenericListFilters: FC<{
  tabs?: IListAction[];
  mainFilters?: IListAction[];
  filters?: IListFilter[];
  displayModeChange?: (mode: "list" | "table" | "card") => void;
}> = ({ mainFilters, filters, tabs, displayModeChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeMainFilter, setActiveMainFilter] = useState(0);

  const clickMainFilter = (filter: IListAction, index: number) => {
    setActiveMainFilter(index);
    filter.callback();
  };

  return (
    <div className="list-filter">
      {/* TABS */}
      <div className="list-tabs">
        {tabs?.map((tab, tab_index) => {
          return (
            <div
              key={`tab-${tab_index}`}
              className={tab_index === activeTab ? "list-active-tab" : ""}
              onClick={() => {
                setActiveTab(tab_index);
                tab.callback();
              }}
            >
              <p>{tab.label}</p>
            </div>
          );
        })}
      </div>

      {/* DISPLAY */}
      <div className="list-display">
        {displayModeChange !== undefined && (
          <>
            <MdDns />
            <MdDashboard />
          </>
        )}
      </div>

      {/* MAIN FILTERS */}
      <div>
        {mainFilters?.map((filter, filter_index) => {
          return (
            <>
              <BadgeCustom
                label={filter.label}
                active={filter.label === "Tout"}
                onClick={filter.callback}
              />
              {/* <Button
                key={`list-main-filter-${filter_index}`} outline
                className={activeMainFilter === filter_index ? "contained-button-secondary" : "default-outlined-button"}
                onClick={() => clickMainFilter(filter, filter_index)}>
                {filter.icon} {filter.label}
              </Button> */}
            </>
          );
        })}
      </div>

      {/* FILTER */}
      <div>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m2.133 2.6 5.856 6.9L8 14l4 3 .011-7.5 5.856-6.9a1 1 0 0 0-.804-1.6H2.937a1 1 0 0 0-.804 1.6Z"
          />
        </svg>
        <p>Filtrer par</p>
        {filters?.map((filter, filter_index) => {
          if (filter.type === "select") {
            return (
              <Select key={`list-filter-${filter_index}`}>
                {filter.options?.map((option, option_index) => {
                  return (
                    <option
                      key={`list-filter-option-${filter.field}-${option_index}`}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  );
                })}
              </Select>
            );
          }
          return <div key={`list-filter-${filter_index}`}></div>;
        })}
      </div>
    </div>
  );
};

export default GenericListFilters;
