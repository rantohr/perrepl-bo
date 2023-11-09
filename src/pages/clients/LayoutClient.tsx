export default function LayoutClient() {
  return (
    <div className="ml-4 mr-6 mt-4">
      <div className="header flex flex-row gap-9">
        <div className="flex gap-4 items-center w-1/2">
          <h4 className="font-bold text-2xl">Client</h4>
          <div className="bg-transparent-grey w-[30px] h-[27px] rounded-full flex justify-center items-center">
            <span className="font-normal text-xs text-neutre ">2</span>
          </div>
        </div>
        {/* px-5 py-2.5 text-center mr-2 mb-2   */}
        <div className=" w-1/2 flex gap-4 justify-end">
          <button
            type="button"
            className="
            text-violet-1
            hover:violet-1 font-bold border border-transparent-grey hover:bg-transparent focus:outline-none   rounded-lg text-sm 
            flex items-center justify-center px-3 py-2
            
            "
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" mr-2"
            >
              <g clip-path="url(#clip0_367_3192)">
                <path
                  d="M16.75 10.7515C18.3812 10.7605 19.2648 10.8333 19.8408 11.4093C20.5 12.0685 20.5 13.129 20.5 15.25V16C20.5 18.1218 20.5 19.1823 19.8408 19.8415C19.1823 20.5 18.121 20.5 16 20.5H10C7.879 20.5 6.81775 20.5 6.15925 19.8415C5.5 19.1815 5.5 18.1218 5.5 16V15.25C5.5 13.129 5.5 12.0685 6.15925 11.4093C6.73525 10.8333 7.61875 10.7605 9.25 10.7515"
                  stroke="#381A44"
                  stroke-width="1.125"
                  stroke-linecap="round"
                />
                <path
                  d="M13 15.25V5.5M13 5.5L15.25 8.125M13 5.5L10.75 8.125"
                  stroke="#381A44"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_367_3192">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(4 4)"
                  />
                </clipPath>
              </defs>
            </svg>
            Importer
          </button>

          <button
            type="button"
            className="px-3 py-2 text-sm font-bold text-center inline-flex items-center text-white bg-violet-1 rounded-lg hover:bg-violet-1 focus:ring-0 focus:outline-none focus:ring-blue-300 "
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" mr-2"
            >
              <path
                d="M11.25 7.5C9.2475 7.5 5.25 8.4975 5.25 10.5V12H17.25V10.5C17.25 8.4975 13.2525 7.5 11.25 7.5ZM4.5 4.5V2.25H3V4.5H0.75V6H3V8.25H4.5V6H6.75V4.5M11.25 6C12.0456 6 12.8087 5.68393 13.3713 5.12132C13.9339 4.55871 14.25 3.79565 14.25 3C14.25 2.20435 13.9339 1.44129 13.3713 0.87868C12.8087 0.31607 12.0456 0 11.25 0C10.4544 0 9.69129 0.31607 9.12868 0.87868C8.56607 1.44129 8.25 2.20435 8.25 3C8.25 3.79565 8.56607 4.55871 9.12868 5.12132C9.69129 5.68393 10.4544 6 11.25 6Z"
                fill="white"
              />
            </svg>
            Nouveau client
          </button>
        </div>
      </div>
    </div>
  );
}
