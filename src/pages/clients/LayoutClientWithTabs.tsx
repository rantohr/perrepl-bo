import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Tabs from "../../components/tabs/Tabs";

export default function LayoutClientWithTabs() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container_layoutClientWithTabs">
      <div>
        <div className="flex flex-row gap-2 items-center">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-2xl"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.7501 6.00006C17.7501 5.8343 17.6843 5.67533 17.5671 5.55812C17.4499 5.44091 17.2909 5.37506 17.1251 5.37506H2.38389L6.31764 1.44256C6.37575 1.38445 6.42185 1.31546 6.45329 1.23954C6.48474 1.16361 6.50093 1.08224 6.50093 1.00006C6.50093 0.917877 6.48474 0.836502 6.45329 0.760578C6.42185 0.684654 6.37575 0.615667 6.31764 0.557557C6.25953 0.499447 6.19054 0.453352 6.11462 0.421903C6.0387 0.390454 5.95732 0.374268 5.87514 0.374268C5.79296 0.374268 5.71159 0.390454 5.63566 0.421903C5.55974 0.453352 5.49075 0.499447 5.43264 0.557557L0.432641 5.55756C0.374437 5.61561 0.328258 5.68458 0.29675 5.76052C0.265242 5.83645 0.249023 5.91785 0.249023 6.00006C0.249023 6.08227 0.265242 6.16367 0.29675 6.2396C0.328258 6.31553 0.374437 6.3845 0.432641 6.44256L5.43264 11.4426C5.49075 11.5007 5.55974 11.5468 5.63566 11.5782C5.71159 11.6097 5.79296 11.6258 5.87514 11.6258C5.95732 11.6258 6.0387 11.6097 6.11462 11.5782C6.19054 11.5468 6.25953 11.5007 6.31764 11.4426C6.37575 11.3844 6.42185 11.3155 6.45329 11.2395C6.48474 11.1636 6.50093 11.0822 6.50093 11.0001C6.50093 10.9179 6.48474 10.8365 6.45329 10.7606C6.42185 10.6847 6.37575 10.6157 6.31764 10.5576L2.38389 6.62506H17.1251C17.2909 6.62506 17.4499 6.55921 17.5671 6.442C17.6843 6.32479 17.7501 6.16582 17.7501 6.00006Z"
              fill="#AAAAAA"
            />
          </svg>
          <h2 className="violet-2 text-2xl font-bold">Liste des clients</h2>
        </div>

        <div className="body_layoutClientWithTabs flex flex-row gap-4 mt-4">
          <div className="sidebar_layoutClientWithTabs w-[232px] h-[640px] bg-white rounded-lg p-4">
            <div className="profileContainer flex justify-center flex-col items-center">
              <img
                className="rounded-full w-[156px] h-[156px] shadow-lg"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="image description"
              />
            </div>

            <div className="description flex justify-center mt-4 flex-col items-center gap-1">
              <h4 className="font-bold text-violet-2 text-xs leading-[14.09px]">
                Annette Black
              </h4>

              <span className="grey-2 text-[10px]">#ID25858</span>

              <span className="bg-green-2 text-green-1 text-10  mr-2 px-2.5 py-0.5 rounded font-bold">
                En voyage
              </span>
            </div>

            <div className="mt-4 flex flex-row items-center justify-center gap-2">
              <div>
                <h4 className="text-10 text-grey-3 font-bold">B2B</h4>
              </div>

              <div>
                <img src="/photos/img.png" alt="" />
              </div>

              <div>
                <h4 className="font-bold text-10 text-violet-2">Toursoft</h4>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-normal text-10 text-center">
                Un végétarien convaincu en quête de saveurs végétales
              </p>
            </div>

            <div className="mt-4">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-6 text-center">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75 15.5C8.75 15.5 7.5 15.5 7.5 14.25C7.5 13 8.75 9.25 13.75 9.25C18.75 9.25 20 13 20 14.25C20 15.5 18.75 15.5 18.75 15.5H8.75ZM13.75 8C14.7446 8 15.6984 7.60491 16.4017 6.90165C17.1049 6.19839 17.5 5.24456 17.5 4.25C17.5 3.25544 17.1049 2.30161 16.4017 1.59835C15.6984 0.895088 14.7446 0.5 13.75 0.5C12.7554 0.5 11.8016 0.895088 11.0983 1.59835C10.3951 2.30161 10 3.25544 10 4.25C10 5.24456 10.3951 6.19839 11.0983 6.90165C11.8016 7.60491 12.7554 8 13.75 8ZM6.52 15.5C6.33469 15.1098 6.24228 14.6819 6.25 14.25C6.25 12.5562 7.1 10.8125 8.67 9.6C7.88636 9.35854 7.06994 9.24047 6.25 9.25C1.25 9.25 0 13 0 14.25C0 15.5 1.25 15.5 1.25 15.5H6.52ZM5.625 8C6.4538 8 7.24866 7.67076 7.83471 7.08471C8.42076 6.49866 8.75 5.7038 8.75 4.875C8.75 4.0462 8.42076 3.25134 7.83471 2.66529C7.24866 2.07924 6.4538 1.75 5.625 1.75C4.7962 1.75 4.00134 2.07924 3.41529 2.66529C2.82924 3.25134 2.5 4.0462 2.5 4.875C2.5 5.7038 2.82924 6.49866 3.41529 7.08471C4.00134 7.67076 4.7962 8 5.625 8Z"
                      fill="#D3D3D3"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-10 font-normal text-[#000000]">
                    4 Adultes 2 Enfants
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <div className="w-6 text-center">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5625 0.125H2.4375C1.85753 0.12562 1.30149 0.356288 0.891389 0.766389C0.481288 1.17649 0.25062 1.73253 0.25 2.3125V11.6875C0.25062 12.2675 0.481288 12.8235 0.891389 13.2336C1.30149 13.6437 1.85753 13.8744 2.4375 13.875H15.5625C16.1425 13.8744 16.6985 13.6437 17.1086 13.2336C17.5187 12.8235 17.7494 12.2675 17.75 11.6875V2.3125C17.7494 1.73253 17.5187 1.17649 17.1086 0.766389C16.6985 0.356288 16.1425 0.12562 15.5625 0.125ZM15.0086 3.74336L9.38359 8.11836C9.27391 8.20363 9.13893 8.24992 9 8.24992C8.86107 8.24992 8.72609 8.20363 8.61641 8.11836L2.99141 3.74336C2.92532 3.69345 2.86981 3.63091 2.8281 3.55936C2.78639 3.48781 2.75932 3.40869 2.74846 3.32659C2.73759 3.24449 2.74315 3.16104 2.76482 3.08111C2.78648 3.00118 2.82381 2.92635 2.87465 2.86097C2.92548 2.79559 2.9888 2.74096 3.06093 2.70027C3.13306 2.65957 3.21255 2.63362 3.2948 2.62391C3.37704 2.6142 3.4604 2.62094 3.54002 2.64372C3.61964 2.66651 3.69394 2.70489 3.75859 2.75664L9 6.8332L14.2414 2.75664C14.3725 2.65766 14.5372 2.61425 14.7 2.6358C14.8629 2.65734 15.0107 2.74211 15.1115 2.87177C15.2123 3.00142 15.258 3.16555 15.2387 3.32866C15.2195 3.49176 15.1368 3.64073 15.0086 3.74336Z"
                      fill="#D3D3D3"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-10 font-normal text-[#000000]">
                    example@codeo.mg
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <div className="w-6 text-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7063 12.425L13.1063 11.025C13.2948 10.8388 13.5334 10.7113 13.793 10.6581C14.0526 10.6048 14.3221 10.6281 14.5688 10.725L16.275 11.4063C16.5243 11.5074 16.738 11.6801 16.8893 11.9026C17.0405 12.125 17.1226 12.3873 17.125 12.6563V15.7813C17.1236 15.9643 17.0851 16.1451 17.0119 16.3128C16.9388 16.4805 16.8324 16.6317 16.6993 16.7573C16.5662 16.8828 16.409 16.9801 16.2373 17.0433C16.0655 17.1065 15.8828 17.1343 15.7 17.125C3.74377 16.3813 1.33127 6.25628 0.875023 2.38128C0.853843 2.19099 0.873194 1.99837 0.931803 1.81609C0.990411 1.63382 1.08695 1.46602 1.21506 1.32374C1.34318 1.18145 1.49997 1.0679 1.67512 0.990565C1.85027 0.913227 2.03981 0.873851 2.23127 0.875026H5.25002C5.5194 0.875823 5.78239 0.957193 6.00514 1.10867C6.2279 1.26015 6.40025 1.4748 6.50002 1.72503L7.18127 3.43128C7.28143 3.67694 7.30698 3.94668 7.25474 4.20678C7.2025 4.46689 7.07477 4.70584 6.88752 4.89378L5.48752 6.29378C5.48752 6.29378 6.29377 11.75 11.7063 12.425Z"
                      fill="#D3D3D3"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-10 font-normal text-[#000000]">
                    (505) 555-0125
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <div className="w-6 text-center">
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00016 9.00008C6.0835 9.00008 5.3335 8.25008 5.3335 7.33341C5.3335 6.41675 6.0835 5.66675 7.00016 5.66675C7.91683 5.66675 8.66683 6.41675 8.66683 7.33341C8.66683 8.25008 7.91683 9.00008 7.00016 9.00008ZM7.00016 0.666748C3.50016 0.666748 0.333496 3.35008 0.333496 7.50008C0.333496 10.2667 2.5585 13.5417 7.00016 17.3334C11.4418 13.5417 13.6668 10.2667 13.6668 7.50008C13.6668 3.35008 10.5002 0.666748 7.00016 0.666748Z"
                      fill="#BBBBBB"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-10 font-normal ">
                    6391 Elgin St. Celina, Delaware 10299
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <div className="w-6 text-center">
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.25"
                      y="0.25"
                      width="20.5"
                      height="14.5"
                      rx="1.75"
                      fill="white"
                      stroke="#F5F5F5"
                      stroke-width="0.5"
                    />
                    <mask
                      id="mask0_280_2745"
                      // style="mask-type:luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="21"
                      height="15"
                    >
                      <rect
                        x="0.25"
                        y="0.25"
                        width="20.5"
                        height="14.5"
                        rx="1.75"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </mask>
                    <g mask="url(#mask0_280_2745)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 7V15H21V7H7Z"
                        fill="#149047"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21 7H7V0H21V7Z"
                        fill="#F84F4B"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="text-10 font-normal ">Malagasy (Madagascar)</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                className="w-full px-3 py-2 text-xs font-bold text-center justify-center gap-2 flex items-center text-white bg-violet-1 rounded-lg hover:bg-violet-1 focus:ring-0 focus:outline-none focus:ring-blue-300 "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.75 0.25L0.52 1.675C0.37 1.7275 0.25 1.8625 0.25 2.035V13.375C0.25 13.4745 0.289509 13.5698 0.359835 13.6402C0.430161 13.7105 0.525544 13.75 0.625 13.75C0.6625 13.75 0.7 13.75 0.745 13.7275L4.75 12.175L7.87 13.27C7.795 12.94 7.75 12.595 7.75 12.25C7.75 12.0775 7.75 11.905 7.78 11.725L4.75 10.675V1.75L9.25 3.325V8.92C10.0525 8.2 11.1025 7.75 12.25 7.75C12.775 7.75 13.2775 7.8475 13.75 8.02V0.625C13.75 0.525544 13.7105 0.430161 13.6402 0.359835C13.5698 0.289509 13.4745 0.25 13.375 0.25H13.255L9.25 1.825L4.75 0.25ZM11.5 9.25V11.5H9.25V13H11.5V15.25H13V13H15.25V11.5H13V9.25H11.5Z"
                    fill="#F8F8F8"
                  />
                </svg>
                Créer itinéraire
              </button>

              <button
                type="button"
                className=" w-full justify-center text-violet-1 text-xs bg-transparent  font-bold hover:bg-transparent outline-none focus:outline-none focus:ring-0 rounded-lg  px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
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
          <div className="w-full">
            <div className="bg-white">
              <Tabs
                items={[
                  {
                    active: pathname.includes("general"),
                    label: "Généralité",
                    callback: () => {
                      navigate("/app/client/overview/view/general");
                    },
                  },
                  {
                    active: pathname.includes("notes"),
                    label: "Notes",
                    callback: () => {
                      navigate("/app/client/overview/view/notes");
                    },
                  },
                  {
                    active: pathname.includes("trips"),
                    label: "Trip",
                    callback: () => {
                      navigate("/app/client/overview/view/trips");
                    },
                  },
                  {
                    active: pathname.includes("docs"),
                    label: "Docs",
                    callback: () => {
                      navigate("/app/client/overview/view/docs");
                    },
                  },
                  {
                    active: pathname.includes("paxList"),
                    label: "Pax List",
                    callback: () => {
                      navigate("/app/client/overview/view/paxList");
                    },
                  },

                  {
                    active: pathname.includes("payroll"),
                    label: "paiements",
                    callback: () => {
                      navigate("/app/client/overview/view/payroll");
                    },
                  },
                ]}
              />
            </div>

            <div className="containerBodyOutlet">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
