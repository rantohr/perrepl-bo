import { FC } from "react";

const FloatingInput: FC<{
    label: string,
    type?: string,
    className?: string
    value: any,
    onChange: (value: any) => void
}> = ({ label, type, className, value, onChange }) => {
    return (
        <div className={`relative ${className || ''}`}>
            <label
                className="absolute text-xs text-grey-8  duration-300 transform -translate-y-4 scale-75 
                top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2
              peer-focus:text-black  peer-focus:font-bold  peer-placeholder-shown:scale-100 
                peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
                {label}
            </label>
            <input
                type={type || "text"}
                className="block px-2.5
                    pb-2.5 pt-4 w-full text-xs text-gray-900 
                    bg-transparent rounded-lg border border-grey-11 
                    appearance-none 
                    outline-none
                    focus:outline-none focus:ring-0
                  focus:border-grey-11  peer "
                value={value}
                onChange={(e) => onChange(e.target?.value)}
            />
        </div>
    );
}

export default FloatingInput;