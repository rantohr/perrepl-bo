import { FC, useState } from "react"
import { MdCalendarMonth } from "react-icons/md"
import { BiSolidPlaneAlt } from "react-icons/bi"
import GenericTableWithInputs from "../../../components/genericTableWithInputs/genericTableWithInputs"
import { IColumn } from "../../../interfaces/genricModule/icolumn.interface"
import QuotationSummary from "./quotations/QuotationSummary"

const Quotations: FC = () => {
    const [selectedButton, setSelectedButton] = useState<string>("Activités")
    const [selectedDay, setSelectedDay] = useState<string>("")

    const handleButtonChange = (button: string) => {
        setSelectedButton(button)
        // Reset SelectDay
        setSelectedDay("")
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value
        setSelectedDay(selectedValue)
    }

    const renderContent = () => {
        if (selectedDay !== "") {
            return <div className="bg-white rounded-lg my-2 py-4 px-6">
                <GenericTableWithInputs data={data} headers={columns} iconLeft={<BiSolidPlaneAlt/>}/>
            </div>
        }
        switch (selectedButton) {
            case "Activités":
                return <div className="">
                    <GenericTableWithInputs data={data} headers={columns}/>
                </div>
            case "Hébergement":
                return <div>Contenu de l'Hébergement</div>
            case "Transport":
                return <div>Contenu du Transport</div>
            case "Résumé":
                return <QuotationSummary/>
            default:
                return null
        }
    }

    const renderButton = (button: string) => {
        const isButtonActive = selectedButton === button && selectedDay === ""
        return (
            <div
                key={button}
                className={`h-full cursor-pointer flex flex-col items-center justify-center px-7 ${
                    isButtonActive ? "text-violet-1" : "text-grey"
                }`}
                onClick={() => handleButtonChange(button)}
            >
                <BiSolidPlaneAlt className="text-3xl mb-1" />
                {button.charAt(0).toUpperCase() + button.slice(1)}
            </div>
        )
    }


    const columns: IColumn[] = [
        { field: 'date', label: 'Dates', sortable: true },
        { field: 'activities', label: 'Activites', sortable: true },
        { 
            field: 'details', label: 'Details', sortable: false,
            displayValue: (value: string) => <input value={value} type="text" name="" id="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
        },
        { 
            field: 'quantity', label: 'Qte', sortable: false,
            displayValue: (value: string) => <input value={value} type="text" name="" id="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
        },
        { 
            field: 'invoicing', label: 'Tarifs', sortable: false,
            displayValue: (value: string) => <input value={value} type="text" name="" id="" className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
        },
        { field: 'total', label: 'Total', sortable: true },
    ]
    
    const data = [
        [{
            date: '16 SEP 2023',
            activities: 'Visit to Ambohimanga Place',
            details: '',
            quantity: '',
            invoicing: '',
            total: '50 000Ar'
        },
        {
            date: '29 SEP 2023',
            activities: 'Le Parc National de l\'Isalo',
            details: '',
            quantity: '',
            invoicing: '',
            total: '50 000Ar'
        }]
    ]

    return (
        <>
            <div className="w-full flex flex-col">
                <div className="flex w-full">
                    <div className="w-2/12 bg-white rounded-lg flex flex-col items-center py-2 px-4 text-sm">
                        <div className="flex items-center my-2 font-medium text-violet-1">
                            <MdCalendarMonth className="text-xl mr-2" />
                            16 SEP - 29 SEP 2023
                        </div>
                        <div className="font-bold text-violet-1">
                            <select
                                value={selectedDay}
                                onChange={handleSelectChange}
                                className="border-0 text-xs bg-white outline-none border-transparent focus:border-transparent focus:ring-0"
                            >
                                <option value="" disabled={!selectedDay}>
                                    Sélectionner le jour
                                </option>
                                <option value="JOUR 1 - 16 SEP 2023">JOUR 1 - 17 SEP 2023</option>
                                <option value="JOUR 2 - 19 SEP 2023">JOUR 2 - 29 SEP 2023</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-8/12 bg-white rounded-lg flex items-center justify-around text-md font-bold text-grey mx-2">
                        {renderButton("Activités")}
                        <div className="border-grey border-r-2 h-8"></div>
                        {renderButton("Hébergement")}
                        <div className="border-grey border-r-2 h-8"></div>
                        {renderButton("Transport")}
                        <div className="border-grey border-r-2 h-8"></div>
                        {renderButton("Transport")}
                        <div className="border-grey border-r-2 h-8"></div>
                        {renderButton("Résumé")}
                    </div>
                    <div className="w-2/12 bg-white rounded-lg flex flex-col text-sm font-medium text-grey py-4 px-4">
                        Total
                        <span className="text-3xl font-semibold text-violet-1 mt-1">0,0€</span>
                    </div>
                </div>
                {/* CONTENT */}
                <div className="mt-4">{renderContent()}</div>
            </div>
        </>
    )
}

export default Quotations
