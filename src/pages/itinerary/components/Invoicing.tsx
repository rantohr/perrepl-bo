import { FC } from "react"
import { CiExport } from "react-icons/ci"
import { LuSend } from "react-icons/lu"

const Invoicing: FC = () => {
    return <>
        <div className="flex justify-center items-start w-full">
            <div className="relative text-sm font-semibold text-grey bg-white rounded-lg py-3 px-2 w-7/12 ">
                <div className="absolute top-0 -right-36 flex flex-col">
                    <button className=" w-32 flex items-center justify-center bg-white rounded-lg py-3 px-4 mb-4">
                        <CiExport className="mr-4"/>
                        Exporter
                    </button>
                    <button className=" w-32 flex items-center justify-center bg-white rounded-lg py-3 px-4">
                        <LuSend className="mr-4"/>
                        Envoyer
                    </button>
                </div>

                <div className="flex justify-between bg-gray-100 rounded-full py-4 px-5">
                    <div className="flex">
                        <div className=" text-black-1 mr-2">Facture</div>
                        <div>#AB2324-1</div>
                    </div>
                    <div className="flex">
                        <div className=" text-black-1 mr-2">Date</div>
                        <div>01 Aug 2023</div>
                    </div>
                </div>

                <div className="flex justify-between items-start mt-3">
                    <div className="flex flex-col w-1/2 mr-2 bg-gray-100 rounded-lg py-4 px-5">
                        <div className=" text-black-1 mr-2">To</div>
                        <div>Company Name</div>
                        <div>Company address</div>
                        <div>City, Country - 00000</div>
                        <div>+0 (000) 123-4567</div>
                    </div>
                    <div className="flex flex-col w-1/2 ml-2 bg-gray-100 rounded-lg py-4 px-5">
                        <div className=" text-black-1 mr-2">From</div>
                        <div>Panda, Inc</div>
                        <div>Business address</div>
                        <div>City, State, IN - 000 000</div>
                        <div>TAX ID 00XXXXX1234X0XX</div>
                    </div>
                </div>

                <div className="flex justify-between bg-gray-100 rounded-full py-4 px-5 mt-3">
                    <div className="flex">
                        <div className=" text-violet-pink mr-2">40 000,000Ar</div>
                    </div>
                    <div className="flex">
                        <div className=" mr-2">Date de l’itinéraire</div>
                        <div className="text-black-1">19 SEP 2023 - 21 SEP 2023</div>
                    </div>
                    <div className="flex">
                        <div className=" mr-2">Nombres de pax</div>
                        <div className="text-black-1">6</div>
                    </div>
                </div>

                <div className="flex flex-col bg-gray-100 text-black-1 rounded-lg py-4 px-5 mt-3">
                    <div className="flex w-full border-b-4 py-4 border-white">
                        <div className="flex w-6/12">Service</div>
                        <div className="flex justify-start w-2/12">Qty</div>
                        <div className="flex justify-end w-2/12">Tarifs</div>
                        <div className="flex justify-end w-2/12">Total</div>
                    </div>
                    <div className="flex w-full text-black-1 border-b-4 py-4 border-white mb-36">
                        <div className="flex flex-col w-6/12">
                            <div>Travel package Andasibe</div>
                            <div className="text-grey">Andasibe package</div>
                        </div>
                        <div className="text-grey flex justify-start w-2/12">6</div>
                        <div className="text-grey flex justify-end w-2/12">100.00Ar</div>
                        <div className="text-grey flex justify-end w-2/12">40 000.00Ar</div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex flex-col w-6/12">
                            <div className="flex w-full border-b-4 py-4 border-white">
                                <div className="text-black-1 flex justify-start w-1/2">Subtotal</div>
                                <div className="text-grey flex justify-end w-1/2">40 000.00Ar</div>
                            </div>
                            <div className="flex w-full border-b-4 py-4 border-white">
                                <div className="text-black-1 flex justify-start w-1/2">Tax (0%)</div>
                                <div className="text-grey flex justify-end w-1/2">40 000.00Ar</div>
                            </div>
                            <div className="flex w-full border-b-4 py-4 border-white">
                                <div className="text-black-1 flex justify-start w-1/2">Total</div>
                                <div className="text-black-1 flex justify-end w-1/2">40 000.00Ar</div>
                            </div>
                            <div className="flex w-full border-b-4 py-4 border-white">
                                <div className="text-black-1 flex justify-start w-1/2">Amount due</div>
                                <div className="text-black-1 flex justify-end w-1/2">40 000.00Ar</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex bg-gray-100 text-grey rounded-lg pt-4 pb-10 px-5 mt-3">
                    Description
                </div>

            </div>
        </div>
    </>
}
export default Invoicing