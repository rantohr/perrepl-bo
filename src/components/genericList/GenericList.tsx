import { FC } from "react";
import { IListOptions } from "../../interfaces/genricModule/icolumn.interface";
import "./genericList.css";
import GenericTable from "../genericTable/GenericTable";
import GenericPageHeader from "./GenericPageHeader";
import GenericListFilters from "./GenericListFilters";
import BadgeCustom from "../../pages/components/BadgeCustom";

const GenericList: FC<IListOptions> = ({
  title,
  total,
  actions,
  mainFilters,
  filters,
  columns,
  rows,
  rowActions,
  tabs,
  displayModeChange,
}) => {
  return (
    <div className="list-container order-list">
      {/* LIST HEADER */}
      {total && actions && (
        <GenericPageHeader title={title} total={total} actions={actions} />
      )}
      {/* LIST FILTER */}
      {filters && (
        <GenericListFilters
          mainFilters={mainFilters}
          filters={filters}
          tabs={tabs}
          displayModeChange={displayModeChange}
        />
      )}
      <div className="">
        <div className="flex gap-2">
          {mainFilters?.map((filter, filter_index) => {
            return (
              <>
                <BadgeCustom
                  label={filter.label}
                  active={filter.active}
                  onClick={filter.callback}
                  key={filter_index}
                />
              </>
            );
          })}
        </div>
      </div>

      <GenericTable columns={columns} rows={rows} rowActions={rowActions} />
    </div>
  );
};

export default GenericList;
