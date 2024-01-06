import { UseFormRegister } from "react-hook-form";

type PropsSelectCustom<F> = {
  className?: string;
  register: UseFormRegister<any>;
  name: keyof F;
  values: { value: string | number; label: string }[];
};
export default function SelectCustom<F>({
  name,
  register,
  values,
}: PropsSelectCustom<F>) {
  return (
    <div>
      {/* <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label> */}
      <select
        id="countries"
        className="text-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm- rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register(name as any)}
      >
        {values.map((item, index) => (
          <option key={index} selected={index === 0} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
