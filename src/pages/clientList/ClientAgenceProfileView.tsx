import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Tabs from "../../components/tabs/Tabs";

export default function ClientAgenceProfileView() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col  h-full w-full">
      <div className="flex row w-full gap-4 ">
        <img src="/photos/bi_arrow-left.png" alt="Sample image" />
        <span className="font-bold text-2xl text-[#030229]">
          Liste des agences
        </span>
      </div>
      <div className=" m-5 flex gap-4 h-full w-full p-5 flex-row">
        <div className="basis-1/4 flex flex-col  pt-5 bg-white">
          <div className="flex justify-center">
            <div className="h-[158px] w-[158px] border rounded-full  shadow-lg relative ">
              <img
                className="rounded-full h-[158px] w-[158px] shadow-lg"
                src="data:image/jpeg;base64,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"
                alt="image description"
              />
            </div>
          </div>
          <div className="text-center mt-2">
            <h4 className="font-bold  text-[#030229] ">Toursoft </h4>
            <span className="text-[#888888] text-[10px] ">#ID25858</span>
          </div>

          <div className="ml-4 mt-11 flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2 ">
              <div className="flex w-1/12">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5625 3.125H3.4375C2.85753 3.12562 2.30149 3.35629 1.89139 3.76639C1.48129 4.17649 1.25062 4.73253 1.25 5.3125V14.6875C1.25062 15.2675 1.48129 15.8235 1.89139 16.2336C2.30149 16.6437 2.85753 16.8744 3.4375 16.875H16.5625C17.1425 16.8744 17.6985 16.6437 18.1086 16.2336C18.5187 15.8235 18.7494 15.2675 18.75 14.6875V5.3125C18.7494 4.73253 18.5187 4.17649 18.1086 3.76639C17.6985 3.35629 17.1425 3.12562 16.5625 3.125ZM16.0086 6.74336L10.3836 11.1184C10.2739 11.2036 10.1389 11.2499 10 11.2499C9.86107 11.2499 9.72609 11.2036 9.61641 11.1184L3.99141 6.74336C3.92532 6.69345 3.86981 6.63091 3.8281 6.55936C3.78639 6.48781 3.75932 6.40869 3.74846 6.32659C3.73759 6.24449 3.74315 6.16104 3.76482 6.08111C3.78648 6.00118 3.82381 5.92635 3.87465 5.86097C3.92548 5.79559 3.9888 5.74096 4.06093 5.70027C4.13306 5.65957 4.21255 5.63362 4.2948 5.62391C4.37704 5.6142 4.4604 5.62094 4.54002 5.64372C4.61964 5.66651 4.69394 5.70489 4.75859 5.75664L10 9.8332L15.2414 5.75664C15.3725 5.65766 15.5372 5.61425 15.7 5.6358C15.8629 5.65734 16.0107 5.74211 16.1115 5.87177C16.2123 6.00142 16.258 6.16555 16.2387 6.32866C16.2195 6.49176 16.1368 6.64073 16.0086 6.74336Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-[#000000]">example@codeo.mg</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2 ">
              <div className="flex w-1/12">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7063 14.425L15.1063 13.025C15.2948 12.8388 15.5334 12.7113 15.793 12.6581C16.0526 12.6048 16.3221 12.6281 16.5688 12.725L18.275 13.4063C18.5243 13.5074 18.738 13.6801 18.8893 13.9026C19.0405 14.125 19.1226 14.3873 19.125 14.6563V17.7813C19.1236 17.9643 19.0851 18.1451 19.0119 18.3128C18.9388 18.4805 18.8324 18.6317 18.6993 18.7573C18.5662 18.8828 18.409 18.9801 18.2373 19.0433C18.0655 19.1065 17.8828 19.1343 17.7 19.125C5.74377 18.3813 3.33127 8.25628 2.87502 4.38128C2.85384 4.19099 2.87319 3.99837 2.9318 3.81609C2.99041 3.63382 3.08695 3.46602 3.21506 3.32374C3.34318 3.18145 3.49997 3.0679 3.67512 2.99057C3.85027 2.91323 4.03981 2.87385 4.23127 2.87503H7.25002C7.5194 2.87582 7.78239 2.95719 8.00514 3.10867C8.2279 3.26015 8.40025 3.4748 8.50002 3.72503L9.18127 5.43128C9.28143 5.67694 9.30698 5.94668 9.25474 6.20678C9.2025 6.46689 9.07477 6.70584 8.88752 6.89378L7.48752 8.29378C7.48752 8.29378 8.29377 13.75 13.7063 14.425Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-[#000000]">+261 34 57 067 89</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2 ">
              <div className="flex w-1/12">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9999 11.0001C10.0833 11.0001 9.33325 10.2501 9.33325 9.33341C9.33325 8.41675 10.0833 7.66675 10.9999 7.66675C11.9166 7.66675 12.6666 8.41675 12.6666 9.33341C12.6666 10.2501 11.9166 11.0001 10.9999 11.0001ZM10.9999 2.66675C7.49992 2.66675 4.33325 5.35008 4.33325 9.50008C4.33325 12.2667 6.55825 15.5417 10.9999 19.3334C15.4416 15.5417 17.6666 12.2667 17.6666 9.50008C17.6666 5.35008 14.4999 2.66675 10.9999 2.66675Z"
                    fill="#BBBBBB"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-[#000000]">
                  Galaxy Andraharo, Antananarivo
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="text-violet-1 bg-transparent  font-bold hover:bg-transparent outline-none focus:outline-none focus:ring-0 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6278 1.58566C11.1319 1.09319 11.8098 0.819306 12.5145 0.82341C13.2192 0.827514 13.8939 1.10928 14.3922 1.60759C14.8905 2.1059 15.1723 2.78057 15.1764 3.48527C15.1805 4.18998 14.9066 4.86789 14.4141 5.37196L13.812 5.97406L10.0257 2.18776L10.6278 1.58566ZM9.38943 2.82496L2.19033 10.0241C1.89575 10.319 1.69127 10.6917 1.60083 11.0987L0.810634 14.6537C0.794107 14.7276 0.796529 14.8046 0.817677 14.8774C0.838826 14.9501 0.878014 15.0164 0.931607 15.07C0.985199 15.1236 1.05146 15.1628 1.12424 15.1839C1.19702 15.2051 1.27397 15.2075 1.34793 15.191L4.88133 14.4053C5.30203 14.3116 5.68729 14.0999 5.99193 13.7951L13.1757 6.61126L9.38943 2.82496Z"
                  fill="#381A44"
                />
              </svg>
              Modifier profil
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          <div className="bg-white rounded-lg">
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <Tabs
                items={[
                  {
                    active: pathname.includes("general"),
                    label: "Généralité",
                    callback: () => {
                      navigate("/app/client/agence/view/general");
                    },
                  },
                  {
                    active: pathname.includes("notes"),
                    label: "Notes",
                    callback: () => {
                      navigate("/app/client/agence/view/notes");
                    },
                  },
                  {
                    active: pathname.includes("clients"),
                    label: "Clients",
                    callback: () => {
                      navigate("/app/client/agence/view/clients");
                    },
                  },
                  {
                    active: pathname.includes("payrolls"),
                    label: "paiements",
                    callback: () => {
                      navigate("/app/client/agence/view/payrolls");
                    },
                  },
                ]}
              />
            </div>
          </div>
          <div className="container_based_outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
