import { FC } from "react"
import { AiOutlinePlus } from "react-icons/ai"

const Rates: FC = () => {
    return <>
        <div className="flex justify-center items-start w-full">
            <div className="text-base font-bold text-grey bg-white rounded-lg py-8 px-16 w-6/12 ">
                <div className="text-violet-1 mb-8">
                    <div className="mb-2">Tarif Global</div>
                    <input value="40 000 000Ar" type="text" name="" id="" className=" font-semibold px-2.5 py-2.5 w-full bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
                </div>
                <div className="text-violet-1 mb-6">
                    <div className="mb-2">Tarif par pax</div>
                    <div className="flex w-full mb-2">
                        <div className="flex flex-col w-7/12 mr-3">
                            <div className="text-grey mb-2">Room Type</div>
                            <select name="" id="" className=" font-semibold px-2.5 py-2.5 w-full bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer">
                                <option value="">Single</option>
                            </select>
                        </div>
                        <div>
                            <div className="text-grey mb-2">Tarif</div>
                            <input value="200Ar" type="text" name="" id="" className=" font-semibold px-2.5 py-2.5 w-full bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
                        </div>
                    </div>
                    <div className="flex w-full mb-2">
                        <div className="flex flex-col w-7/12 mr-3">
                            <select name="" id="" className=" font-semibold px-2.5 py-2.5 w-full bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer">
                                <option value="">Double</option>
                            </select>
                        </div>
                        <div>
                            <input value="150Ar" type="text" name="" id="" className=" font-semibold px-2.5 py-2.5 w-full bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
                        </div>
                    </div>
                    <div className="flex w-full mb-2">
                        <div className="flex flex-col w-7/12 mr-3">
                            <select name="" id="" className=" font-semibold px-2.5 py-2.5 w-full bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer">
                                <option value="">Triple</option>
                            </select>
                        </div>
                        <div>
                            <input value="100Ar" type="text" name="" id="" className=" font-semibold px-2.5 py-2.5 w-full bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer"/>
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <div className="text-grey mb-2 mr-3">Currency</div>
                        <select name="" id="" className=" font-semibold px-2.5 py-2.5 bg-transparent rounded-lg border border-gray-300 appearance-none outline-none focus:outline-none focus:ring-0 focus:border-violet-1 peer">
                            <option value="">EUR - €</option>
                        </select>
                    </div>
                    <div className="flex items-center mt-4">
                        <label className="text-grey flex items-center justify-between">
                            Show breakdown
                            <input className="peer hidden" type="checkbox" name="" id=""/>
                            <span className="bg-grey rounded-full w-11 h-7 ml-2 flex flex-shrink-0 items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 peer-checked:bg-violet-1 peer-checked:after:translate-x-4 ease-in-out duration-300 after:duration-300"></span>
                        </label>
                    </div>
                </div>
                <div className="text-violet-1 mb-8">
                    <div className="mb-2">Les inclus</div>
                    <div className="px-4 py-2 bg-gray-100 text-grey rounded-full w-36 justify-center flex items-center">
                        <AiOutlinePlus className="pr-2 text-2xl"/> Ajouter
                    </div>
                </div>
                <div className="text-violet-1 mb-8">
                    <div className="mb-2">Les exclus</div>
                    <div className="px-4 py-2 bg-gray-100 text-grey rounded-full w-36 justify-center flex items-center">
                        <AiOutlinePlus className="pr-2 text-2xl"/> Ajouter
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Rates