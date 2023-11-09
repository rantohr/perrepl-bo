import { FC } from "react";
import { IListOptions } from "../../interfaces/genricModule/icolumn.interface";
import "./genericList.css";
import GenericTable from "../genericTable/GenericTable";
import GenericPageHeader from "./GenericPageHeader";
import GenericListFilters from "./GenericListFilters";

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
      <GenericPageHeader title={title} total={total} actions={actions} />

      {/* LIST FILTER */}
      <GenericListFilters mainFilters={mainFilters} filters={filters} tabs={tabs} displayModeChange={displayModeChange} />

      <GenericTable columns={columns} rows={rows} rowActions={rowActions} />
    </div>
  );
};

export default GenericList;
