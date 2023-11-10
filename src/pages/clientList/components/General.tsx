import GenericList from "../../../components/genericList/GenericList";
import { IColumn } from "../../../interfaces/genricModule/icolumn.interface";
type IAgent = {
  name: string;
  email: string;
  phone: string;
};
export default function General() {
  const columns: IColumn[] = [
    {
      field: "name",
      label: `Nom`,
      displayValue: (value: string) => {
        return <p className="text-10 font-bold text-violet-1">{value}</p>;
      },
    },
    {
      field: "email",
      label: "Adresse email",
      displayValue: (value: string) => {
        return (
          <p className="font-lato font-bold text-10 text-neutre">{value}</p>
        );
      },
    },
    {
      field: "phone",
      label: "Contact",
      displayValue: (value: string) => {
        <p className="font-lato font-bold text-10 text-neutre">{value}</p>;
      },
    },
  ];
  const rows: IAgent[] = [
    {
      email: "4140 Parker Rd. Allentown, New Mexico",
      name: "Jane Cooper",
      phone: "(406) 555-0120",
    },
    {
      email: "2464 Royal Ln. Mesa, New Jersey 45463",
      name: "Floyd Miles",
      phone: "(480) 555-0103",
    },
    {
      email: "2715 Ash Dr. San Jose, South Dakota 83475",
      name: "Wade Warren",
      phone: "(704) 555-0127",
    },
    {
      email: "8502 Preston Rd. Inglewood, Maine 98380",
      name: "Brooklyn Simmons",
      phone: "(205) 555-0100",
    },
  ];
  return (
    <>
      <div className="bg-white p-4 mt-2 flex flex-row rounded-lg ">
        <div className="flex w-1/2 items-center">
          <span className="font-bold text-violet-1 text-sm mr-4">Pays</span>
          <div className="mr-2">
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_883_1826)">
                <rect width="22" height="16" rx="2" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0H7.33333V16H0V0ZM14.6667 0H22V16H14.6667V0Z"
                  fill="#F93939"
                />
              </g>
              <defs>
                <clipPath id="clip0_883_1826">
                  <rect width="22" height="16" rx="2" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <span className="font-bold text-neutre">Peru</span>
        </div>
        <div className="flex w-1/2  items-center">
          <span className="font-bold text-violet-1 text-sm mr-4">Market</span>
          <div className="mr-2">
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_418_4500)">
                <g clip-path="url(#clip1_418_4500)">
                  <rect width="22" height="16" rx="2" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H9.42857V7.46667H0V0Z"
                    fill="#1A47B8"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.42857 0V1.06667H22V0H9.42857ZM9.42857 2.13333V3.2H22V2.13333H9.42857ZM9.42857 4.26667V5.33333H22V4.26667H9.42857ZM9.42857 6.4V7.46667H22V6.4H9.42857ZM0 8.53333V9.6H22V8.53333H0ZM0 10.6667V11.7333H22V10.6667H0ZM0 12.8V13.8667H22V12.8H0ZM0 14.9333V16H22V14.9333H0Z"
                    fill="#F93939"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.04785 1.06665V2.13332H2.09547V1.06665H1.04785ZM3.14309 1.06665V2.13332H4.19071V1.06665H3.14309ZM5.23833 1.06665V2.13332H6.28595V1.06665H5.23833ZM7.33357 1.06665V2.13332H8.38119V1.06665H7.33357ZM6.28595 2.13332V3.19998H7.33357V2.13332H6.28595ZM4.19071 2.13332V3.19998H5.23833V2.13332H4.19071ZM2.09547 2.13332V3.19998H3.14309V2.13332H2.09547ZM1.04785 3.19998V4.26665H2.09547V3.19998H1.04785ZM3.14309 3.19998V4.26665H4.19071V3.19998H3.14309ZM5.23833 3.19998V4.26665H6.28595V3.19998H5.23833ZM7.33357 3.19998V4.26665H8.38119V3.19998H7.33357ZM1.04785 5.33332V6.39998H2.09547V5.33332H1.04785ZM3.14309 5.33332V6.39998H4.19071V5.33332H3.14309ZM5.23833 5.33332V6.39998H6.28595V5.33332H5.23833ZM7.33357 5.33332V6.39998H8.38119V5.33332H7.33357ZM6.28595 4.26665V5.33332H7.33357V4.26665H6.28595ZM4.19071 4.26665V5.33332H5.23833V4.26665H4.19071ZM2.09547 4.26665V5.33332H3.14309V4.26665H2.09547Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_418_4500">
                  <rect width="22" height="16" fill="white" />
                </clipPath>
                <clipPath id="clip1_418_4500">
                  <rect width="22" height="16" rx="2" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_445_3791)">
                <g clip-path="url(#clip1_445_3791)">
                  <rect width="22" height="16" rx="2" fill="white" />
                  <path
                    d="M11.2353 12H10.7647L10.8824 10.2703C10.8757 10.1792 10.8281 10.1552 10.6471 10.1622L8.76471 10.3784C8.76471 10.3784 9.11765 9.94595 9.11765 9.72973C9.11765 9.51351 7 8.10811 7 8.10811C7 8.10811 7.47059 8 7.58824 7.89189C7.70588 7.78378 7.11765 6.59459 7.11765 6.59459C7.11765 6.59459 8.31321 7.02703 8.41176 6.91892C8.51032 6.81081 8.64706 6.37838 8.64706 6.37838C8.64706 6.37838 9.58824 7.35135 9.82353 7.35135C10.0588 7.35135 9.35294 4.97297 9.35294 4.97297C9.35294 4.97297 9.94118 5.40541 10.1765 5.40541C10.4118 5.40541 11 4 11 4C11 4 11.5882 5.40541 11.7059 5.40541C11.8235 5.40541 12.6471 4.97297 12.6471 4.97297C12.6471 4.97297 12.0588 7.24324 12.1765 7.35135C12.2941 7.45946 13.3529 6.37838 13.3529 6.37838C13.3529 6.37838 13.4706 6.81081 13.5882 6.91892C13.7059 7.02703 14.8824 6.59459 14.8824 6.59459C14.8824 6.59459 14.2941 7.78378 14.4118 7.89189C14.5294 8 15 8.10811 15 8.10811C15 8.10811 12.8824 9.51351 12.8824 9.72973C12.8824 9.94595 13.1176 10.3784 13.1176 10.3784L11.3529 10.1622C11.2111 10.1248 11.1619 10.1532 11.1176 10.2703L11.2353 12Z"
                    fill="#F93939"
                  />
                  <rect x="17" width="5" height="16" fill="#F93939" />
                  <rect width="5" height="16" fill="#F93939" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_445_3791">
                  <rect width="22" height="16" fill="white" />
                </clipPath>
                <clipPath id="clip1_445_3791">
                  <rect width="22" height="16" rx="2" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 mt-1 flex flex-col rounded-lg ">
        <h4 className="font-bold text-base text-violet-1">Liste d'agents</h4>

        <GenericList title="" columns={columns} rows={rows} />
      </div>
    </>
  );
}
