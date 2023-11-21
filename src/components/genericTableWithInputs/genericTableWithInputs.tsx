import React, { useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { IColumn } from '../../interfaces/genricModule/icolumn.interface'

interface Props {
    data: { [key: string]: any }[][],
    headers: IColumn[],
    iconLeft?: any 
}

const GenericTableWithInputs: React.FC<Props> = ({ data, headers, iconLeft }) => {
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null)
    const [sortedColumn, setSortedColumn] = useState<string | null>(null)

    const handleSort = (column: IColumn) => {
        if (column.sortable) {
            if (sortedColumn === column.field) {
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
            } else {
                setSortOrder('asc')
                setSortedColumn(column.field)
            }
        }
    }

    const renderTableBody = (tableData: { [key: string]: any }[], tableIndex: number) => {
        const sortedData = tableData.slice().sort((a, b) => {
            if (sortOrder === 'asc') {
                return a[sortedColumn as string] - b[sortedColumn as string]
            } else if (sortOrder === 'desc') {
                return b[sortedColumn as string] - a[sortedColumn as string]
            } else {
                return 0
            }
        })

        return (
            <>
                <tbody className="font-semibold text-sm" key={tableIndex}>
                    {sortedData.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`bg-white ${rowIndex !== 0 && `my-2`}`}>
                            {headers.map((column, colIndex) => (
                                <td key={colIndex} className={colIndex !== 0 ? `px-2 py-3` : 'pl-6 pr-2'}>
                                    {column.displayValue ? 
                                        (row[column.field] != '' ? column.displayValue(row[column.field], row) : '') 
                                    : row[column.field]}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={headers.length} className='p-0'>
                            <div className="bg-white p-6">
                                <div className=' border-b-2 border-dashed border-grey'></div>
                            </div>
                            <div className="bg-white flex justify-end items-baseline text-violet-1 text-base font-semibold pb-6 pr-6">
                                Total
                                <span className="ml-4 text-xl font-bold">100 000Ar</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <div className='pt-2.5 opacity-0'></div>
            </>
        )
    }

    return (
        <>
            <table className="relative w-full rounded-sm text-left text-base text-violet-1">
                {iconLeft && 
                    <div className=" absolute top-2 -left-4 rounded-full bg-white text-violet-pink text-xl border-violet-pink border-2 p-1">
                        {iconLeft}
                    </div>
                }
                <thead className="" style={{ backgroundColor: '#381A440A' }}>
                    {headers.map((column, index) => (
                        <th key={index} className={`px-6 py-3 ${index !== 0 && `pl-2 pr-8`}`} onClick={() => handleSort(column)}>
                            <div className="flex items-center">
                                {column.label} {column.sortable && (
                                    <>
                                        {sortedColumn === column.field && sortOrder === 'asc' && <FaCaretUp className="ml-2" />}
                                        {sortedColumn === column.field && sortOrder === 'desc' && <FaCaretDown className="ml-2" />}
                                        {sortedColumn !== column.field && <FaCaretDown className="ml-2 opacity-0" />}
                                    </>
                                )}
                            </div>
                        </th>
                    ))}
                </thead>
                <div className='pt-2.5 opacity-0'></div>
                {data.map(renderTableBody)}
            </table>
        </>
    )
}

export default GenericTableWithInputs
