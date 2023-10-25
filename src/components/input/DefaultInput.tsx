type PropsDefaultInput = {
  label: string;
  type?: React.HTMLInputTypeAttribute;
};

export default function DefaultInput({
  label,
  type = "text",
}: PropsDefaultInput) {
  return (
    <div className="relative">
      <input
        type={type}
        id="floating_outlined"
        className="
        block px-2.5
         pb-2.5 pt-4 w-full text-sm text-gray-900 
         bg-transparent rounded-lg border border-gray-300 
         appearance-none 
         outline-none
          focus:outline-none focus:ring-0
           focus:border-violet-1 peer"
        placeholder=""
      />
      <label
        htmlFor="floating_outlined"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#381A44] peer-focus:dark:text-[#381A44] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label}
      </label>
    </div>
  );
}
