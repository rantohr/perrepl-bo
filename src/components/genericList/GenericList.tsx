import { FC } from "react";
import { IColumn, IListAction, IListFilter } from "../../interfaces/genricModule/icolumn.interface";
import './genericList.css'
import GenericTable from "../genericTable/GenericTable";
import { Button, Select } from "flowbite-react";

const GenericList: FC<{
  title: string,
  total?: number,
  actions?: IListAction[],
  mainFilters?: IListAction[],
  filters?: IListFilter[],
  columns: IColumn[],
  rows: any[],
  rowActions?: IListAction[],
}> = ({ title, total, actions, mainFilters, filters, columns, rows, rowActions }) => {

  return (
    <div className="list-container order-list">
      {/* LIST HEADER */}
      <div>
        <div className="main-title">
          <h1 className="text-3xl font-bold">{title}</h1>
          {total && <span className="big-badge">{total}</span>}
        </div>
        <div className="hedaer-button">
          {
            actions?.map((action, action_index) => {
              return (
                <Button key={`list-action-${action_index}`} outline className="outlined-button" onClick={() => action.callback()}>
                  {action.icon}
                  <p>{action.label}</p>
                </Button>
              )
            })
          }
        </div>
      </div>

      {/* LIST FILTER */}
      <div className="list-filter">
        <div>
          {
            mainFilters?.map((filter, filter_index) => {
              return (
                <Button key={`list-main-filter-${filter_index}`} outline className="default-outlined-button" onClick={() => filter.callback()}> {filter.icon} {filter.label}</Button>
              )
            })
          }
        </div>
        <div>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2.133 2.6 5.856 6.9L8 14l4 3 .011-7.5 5.856-6.9a1 1 0 0 0-.804-1.6H2.937a1 1 0 0 0-.804 1.6Z" />
          </svg>
          <p>Filtrer par</p>
          {
            filters?.map((filter, filter_index) => {
              if (filter.type === "select") {
                return (
                  <Select key={`list-filter-${filter_index}`}>
                    {
                      filter.options?.map((option, option_index) => {
                        return <option key={`list-filter-option-${filter.field}-${option_index}`} value={option.value}>{option.label}</option>
                      })
                    }
                  </Select>
                );
              }
              return <div key={`list-filter-${filter_index}`}></div>;
            })
          }
        </div>
      </div>

      <GenericTable columns={columns} rows={rows} rowActions={rowActions} />
    </div>
  );
}

export default GenericList;
