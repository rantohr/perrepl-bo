import { UseFormRegister } from "react-hook-form";

type PropsFloatingLabelCustom<F> = {
  className?: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegister<any>;
  name: keyof F;
  readonly?: boolean;
};

export default function FloatingLabelCustom<F>({
  className,
  label,
  type,
  register,
  name,
  readonly,
}: PropsFloatingLabelCustom<F>) {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        className="
        block px-2.5
       pb-2.5 pt-4 w-full text-xs text-gray-900 
       bg-transparent rounded-lg border border-grey-11 
       appearance-none 
       outline-none
        focus:outline-none focus:ring-0
         focus:border-grey-11  peer "
        placeholder=" "
        {...register(name as any)}
        readOnly={readonly}
      />
      <label
        className="absolute text-xs text-grey-8  duration-300 transform -translate-y-4 scale-75 
      top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2
       peer-focus:text-black  peer-focus:font-bold  peer-placeholder-shown:scale-100 
       peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
}
