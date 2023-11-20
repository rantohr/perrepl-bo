import React, { useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { IColumn } from '../../interfaces/genricModule/icolumn.interface'

interface Props {
    data: { [key: string]: any }[]
    headers: IColumn[]
}

const GenericTableWithInputs: React.FC<Props> = ({ data, headers }) => {
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

    const sortedData = data.slice().sort((a, b) => {
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
            <table className="w-full rounded-sm text-left text-base text-violet-1">
                <thead className="rounded-lg px-4" style={{ backgroundColor: '#f6f6f6' }}>
                    {headers.map((column, index) => (
                        <th key={index} className={`px-2 py-3 ${index !== 0 && `pl-2 pr-8`}`} onClick={() => handleSort(column)}>
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
                <tbody className="font-semibold text-sm">
                    {sortedData.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`bg-white ${rowIndex !== 0 && `my-2`}`}>
                            {headers.map((column, colIndex) => (
                                <td key={colIndex} className={colIndex !== 0 ? `px-2 py-3` : ''}>
                                    {column.displayValue ? column.displayValue(row[column.field], row) : row[column.field]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="border-b-2 border-dashed border-grey my-6"></div>
            <div className="flex justify-end items-baseline text-violet-1 text-base font-semibold">
                Total activite
                <span className="ml-4 text-xl font-semibold">100 000Ar</span>
            </div>
        </>
    )
}

export default GenericTableWithInputs