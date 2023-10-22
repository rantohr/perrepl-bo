import { Dropdown } from "flowbite-react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FC } from "react";
import { IColumn, IListAction } from "../../interfaces/genricModule/icolumn.interface";
import './genericTable.css'

const GenericTable: FC<{
  columns: IColumn[],
  rows: any[],
  rowActions?: IListAction[],
}> = ({ columns, rows, rowActions }) => {

  return (
    <div className="table-container">
      <div className="table-header">
        {
          columns.map((column: IColumn, columnIndex: number) => {
            return (
              <div key={`column-${columnIndex}`}>
                <h6>{column.label}</h6>
                {
                  column.sortable &&
                  <>
                    {!column.sort && <div className="table-column-order"><MdKeyboardArrowDown /></div>}
                    {column.sort === 'asc' && <MdKeyboardArrowDown />}
                    {column.sort === 'desc' && <MdKeyboardArrowUp />}
                  </>
                }

              </div>
            )
          })
        }
        {
          Boolean(rowActions?.length) && <div></div>
        }
      </div>
      {rows.map((row, row_index) => {
        return (
          <div className="table-row" key={`row-${row_index}`}>
            {
              columns.map((column: IColumn, columnIndex: number) => {
                return (
                  <div key={`row-${row_index}-column-${columnIndex}`}>
                    <div>{column.displayValue !== undefined ? column.displayValue(row[column.field], row) : row[column.field]}</div>
                  </div>
                )
              })
            }

            {
              Boolean(rowActions?.length) &&
              <div className="table-actions">

                <Dropdown dismissOnClick={false} label="" renderTrigger={() => (
                  <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                )}>
                  {
                    rowActions?.map((action, action_index) => {
                      return <Dropdown.Item key={`row-${row_index}-action-${action_index}`} icon={action.icon} onClick={() => action.callback(row)}>{action.label}</Dropdown.Item>
                    })
                  }
                </Dropdown>
              </div>
            }
          </div>
        )
      })}
    </div>
  );
}

export default GenericTable;
