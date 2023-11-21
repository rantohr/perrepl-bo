import { FC, useState } from "react"
import { FiPlusSquare } from "react-icons/fi"
import Calc from "../../../../../public/photos/Calc 1.png"
import { IColumn } from "../../../../interfaces/genricModule/icolumn.interface"
import GenericTableWithInputs from "../../../../components/genericTableWithInputs/genericTableWithInputs"

type EmptyInputSectionProps = {
    key: number
}

const EmptyInputSection: React.FC<EmptyInputSectionProps> = ({ key }) => {
    return (
    <div key={key} className="flex justify-between mb-4">
        <div className="w-2/12 px-2.5 py-2.5 text-sm bg-transparent rounded-lg" style={{ backgroundColor: '#381A440A' }}>Dates</div>
        <div className="w-10/12 flex justify-between">
            <div className="mx-2">
                <input placeholder="Titre" type="text" name="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
            </div>
            <div className="mx-2">
                <input placeholder="Localisation" type="text" name="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
            </div>
            <div className="mx-2">
                <input placeholder="0" type="text" name="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
            </div>
            <div className="mx-2">
                <input placeholder="0Ar" type="text" name="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
            </div>
            <div className="mx-2">
                <input placeholder="0Ar" type="text" name="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
            </div>
        </div>
    </div>
    )
}

const QuotationSummary: FC = () => {
    const headers: IColumn[] = [
        { 
            field: 'date', label: 'Dates', sortable: false,
            displayValue: (value: string) => <div className="px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg " style={{backgroundColor: '#381A440A'}}>{value}</div>
        },
        {   
            field: 'litle', label: 'Titre', sortable: false,
            displayValue: (value: string) => <input value={value} type="text" name="" id="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
        },
        { 
            field: 'localisation', label: 'Localisation', sortable: true,
            displayValue: (value: string) => <input value={value} type="text" name="" id="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
        },
        { 
            field: 'quantity', label: 'Qte', sortable: true,
            displayValue: (value: string) => <input value={value} type="text" name="" id="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
        },
        { 
            field: 'invoicing', label: 'Tarifs', sortable: true,
            displayValue: (value: string) => <input value={value} type="text" name="" id="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
        },
        { 
            field: 'total', label: 'Total', sortable: true,
            displayValue: (value: string) => <input value={value} type="text" name="" id="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
        },
    ]
    
    const data = [
        [{
            date: '16 SEP 2023',
            litle: 'Ambohimanga Place',
            localisation: 'Ambohimanga Place',
            quantity: '4',
            invoicing: '5 000Ar',
            total: '20 000Ar'
        },
        {
            date: '',
            litle: 'Notes',
            localisation: 'Ambohimanga Place',
            quantity: '4',
            invoicing: '5 000Ar',
            total: '20 000Ar'
        }],
        [{
            date: '17 SEP 2023',
            litle: 'Ambohimanga Place',
            localisation: 'Ambohimanga Place',
            quantity: '4',
            invoicing: '5 000Ar',
            total: '20 000Ar'
        },
        {
            date: '',
            litle: 'Notes',
            localisation: 'Ambohimanga Place',
            quantity: '4',
            invoicing: '5 000Ar',
            total: '20 000Ar'
        }]
    ]

    const [EmptyInputSections, setEmptyInputSections] = useState<number[]>([]);

    const handleAddExtraClick = () => {
        setEmptyInputSections(prevSections => [...prevSections, Date.now()]);
    };

    return <>
        <GenericTableWithInputs headers={headers} data={data}/>

        <div className="px-6 py-4 bg-white rounded-lg text-grey font-semibold">
            {EmptyInputSections.map((key) => (
                <EmptyInputSection key={key} />
            ))}

            <div className="flex">
                <div className="w-2/12 px-2.5 py-2.5 text-sm bg-transparent rounded-lg" style={{ backgroundColor: '#381A440A' }}>Dates</div>
                <div className="w-10/12 px-2 flex cursor-pointer">
                    <div className="flex w-full justify-center items-center px-2.5 py-2.5 text-sm bg-transparent rounded-lg" style={{ backgroundColor: '#381A440A' }} onClick={handleAddExtraClick}>
                        <FiPlusSquare className="mr-2" />
                        Ajout Extra
                    </div>
                </div>
            </div>
        </div>
        <div className="px-6 py-4 mt-2.5 flex w-full flex-col bg-white rounded-lg text-grey font-semibold">
            <div >
                <div className="bg-white flex justify-end items-baseline text-base font-semibold pr-6">
                    Trip Sub Total
                    <span className="ml-4 text-xl font-bold text-violet-1">100 000Ar</span>
                </div>
                <div className="bg-white px-6 py-4">
                    <div className=' border-b-2 border-dashed border-grey'></div>
                </div>
            </div>
            <div className="flex w-full text-violet-1 text-base font-bold">
                <div className="flex w-1/2 justify-center items-end">
                    <img src={Calc} alt="" />
                </div>
                <div className="flex w-1/2">
                    <div className="flex flex-col justify-center w-1/2">
                        <div className="flex items-center justify-between my-2">
                            <span className="">Commission %</span>
                            <input placeholder="0" type="text" name="" className="w-1/2 block px-2.5 py-2.5 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
                        </div>
                        <div className="flex items-center justify-between my-2">
                            <span className="">Planning Fee</span>
                            <input placeholder="0" type="text" name="" className="w-1/2 block px-2.5 py-2.5 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
                        </div>
                        <div className="flex items-center justify-between my-2">
                            <span className="">Consumption Tax %</span>
                            <input placeholder="0" type="text" name="" className="w-1/2 block px-2.5 py-2.5 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-1/2 py-7 pr-6">
                        <div className="flex justify-end">
                            <span className="">0Ar</span>
                        </div>

                        <div className="flex justify-end">
                            <span className="">0Ar</span>
                        </div>

                        <div className="flex justify-end">
                            <span className="">0Ar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default QuotationSummary