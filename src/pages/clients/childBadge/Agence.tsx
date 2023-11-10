import { useNavigate } from "react-router-dom";
import GenericList from "../../../components/genericList/GenericList";
import {
  IColumn,
  IListAction,
} from "../../../interfaces/genricModule/icolumn.interface";

type IAgence = {
  logo: string;
  name: string;
  country: string;
  market: string;
  phone: string;
  nbrClient: number;
};

export default function AgenceBadge() {
  const navigate = useNavigate();

  const rowActions: IListAction[] = [
    {
      label: "Voir",
      //   icon: MdDelete,
      callback: () => navigate("/app/client/agence/view/general"),
    },
    {
      label: "Modifier",
      //   icon: MdModeEdit,
      callback: () => navigate("/app/client/agence/update"),
    },
  ];

  const columns: IColumn[] = [
    {
      field: "logo",
      label: ``,
      displayValue: (value: string) => {
        return <img src={`/src/utils/svg/agenceLogo/${value}.svg`} />;
      },
    },
    {
      field: "name",
      label: "Nom de l’agence",
      displayValue: (name: string) => {
        return <p className="text-violet-2 font-bold">{name}</p>;
      },
    },
    {
      field: "country",
      label: "Pays",
      displayValue: (value: string) => {
        return (
          <div className="flex gap-4">
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1138_1225)">
                <rect width="22" height="16" rx="2" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0H7.33333V16H0V0ZM14.6667 0H22V16H14.6667V0Z"
                  fill="#F93939"
                />
              </g>
              <defs>
                <clipPath id="clip0_1138_1225">
                  <rect width="22" height="16" rx="2" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="font-bold text-neutre">{value}</p>
          </div>
        );
      },
    },
    {
      field: "market",
      label: "Market",
      displayValue: (value: string) => {
        return (
          <div className="flex gap-4">
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1138_3032)">
                <rect width="22" height="16" rx="2" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0H7V16H0V0Z"
                  fill="#1A47B8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 0H22V16H15V0Z"
                  fill="#F93939"
                />
              </g>
              <defs>
                <clipPath id="clip0_1138_3032">
                  <rect width="22" height="16" rx="2" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="font-bold text-neutre">{value}</p>
          </div>
        );
      },
    },
    {
      field: "phone",
      label: "Tel",
      displayValue: (value: string) => {
        return (
          <div className="flex gap-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6354 11.1417L12.323 9.6574L12.3138 9.65318C12.1419 9.57963 11.9543 9.55012 11.768 9.5673C11.5818 9.58449 11.4028 9.64784 11.2472 9.75162C11.2289 9.76372 11.2113 9.77687 11.1945 9.791L9.48305 11.25C8.39883 10.7233 7.27946 9.6124 6.75282 8.54225L8.21391 6.80482C8.22798 6.78725 8.24133 6.76967 8.25399 6.75068C8.35554 6.5955 8.41716 6.41763 8.43335 6.23288C8.44954 6.04814 8.41981 5.86225 8.3468 5.69178V5.68334L6.85829 2.36529C6.76178 2.14259 6.59583 1.95707 6.38522 1.83643C6.1746 1.71579 5.93062 1.6665 5.68969 1.69592C4.73694 1.82129 3.8624 2.28919 3.22941 3.01223C2.59643 3.73528 2.24828 4.66401 2.25001 5.62498C2.25001 11.2078 6.79219 15.75 12.375 15.75C13.336 15.7517 14.2647 15.4036 14.9878 14.7706C15.7108 14.1376 16.1787 13.263 16.3041 12.3103C16.3335 12.0694 16.2844 11.8255 16.1638 11.6149C16.0433 11.4043 15.858 11.2383 15.6354 11.1417ZM12.375 14.625C9.98886 14.6224 7.70119 13.6733 6.01392 11.9861C4.32666 10.2988 3.37761 8.01113 3.37501 5.62498C3.37236 4.93837 3.61973 4.27427 4.07091 3.75671C4.5221 3.23915 5.14625 2.90351 5.8268 2.81248C5.82653 2.81529 5.82653 2.81811 5.8268 2.82092L7.30337 6.1256L5.85001 7.86514C5.83525 7.88211 5.82185 7.90021 5.80993 7.91928C5.70412 8.08164 5.64205 8.26859 5.62973 8.46199C5.61741 8.6554 5.65526 8.84871 5.73962 9.02318C6.37665 10.3261 7.68938 11.629 9.00633 12.2653C9.18209 12.3489 9.37652 12.3854 9.57062 12.3714C9.76473 12.3573 9.95187 12.2931 10.1138 12.1851C10.1318 12.173 10.1492 12.1598 10.1658 12.1458L11.8751 10.6875L15.1798 12.1676H15.1875C15.0976 12.8491 14.7624 13.4745 14.2448 13.9268C13.7271 14.3791 13.0624 14.6273 12.375 14.625Z"
                fill="#999999"
              />
            </svg>

            <p className="font-bold text-neutre font-lato">{value}</p>
          </div>
        );
      },
    },
    {
      field: "nbrClient",
      label: "Nb Client",
      displayValue: (value: string) => {
        return (
          <div className="bg-blue-1 w-[30px] h-[27px] rounded-full flex justify-center items-center">
            <span className="font-normal text-xs text-blue-2 ">{value}</span>
          </div>
        );
      },
    },
  ];
  const rows: IAgence[] = [
    {
      logo: "toursoft",
      name: "Toursoft",
      country: "Peru",
      market: "France",
      nbrClient: 2,
      phone: "+261 34 57 067 89",
    },
    {
      logo: "travel",
      name: "Travel",
      country: "Peru",
      market: "France",
      nbrClient: 2,
      phone: "5560",
    },
  ];

  return (
    <div>
      <GenericList
        title=""
        columns={columns}
        rows={rows}
        rowActions={rowActions}
      />
    </div>
  );
}
