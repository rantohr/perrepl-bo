import { format } from "date-fns";
import GenericList from "../../components/genericList/GenericList";
import WithIconInput from "../../components/input/WithIconInput";
import { fr } from "date-fns/locale";
import { IColumn } from "../../interfaces/genricModule/icolumn.interface";
import { useEffect, useState } from "react";
import { IOrder } from "../../interfaces/iorder.interface";

type PropsBadgetWithFlags = {
  close: boolean;
  contryName: string;
  labelPng: string;
};

const CloseIcon = () => {
  return (
    <svg
      width="35"
      height="20"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.08325 4.08325L9.91659 9.91659M4.08325 9.91659L9.91659 4.08325"
        stroke="#888888"
        stroke-width="0.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const EditIcon = () => {
  return (
    <svg
      width="35"
      height="20"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_445_3848)">
        <path
          d="M16 13C15.8688 13.0016 15.7388 12.9757 15.6183 12.924C15.4977 12.8724 15.3893 12.7961 15.3 12.7L6.3 3.69998C5.9 3.29998 5.9 2.67998 6.3 2.27998C6.7 1.87998 7.32 1.87998 7.72 2.27998L16.02 10.58L24.3 2.29998C24.7 1.89998 25.32 1.89998 25.72 2.29998C26.12 2.69998 26.12 3.31998 25.72 3.71998L16.72 12.72C16.52 12.92 16.26 13.02 16.02 13.02L16 13Z"
          fill="#888888"
        />
        <path
          d="M2.83325 5.47909L7.072 9.572L11.1653 5.33325"
          stroke="#888888"
          stroke-width="1.16667"
        />
      </g>
      <defs>
        <clipPath id="clip0_445_3848">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const BadgetWithFlags = ({
  close,
  contryName,
  labelPng,
}: PropsBadgetWithFlags) => {
  return (
    <div className="bg-[#E9E9E980] h-10 flex flex-row items-center p-2 gap-2 rounded-full mb-2 ml-2">
      <div className="w-[35px] h-[20px]">
        <img src={`/photos/${labelPng}.png`} className="w-full h-full" />
      </div>
      <div>
        <span className=" text-[#000000B2] font-semibold text-xs">
          {contryName}
        </span>
      </div>
      <div className="w-full flex justify-end">
        <div>{close ? <CloseIcon /> : <EditIcon />}</div>
      </div>
    </div>
  );
};

type IAgent = {
  id: number;
  name: string;
  email: string;
  contact: string;
};

export default function ClientAgenceProfile() {
  const [rows, setRows] = useState<IAgent[]>([]);
  useEffect(() => {
    const fake_rows: IAgent[] = [
      {
        id: 1,
        name: "Annette Black",
        contact: "(406) 555-0120",
        email: "4140 Parker Rd. Allentown, New Mexico",
      },
      {
        id: 2,
        name: "Annette Black",
        contact: "(406) 555-0120",
        email: "4140 Parker Rd. Allentown, New Mexico",
      },
      {
        id: 3,
        name: "Annette Black",
        contact: "(406) 555-0120",
        email: "4140 Parker Rd. Allentown, New Mexico",
      },
    ];
    setRows(fake_rows);
  }, []);

  const columns: IColumn[] = [
    { field: "name", label: "Nom", sortable: true },
    { field: "email", label: "Adresse email", sortable: true },
    { field: "contact", label: "Contact", sortable: true },
  ];

  return (
    <div className="flex flex-col  h-full w-full">
      <div className="flex row w-full gap-4 ">
        <img src="/photos/bi_arrow-left.png" alt="Sample image" />
        <span className="font-bold text-2xl text-[#030229]">
          Profil de l’agence
        </span>
      </div>
      <div className="bg-white m-5 flex gap-4 h-full w-full p-5 flex-row">
        <div className="basis-1/4 flex flex-col  pt-5 gap-4">
          <div className="flex justify-center">
            <div className="h-[158px] w-[158px] border rounded-full  shadow-lg relative ">
              <img
                className="rounded-full h-[158px] w-[158px] shadow-lg"
                src="data:image/jpeg;base64,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"
                alt="image description"
              />
              <img
                src="/photos/Frame900.png"
                className="absolute right-0 bottom-6"
              />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-2xl text-[#030229] ">
              Toursoft{" "}
              <img src="/photos/pencil.png" className="inline-block " />
            </h4>
            <span className="text-[#888888] text-[10px] ">#ID25858</span>
          </div>
          <div>
            <div>
              <h4 className="font-bold text-[#381A44] text-sm mb-2">Pays</h4>
              <BadgetWithFlags
                close={false}
                contryName="Pèru"
                labelPng="peru"
              />
            </div>

            <div>
              <h4 className="font-bold text-[#381A44] text-sm mb-2">Market</h4>

              <BadgetWithFlags
                close={true}
                contryName="Canada"
                labelPng="canada"
              />
              <BadgetWithFlags close={true} contryName="USA" labelPng="usa" />

              <div className="bg-[#E9E9E980] h-10 flex flex-row items-center p-2 gap-2 rounded-full mb-2  ml-2 justify-center">
                <svg
                  width="35"
                  height="20"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.08341 5.58329H5.58341V9.08329H4.41675V5.58329H0.916748V4.41663H4.41675V0.916626H5.58341V4.41663H9.08341V5.58329Z"
                    fill="#888888"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          <h4 className="text-[#030229] font-bold text-base">Coordonnées</h4>
          <div className="ml-20 mt-5 w-[324px]">
            <WithIconInput value={"example@codeo.mg"}>
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
            </WithIconInput>

            <WithIconInput value={" Galaxy Andraharo, Antananarivo"}>
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
            </WithIconInput>

            <WithIconInput value={"+261 34 57 067 89"}>
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
            </WithIconInput>

            {/* <div className="bg-white h-10 w-1/2 flex flex-row  p-4 gap-2 rounded mb-2 items-center border ">
              <div>
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
                <h4 className="text-xs text-[#000000]">+261 34 57 067 89</h4>
              </div>
            </div> */}
          </div>

          <h4 className="text-[#030229] font-bold text-base">Liste d'agents</h4>

          <GenericList
            title=""
            // total={3}
            columns={columns}
            rows={rows}
            // actions={actions}
            // rowActions={rowActions}
            // mainFilters={mainFilters}
            // filters={filters}
            // tabs={tabs}
          />

          <div className="">
            <button
              type="button"
              className="text-[#AAAAAA] bg-[#F6F6F6] w-full font-bold hover:bg-transparent outline-none focus:outline-none focus:ring-0 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-4 mr-2 mb-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_445_3764)">
                  <path
                    d="M4.67139 8.00005C4.67139 7.86745 4.72407 7.74027 4.81783 7.6465C4.9116 7.55273 5.03878 7.50005 5.17139 7.50005H7.50005V5.17139C7.50005 5.03878 7.55273 4.9116 7.6465 4.81783C7.74027 4.72407 7.86745 4.67139 8.00005 4.67139C8.13266 4.67139 8.25984 4.72407 8.35361 4.81783C8.44737 4.9116 8.50005 5.03878 8.50005 5.17139V7.50005H10.8287C10.9613 7.50005 11.0885 7.55273 11.1823 7.6465C11.276 7.74027 11.3287 7.86745 11.3287 8.00005C11.3287 8.13266 11.276 8.25984 11.1823 8.35361C11.0885 8.44737 10.9613 8.50005 10.8287 8.50005H8.50005V10.8287C8.50005 10.9613 8.44737 11.0885 8.35361 11.1823C8.25984 11.276 8.13266 11.3287 8.00005 11.3287C7.86745 11.3287 7.74027 11.276 7.6465 11.1823C7.55273 11.0885 7.50005 10.9613 7.50005 10.8287V8.50005H5.17139C5.03878 8.50005 4.9116 8.44737 4.81783 8.35361C4.72407 8.25984 4.67139 8.13266 4.67139 8.00005Z"
                    fill="#AAAAAA"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.87798 2.51261C6.95295 2.28258 9.047 2.28258 11.122 2.51261C12.34 2.64861 13.3233 3.60794 13.466 4.83261C13.7126 6.93728 13.7126 9.06328 13.466 11.1679C13.3226 12.3926 12.3393 13.3513 11.122 13.4879C9.047 13.718 6.95295 13.718 4.87798 13.4879C3.65998 13.3513 2.67664 12.3926 2.53398 11.1679C2.28783 9.06334 2.28783 6.93721 2.53398 4.83261C2.67664 3.60794 3.66064 2.64861 4.87798 2.51261ZM11.0113 3.50594C9.00988 3.2841 6.99007 3.2841 4.98864 3.50594C4.61814 3.54705 4.27231 3.71186 4.00703 3.97375C3.74175 4.23565 3.5725 4.57933 3.52664 4.94928C3.28954 6.97659 3.28954 9.02463 3.52664 11.0519C3.57264 11.4218 3.74195 11.7653 4.00722 12.0271C4.27249 12.2888 4.61824 12.4535 4.98864 12.4946C6.97331 12.7159 9.02664 12.7159 11.0113 12.4946C11.3816 12.4534 11.7272 12.2886 11.9923 12.0269C12.2575 11.7651 12.4267 11.4217 12.4726 11.0519C12.7098 9.02463 12.7098 6.97659 12.4726 4.94928C12.4265 4.57967 12.2573 4.23637 11.9921 3.97476C11.727 3.71314 11.3815 3.54846 11.0113 3.50728V3.50594Z"
                    fill="#AAAAAA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_445_3764">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Ajouter un agent
            </button>
          </div>

          <div className="mt-4 flex flex-row justify-end">
            <button
              type="button"
              className="text-white bg-violet-1 uppercase hover:bg-violet-1  outline-none focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Enregistrer
            </button>

            <button
              type="button"
              className="text-violet-1 bg-transparent uppercase hover:bg-transparent outline-none focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
