import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IOrder } from "../../../interfaces/iorder.interface";
import { clearPaxType } from "../../../functions";
import { IPaxType } from "../../../interfaces/ipaxType.interface";

type PropsResume = {
  label: string;
  count: string | number;
  noBorder?: boolean;
};

type IPayrolls = {
  no: number;
  firstname: string;
  lastname: string;
};

const CollapseCustom = ({
  label,
  values,
  setterPaxList,
}: {
  label: string;
  values: IPayrolls[];
  setterPaxList: (index: number, values: Omit<IPayrolls, "no">) => void;
}) => {
  return (
    <div className="acc mt-3">
      <div className="acc_header flex gap-4 items-center">
        <div>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.08221 6.22223L12.4478 0.863829C12.4999 0.811467 12.562 0.770091 12.6303 0.742152C12.6987 0.714213 12.772 0.700278 12.8458 0.701173C12.9197 0.702068 12.9926 0.717775 13.0603 0.747364C13.128 0.776952 13.189 0.81982 13.2398 0.873429C13.3439 0.983081 13.4011 1.129 13.3993 1.28018C13.3975 1.43136 13.3369 1.57588 13.2302 1.68303L7.46781 7.43743C7.4161 7.48949 7.35454 7.53071 7.28671 7.5587C7.21889 7.58669 7.14617 7.60087 7.0728 7.60042C6.99943 7.59998 6.92688 7.58491 6.85941 7.5561C6.79193 7.52729 6.73087 7.48531 6.67981 7.43263L0.763805 1.37583C0.659103 1.2674 0.600586 1.12256 0.600586 0.971829C0.600586 0.8211 0.659103 0.676257 0.763805 0.567829C0.815255 0.514849 0.876813 0.472731 0.944833 0.44397C1.01285 0.41521 1.08595 0.400391 1.15981 0.400391C1.23366 0.400391 1.30676 0.41521 1.37478 0.44397C1.4428 0.472731 1.50436 0.514849 1.55581 0.567829L7.08221 6.22223Z"
              fill="#9F1972"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-base uppercase">{label}</h4>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400 border-separate border-spacing-2">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr className="text-[#979797] font-bold text-xs normal-case">
              <th scope="col" className="px-[10px] py-[8px] w-[65px]">
                #PAX
              </th>
              <th scope="col" className="px-[10px] py-[8px]">
                Nom
              </th>
              <th scope="col" className="px-[10px] py-[8px]">
                Prénom
              </th>
            </tr>
          </thead>
          <tbody className="text-10">
            {values.map((item, indexItem) => (
              <RowsCustom
                key={indexItem}
                no={item.no}
                firstname={item.firstname}
                lastname={item.lastname}
                setterPaxList={setterPaxList}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RowsCustom = ({
  firstname,
  lastname,
  no,
  setterPaxList,
}: IPayrolls & {
  setterPaxList: (index: number, values: Omit<IPayrolls, "no">) => void;
}) => {
  // const hasValue = firstname && lastname;

  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState(firstname);
  const [lastName, setLastName] = useState(lastname);

  console.log({
    firstName,
    lastName,
  });

  return (
    <tr>
      <th
        scope="row"
        className="px-[10px] py-[8px] font-lato  font-bold text-black rounded-lg bg-[#F6F6F6]"
      >
        {no}
      </th>

      {/* {hasValue && ( */}
      <>
        <td className="px-[10px] py-[8px] font-medium text-black rounded-lg bg-[#F6F6F6]">
          {edit && (
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
          )}
          {!edit && firstName}
        </td>
        <td className="px-[10px] py-[8px] font-medium text-black rounded-lg bg-[#F6F6F6]">
          {edit && (
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          )}
          {!edit && lastName}
        </td>

        <td className="bg-white">
          <div className="flex gap-2 cursor-pointer">
            <div
              onClick={() => {
                if (!edit) setEdit(true);
              }}
            >
              {!edit && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.04393 1.01087C8.43599 0.627835 8.96325 0.414812 9.51135 0.418004C10.0595 0.421196 10.5842 0.640345 10.9718 1.02792C11.3594 1.41549 11.5785 1.94024 11.5817 2.48834C11.5849 3.03644 11.3719 3.56371 10.9888 3.95577L10.5205 4.42407L7.57563 1.47917L8.04393 1.01087ZM7.08073 1.97477L1.48143 7.57407C1.2523 7.80346 1.09326 8.09337 1.02293 8.40987L0.408325 11.1749C0.395471 11.2324 0.397355 11.2922 0.413803 11.3489C0.430252 11.4055 0.460732 11.457 0.502415 11.4987C0.544098 11.5404 0.595634 11.5708 0.652242 11.5873C0.70885 11.6037 0.768695 11.6056 0.826225 11.5928L3.57443 10.9817C3.90163 10.9088 4.20128 10.7442 4.43823 10.5071L10.0256 4.91967L7.08073 1.97477Z"
                    fill="#00ADED"
                  />
                </svg>
              )}
              {edit && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={() => {
                    setterPaxList(no - 1, {
                      firstname: firstName,
                      lastname: lastName,
                    });

                    console.log("test", edit);

                    setEdit(false);
                  }}
                >
                  <path
                    fill="currentColor"
                    d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
                  />
                </svg>
              )}
            </div>
            {/* <div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1.2L10.8 0L6 4.8L1.2 0L0 1.2L4.8 6L0 10.8L1.2 12L6 7.2L10.8 12L12 10.8L7.2 6L12 1.2Z"
                  fill="#FF4040"
                />
              </svg>
            </div> */}
          </div>
        </td>
      </>
      {/* )} */}

      {/* {!hasValue && (
        <td
          className="px-[10px] py-[8px] cursor-pointer rounded-lg bg-[#F6F6F6]"
          colSpan={2}
          onClick={() => {
            setEdit(true);
          }}
        >
          <div className="flex items-center gap-2 justify-center font-bold text-grey-3">
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.67139 8.00005C4.67139 7.86745 4.72407 7.74027 4.81783 7.6465C4.9116 7.55273 5.03878 7.50005 5.17139 7.50005H7.50005V5.17139C7.50005 5.03878 7.55273 4.9116 7.6465 4.81783C7.74027 4.72407 7.86745 4.67139 8.00005 4.67139C8.13266 4.67139 8.25984 4.72407 8.35361 4.81783C8.44737 4.9116 8.50005 5.03878 8.50005 5.17139V7.50005H10.8287C10.9613 7.50005 11.0885 7.55273 11.1823 7.6465C11.276 7.74027 11.3287 7.86745 11.3287 8.00005C11.3287 8.13266 11.276 8.25984 11.1823 8.35361C11.0885 8.44737 10.9613 8.50005 10.8287 8.50005H8.50005V10.8287C8.50005 10.9613 8.44737 11.0885 8.35361 11.1823C8.25984 11.276 8.13266 11.3287 8.00005 11.3287C7.86745 11.3287 7.74027 11.276 7.6465 11.1823C7.55273 11.0885 7.50005 10.9613 7.50005 10.8287V8.50005H5.17139C5.03878 8.50005 4.9116 8.44737 4.81783 8.35361C4.72407 8.25984 4.67139 8.13266 4.67139 8.00005Z"
                  fill="#AAAAAA"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.87822 2.51285C6.9532 2.28283 9.04724 2.28283 11.1222 2.51285C12.3402 2.64885 13.3236 3.60819 13.4662 4.83285C13.7129 6.93752 13.7129 9.06352 13.4662 11.1682C13.3229 12.3929 12.3396 13.3515 11.1222 13.4882C9.04724 13.7182 6.9532 13.7182 4.87822 13.4882C3.66022 13.3515 2.67689 12.3929 2.53422 11.1682C2.28807 9.06358 2.28807 6.93746 2.53422 4.83285C2.67689 3.60819 3.66089 2.64885 4.87822 2.51285ZM11.0116 3.50619C9.01013 3.28434 6.99031 3.28434 4.98889 3.50619C4.61838 3.54729 4.27255 3.7121 4.00727 3.974C3.74199 4.23589 3.57275 4.57957 3.52689 4.94952C3.28979 6.97683 3.28979 9.02487 3.52689 11.0522C3.57289 11.422 3.74219 11.7655 4.00746 12.0273C4.27273 12.2891 4.61848 12.4538 4.98889 12.4949C6.97355 12.7162 9.02689 12.7162 11.0116 12.4949C11.3818 12.4536 11.7274 12.2889 11.9926 12.0271C12.2577 11.7654 12.4269 11.4219 12.4729 11.0522C12.71 9.02487 12.71 6.97683 12.4729 4.94952C12.4268 4.57992 12.2575 4.23662 11.9924 3.975C11.7273 3.71339 11.3817 3.5487 11.0116 3.50752V3.50619Z"
                  fill="#AAAAAA"
                />
              </svg>
            </div>
            <p>Ajouter un passager</p>
          </div>
        </td>
      )} */}
    </tr>
  );
};
const Resume = ({ count, label, noBorder = false }: PropsResume) => {
  return (
    <div
      className={`flex gap-2 pr-4 border-r-${noBorder ? 0 : 2} border-violet-3`}
    >
      <div className="font-normal font-10 text-neutre">{label}</div>
      <div className="font-lato font-bold">{count}</div>
    </div>
  );
};

export default function PaxListsClient() {
  const contextProvider = useOutletContext<{
    currentOrder: IOrder;
  }>();
  const { currentOrder } = contextProvider;

  const { total } = clearPaxType(currentOrder.pax_type);
  const [paxList, setPaxList] = useState<IPayrolls[]>([]);

  useEffect(() => {
    if (total) {
      const datas: IPayrolls[] = [];

      for (let i = 0; i < total; i++) {
        datas.push({
          no: i + 1,
          firstname: "",
          lastname: "",
        });
      }

      setPaxList(datas);
    }
  }, [total]);

  const setterPaxList = (index: number, values: Omit<IPayrolls, "no">) => {
    const newDatas = [...paxList];
    const patchValue = { ...newDatas[index], ...values };
    newDatas[index] = patchValue;
    setPaxList(newDatas);
  };

  return (
    <div className="p-5 rounded-lg bg-white mt-4">
      <div className="header flex gap-2">
        <div>
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="38"
              height="38"
              rx="19"
              fill="#381A44"
              fill-opacity="0.04"
            />
            <path
              d="M13.75 11H24.25C24.9503 11 25.6242 11.2671 26.1343 11.7469C26.6444 12.2267 26.9522 12.883 26.995 13.582L27 13.75V17.104C27.5451 17.2587 28.0291 17.578 28.386 18.0181C28.7429 18.4582 28.9552 18.9977 28.994 19.563L29 19.75V27.25C28.9999 27.44 28.9278 27.6229 28.798 27.7618C28.6683 27.9006 28.4907 27.9851 28.3011 27.998C28.1115 28.011 27.9241 27.9515 27.7767 27.8316C27.6293 27.7117 27.5329 27.5402 27.507 27.352L27.5 27.25V25H10.5V27.25C10.5 27.4312 10.4344 27.6063 10.3152 27.7429C10.1961 27.8795 10.0316 27.9684 9.852 27.993L9.75 28C9.56876 28 9.39366 27.9344 9.25707 27.8152C9.12048 27.6961 9.03165 27.5316 9.007 27.352L9 27.25V19.75C9 18.491 9.846 17.43 11 17.103V13.75C11 13.0497 11.2671 12.3758 11.7469 11.8657C12.2267 11.3556 12.883 11.0478 13.582 11.005L13.75 11ZM26.25 18.5H11.75C11.4405 18.4999 11.142 18.6145 10.9122 18.8218C10.6824 19.029 10.5377 19.3142 10.506 19.622L10.5 19.75V23.5H27.5V19.75C27.4999 19.4407 27.3851 19.1424 27.1779 18.9129C26.9707 18.6833 26.6857 18.5387 26.378 18.507L26.25 18.5ZM24.25 12.5H13.75C13.4405 12.4999 13.142 12.6145 12.9122 12.8218C12.6824 13.029 12.5377 13.3142 12.506 13.622L12.5 13.75V17H14C14 16.7348 14.1054 16.4804 14.2929 16.2929C14.4804 16.1054 14.7348 16 15 16H17C17.2449 16 17.4813 16.09 17.6644 16.2527C17.8474 16.4155 17.9643 16.6397 17.993 16.883L18 17H20C20 16.7348 20.1054 16.4804 20.2929 16.2929C20.4804 16.1054 20.7348 16 21 16H23C23.2449 16 23.4813 16.09 23.6644 16.2527C23.8474 16.4155 23.9643 16.6397 23.993 16.883L24 17H25.5V13.75C25.5001 13.4405 25.3855 13.142 25.1782 12.9122C24.971 12.6824 24.6858 12.5377 24.378 12.506L24.25 12.5Z"
              fill="#381A44"
            />
          </svg>
        </div>

        <div className="flex gap-4 items-center">
          <h4 className="font-bold">Configuration de chambre</h4>
          {/* <Resume label="SGL" count="2" />
          <Resume label="DBL" count="1" />
          <Resume label="TPL" count="1" noBorder={true} /> */}
          <Resume
            label={currentOrder.room_type}
            count={total}
            noBorder={true}
          />
        </div>

        <div className="flex items-center w-full  justify-end">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="3.5"
              stroke="black"
              stroke-opacity="0.2"
            />
            <path
              d="M6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12"
              stroke="#010101"
              stroke-opacity="0.2"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M12 13.5V6M12 6L14.25 8.25M12 6L9.75 8.25"
              stroke="#010101"
              stroke-opacity="0.2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <CollapseCustom
        label={currentOrder.room_type}
        values={paxList}
        setterPaxList={setterPaxList}
      />
      {/* <CollapseCustom
        label="DBL"
        values={[
          {
            no: 3,
            firstname: "",
            lastname: "",
          },
        ]}
      /> */}
      {/* <CollapseCustom
        label="TPL"
        values={[
          {
            no: 3,
            firstname: "test",
            lastname: "test",
          },
        ]}
      /> */}
    </div>
  );
}
