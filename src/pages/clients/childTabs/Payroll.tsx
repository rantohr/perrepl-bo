import { useNavigate } from "react-router-dom";
import GenericList from "../../../components/genericList/GenericList";
import {
  IColumn,
  IListAction,
} from "../../../interfaces/genricModule/icolumn.interface";
type IPayroll = {
  tranche: number;
  paiementMode: string;
  dateBefore: string;
  date: string;
  amount: string;
  status: number;
};
export default function PayrollClient() {
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
      field: "tranche",
      label: `#Tranche`,
      displayValue: (value: string) => {
        return <p className="font-lato font-medium text-grey-7">{value}</p>;
      },
    },
    {
      field: "paiementMode",
      label: `Mode de paiement`,
      displayValue: (value: string) => {
        return <p className="font-lato font-medium text-grey-7">{value}</p>;
      },
    },
    {
      field: "dateBefore",
      label: `Payer avant le`,
      displayValue: (value: string) => {
        return <p className="font-lato font-medium text-grey-7">{value}</p>;
      },
    },
    {
      field: "date",
      label: `Dates de paiements`,
      displayValue: (value: string) => {
        return <p className="font-lato font-medium text-grey-7">{value}</p>;
      },
    },
    {
      field: "amount",
      label: `Montants`,
      displayValue: (value: string, row: IPayroll) => {
        return (
          <div className="flex items-center gap-2">
            <p className="font-lato font-medium text-grey-7">{value}</p>
            {row.status !== 0 && (
              <>
                <span className="bg-green-2 text-green-1 text-10 font-bold me-2 px-2.5 py-0.5 rounded-lg ">
                  Payé
                </span>
                <div>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9999 1.8335V7.3335C10.9999 7.81973 11.193 8.28604 11.5369 8.62986C11.8807 8.97368 12.347 9.16683 12.8332 9.16683H18.3332V18.3335C18.3332 18.8197 18.1401 19.286 17.7963 19.6299C17.4524 19.9737 16.9861 20.1668 16.4999 20.1668H11.9166C12.4273 19.4859 12.7383 18.6762 12.8147 17.8284C12.8911 16.9807 12.73 16.1284 12.3494 15.3671C11.9687 14.6058 11.3836 13.9655 10.6595 13.518C9.93544 13.0705 9.10107 12.8335 8.24989 12.8335H3.66656V3.66683C3.66656 3.1806 3.85972 2.71428 4.20353 2.37047C4.54735 2.02665 5.01366 1.8335 5.4999 1.8335H10.9999ZM12.3749 2.29183V7.3335C12.3749 7.45505 12.4232 7.57163 12.5091 7.65759C12.5951 7.74354 12.7117 7.79183 12.8332 7.79183H17.8749L12.3749 2.29183ZM5.27073 14.4377C5.27073 14.2553 5.1983 14.0805 5.06936 13.9515C4.94043 13.8226 4.76556 13.7502 4.58323 13.7502L4.3999 13.7547C3.4445 13.8026 2.54562 14.2219 1.89505 14.9232C1.24447 15.6245 0.89373 16.5522 0.917652 17.5085C0.941574 18.4648 1.33827 19.3739 2.02309 20.0418C2.70791 20.7097 3.62664 21.0835 4.58323 21.0835L4.67673 21.0771C4.84929 21.0533 5.00641 20.965 5.11633 20.8299C5.22626 20.6947 5.28079 20.5229 5.26892 20.3491C5.25705 20.1754 5.17965 20.0126 5.05237 19.8936C4.92509 19.7747 4.75742 19.7085 4.58323 19.7085L4.4329 19.7039C3.83835 19.6663 3.28183 19.3986 2.88129 18.9576C2.48075 18.5167 2.26767 17.937 2.28722 17.3416C2.30677 16.7462 2.55741 16.1818 2.98601 15.7681C3.41462 15.3543 3.9875 15.1237 4.58323 15.1252L4.67673 15.1187C4.84132 15.0962 4.99216 15.0147 5.10136 14.8895C5.21056 14.7643 5.27072 14.6038 5.27073 14.4377ZM11.9166 17.4168C11.9166 16.4444 11.5303 15.5117 10.8426 14.8241C10.155 14.1365 9.22235 13.7502 8.24989 13.7502L8.15639 13.7566C7.98383 13.7803 7.82671 13.8687 7.71679 14.0038C7.60687 14.1389 7.55233 14.3107 7.5642 14.4845C7.57608 14.6583 7.65347 14.8211 7.78075 14.94C7.90803 15.0589 8.07571 15.1251 8.24989 15.1252L8.40023 15.1297C8.99477 15.1674 9.55129 15.435 9.95183 15.876C10.3524 16.317 10.5655 16.8966 10.5459 17.492C10.5264 18.0874 10.2757 18.6518 9.84711 19.0656C9.4185 19.4794 8.84562 19.7099 8.24989 19.7085L8.15639 19.7149C7.98383 19.7387 7.82671 19.827 7.71679 19.9621C7.60687 20.0973 7.55233 20.2691 7.5642 20.4429C7.57608 20.6166 7.65347 20.7794 7.78075 20.8984C7.90803 21.0173 8.07571 21.0834 8.24989 21.0835L8.43323 21.0789C9.37277 21.0319 10.2583 20.6255 10.9066 19.9439C11.555 19.2623 11.9166 18.3576 11.9166 17.4168ZM8.02073 16.7293H4.8124L4.71889 16.7357C4.54633 16.7595 4.38922 16.8478 4.27929 16.983C4.16937 17.1181 4.11483 17.2899 4.1267 17.4637C4.13858 17.6375 4.21597 17.8003 4.34325 17.9192C4.47053 18.0381 4.63821 18.1043 4.8124 18.1043H8.02073L8.11423 18.0979C8.28679 18.0742 8.44391 17.9858 8.55383 17.8507C8.66376 17.7156 8.71829 17.5438 8.70642 17.37C8.69455 17.1962 8.61715 17.0334 8.48987 16.9145C8.36259 16.7956 8.19492 16.7294 8.02073 16.7293Z"
                      fill="#381A44"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
        );
      },
    },
  ];
  const rows: IPayroll[] = [
    {
      tranche: 1,
      paiementMode: "Carte bancaire",
      dateBefore: "20 JUN 2023",
      date: "22 JUN 2023",
      amount: "200",
      status: 1,
    },
    {
      tranche: 2,
      paiementMode: "Carte bancaire",
      dateBefore: "26 JUN 2023",
      date: "-",
      amount: "200",
      status: 0,
    },
    {
      tranche: 3,
      paiementMode: "Chèques",
      dateBefore: "20 JUN 2023",
      date: "-",
      amount: "40",
      status: 0,
    },
  ];
  return (
    <div className="mt-2">
      <div className="bg-white p-4 flex">
        <div className="w-1/2">
          <h4 className="text-xs font-bold text-violet-1">Titre de voyage</h4>
          <div className="flex items-center gap-2 mt-2">
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_230_2747)">
                  <path
                    d="M4.08333 6.4165H5.25V7.58317H4.08333V6.4165ZM12.25 3.49984V11.6665C12.25 12.3082 11.725 12.8332 11.0833 12.8332H2.91667C2.60725 12.8332 2.3105 12.7103 2.09171 12.4915C1.87292 12.2727 1.75 11.9759 1.75 11.6665L1.75583 3.49984C1.75583 2.85817 2.26917 2.33317 2.91667 2.33317H3.5V1.1665H4.66667V2.33317H9.33333V1.1665H10.5V2.33317H11.0833C11.725 2.33317 12.25 2.85817 12.25 3.49984ZM2.91667 4.6665H11.0833V3.49984H2.91667V4.6665ZM11.0833 11.6665V5.83317H2.91667V11.6665H11.0833ZM8.75 7.58317H9.91667V6.4165H8.75V7.58317ZM6.41667 7.58317H7.58333V6.4165H6.41667V7.58317Z"
                    fill="black"
                    fill-opacity="0.3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_230_2747">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="border-r pr-4 border-grey-9">
              <p className="font-lato text-xs text-grey-8">
                20 JUN 2023 - 29 JUN 2023
              </p>
            </div>
            <div>
              <p className="font-lato text-xs text-neutre">12 Jours</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex items-end flex-col">
          <h4 className="font-bold text-xs text-neutre">TOTAL</h4>
          <p className="font-lato font-bold text-2xl text-violet-1">440€</p>
        </div>
      </div>

      <div className="bg-white p-4 mt-2">
        <GenericList
          title=""
          columns={columns}
          rows={rows}
          rowActions={rowActions}
        />

        <div className="footerArray mt-4 pt-4 border-t-[1px] border-grey-10 flex items-end flex-col">
          <div className="flex gap-2">
            <p className="text-xs font-normal text-neutre">Reste :</p>
            <p className="font-lato text-xs font-bold text-grey-7">240€</p>
          </div>
          <div className="flex gap-2">
            <p className="text-xs font-normal text-neutre">Total :</p>
            <p className="font-lato font-semibold text-sm">440€</p>
          </div>
        </div>
      </div>
    </div>
  );
}
