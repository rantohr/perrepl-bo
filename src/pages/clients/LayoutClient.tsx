import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BadgeCustom from "../components/BadgeCustom";
import { useState } from "react";
import { Modal } from "flowbite-react";

const Stepper = () => {
  return (
    <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
      <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
          1
        </span>
        <span>
          <h3 className="font-medium leading-tight">User info</h3>
          <p className="text-sm">Step details here</p>
        </span>
      </li>
      <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
          2
        </span>
        <span>
          <h3 className="font-medium leading-tight">Company info</h3>
          <p className="text-sm">Step details here</p>
        </span>
      </li>
      <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
          3
        </span>
        <span>
          <h3 className="font-medium leading-tight">Payment info</h3>
          <p className="text-sm">Step details here</p>
        </span>
      </li>
    </ol>
  );
};

export default function LayoutClient() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const last = paths[paths.length - 1];
  const [openModal, setOpenModal] = useState(false);
  const [openCreateClient, setCreateClient] = useState(false);

  return (
    <>
      <div className="ml-4 mr-6 mt-4">
        <div className="header flex flex-row gap-9">
          <div className="flex gap-4 items-center w-1/2">
            <h4 className="font-bold text-2xl">Client</h4>
            <div className="bg-transparent-grey w-[30px] h-[27px] rounded-full flex justify-center items-center">
              <span className="font-normal text-xs text-neutre ">2</span>
            </div>
          </div>
          <div className=" w-1/2 flex gap-4 justify-end">
            <button
              type="button"
              className="
            text-violet-1
            hover:violet-1 font-bold border border-transparent-grey hover:bg-transparent focus:outline-none   rounded-lg text-sm 
            flex items-center justify-center px-3 py-1
            
            "
              onClick={() => setOpenModal(true)}
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
              onClick={() => setCreateClient(true)}
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

        <div className="flex gap-2 mt-4">
          <BadgeCustom
            label="Tout"
            active={last.includes("client")}
            onClick={() => {
              navigate("/app/client");
            }}
          />
          <BadgeCustom
            label="Client B2C"
            active={last.includes("b2c")}
            onClick={() => {
              navigate("/app/client/b2c");
            }}
          />
          <BadgeCustom
            label="Client B2B"
            active={last.includes("b2b")}
            onClick={() => {
              navigate("/app/client/b2b");
            }}
          />
          <BadgeCustom
            label="Agence"
            active={last.includes("agence")}
            onClick={() => {
              navigate("/app/client/agence");
            }}
          />
        </div>

        <div className="container mt-4">
          <Outlet />
        </div>
      </div>

      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="glass-container"
        size={"3xl"}
      >
        <Modal.Header className="form-modal-header">
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="49"
              height="49"
              rx="24.5"
              fill="#381A44"
              fill-opacity="0.1"
            />
            <g clip-path="url(#clip0_191_2792)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.1202 28.6749C24.3215 28.6749 24.5145 28.5949 24.6569 28.4526C24.7992 28.3102 24.8792 28.1172 24.8792 27.9159V16.8109L26.5794 18.7955C26.7103 18.9485 26.8967 19.0432 27.0975 19.0588C27.2983 19.0743 27.4971 19.0095 27.6501 18.8785C27.8031 18.7475 27.8978 18.5611 27.9133 18.3603C27.9289 18.1595 27.864 17.9608 27.7331 17.8078L24.697 14.2657C24.6257 14.1824 24.5373 14.1155 24.4377 14.0696C24.3381 14.0238 24.2298 14 24.1202 14C24.0105 14 23.9022 14.0238 23.8026 14.0696C23.703 14.1155 23.6146 14.1824 23.5433 14.2657L20.5072 17.8078C20.4424 17.8835 20.3931 17.9713 20.3622 18.0661C20.3312 18.1609 20.3193 18.2609 20.327 18.3603C20.3347 18.4598 20.3619 18.5567 20.4071 18.6456C20.4522 18.7345 20.5145 18.8136 20.5902 18.8785C20.666 18.9434 20.7538 18.9927 20.8486 19.0236C20.9434 19.0545 21.0433 19.0665 21.1428 19.0588C21.2422 19.0511 21.3391 19.0238 21.428 18.9787C21.5169 18.9335 21.5961 18.8713 21.6609 18.7955L23.3611 16.812V27.9159C23.3611 28.3348 23.7012 28.6749 24.1202 28.6749Z"
                fill="#381A44"
              />
              <path
                d="M28.1683 21.8438C27.4579 21.8438 27.1026 21.8437 26.8466 22.0148C26.7365 22.0884 26.6419 22.183 26.5683 22.2931C26.3973 22.5491 26.3973 22.9043 26.3973 23.6148V27.9159C26.3973 28.5198 26.1574 29.099 25.7303 29.526C25.3033 29.953 24.7241 30.1929 24.1202 30.1929C23.5163 30.1929 22.9371 29.953 22.5101 29.526C22.0831 29.099 21.8432 28.5198 21.8432 27.9159V23.6148C21.8432 22.9043 21.8432 22.5491 21.6721 22.2931C21.5985 22.183 21.5039 22.0884 21.3938 22.0148C21.1378 21.8437 20.7826 21.8438 20.0721 21.8438C17.2101 21.8438 15.7781 21.8437 14.8896 22.7333C14 23.6219 14 25.0519 14 27.9149V28.9269C14 31.7909 14 33.2209 14.8896 34.1105C15.7781 35 17.2101 35 20.0721 35H28.1683C31.0303 35 32.4623 35 33.3509 34.1105C34.2404 33.2209 34.2404 31.7899 34.2404 28.9279V27.9159C34.2404 25.0529 34.2404 23.6219 33.3509 22.7333C32.4623 21.8437 31.0303 21.8438 28.1683 21.8438Z"
                fill="#381A44"
              />
            </g>
            <defs>
              <clipPath id="clip0_191_2792">
                <rect
                  width="21"
                  height="21"
                  fill="white"
                  transform="translate(14 14)"
                />
              </clipPath>
            </defs>
          </svg>
        </Modal.Header>
        <Modal.Body>
          <h3 className="font-bold text-2xl">Importer des clients</h3>
          <p className="text-xs mt-4">
            Pour une importation sans faille de vos fichiers clients depuis
            votre ordinateur, veuillez <b>consulter les démos</b> et{" "}
            <b>télécharger</b> les modèles disponibles en bas.
          </p>

          <div className="mt-4">
            <div className="w-[197px] h-[65px] border-[1.5px] border-grey-6 rounded-lg flex items-center justify-around">
              <div>
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.5623 3.95833C22.5623 3.85335 22.5206 3.75267 22.4464 3.67844C22.3722 3.6042 22.2715 3.5625 22.1665 3.5625H11.0832C9.92837 3.5625 8.82087 4.02124 8.00431 4.83781C7.18774 5.65437 6.729 6.76187 6.729 7.91667V30.0833C6.729 31.2381 7.18774 32.3456 8.00431 33.1622C8.82087 33.9788 9.92837 34.4375 11.0832 34.4375H26.9165C28.0713 34.4375 29.1788 33.9788 29.9954 33.1622C30.8119 32.3456 31.2707 31.2381 31.2707 30.0833V14.4828C31.2707 14.3778 31.229 14.2771 31.1547 14.2029C31.0805 14.1286 30.9798 14.0869 30.8748 14.0869H23.7498C23.4349 14.0869 23.1328 13.9618 22.9101 13.7391C22.6874 13.5164 22.5623 13.2144 22.5623 12.8994V3.95833ZM23.7498 19.3958C24.0648 19.3958 24.3668 19.5209 24.5895 19.7436C24.8122 19.9663 24.9373 20.2684 24.9373 20.5833C24.9373 20.8983 24.8122 21.2003 24.5895 21.423C24.3668 21.6457 24.0648 21.7708 23.7498 21.7708H14.2498C13.9349 21.7708 13.6328 21.6457 13.4101 21.423C13.1874 21.2003 13.0623 20.8983 13.0623 20.5833C13.0623 20.2684 13.1874 19.9663 13.4101 19.7436C13.6328 19.5209 13.9349 19.3958 14.2498 19.3958H23.7498ZM23.7498 25.7292C24.0648 25.7292 24.3668 25.8543 24.5895 26.077C24.8122 26.2997 24.9373 26.6017 24.9373 26.9167C24.9373 27.2316 24.8122 27.5337 24.5895 27.7564C24.3668 27.9791 24.0648 28.1042 23.7498 28.1042H14.2498C13.9349 28.1042 13.6328 27.9791 13.4101 27.7564C13.1874 27.5337 13.0623 27.2316 13.0623 26.9167C13.0623 26.6017 13.1874 26.2997 13.4101 26.077C13.6328 25.8543 13.9349 25.7292 14.2498 25.7292H23.7498Z"
                    fill="#381A44"
                  />
                  <path
                    d="M24.9375 4.47131C24.9375 4.17997 25.2431 3.99472 25.4695 4.17681C25.6611 4.33197 25.8337 4.51247 25.9809 4.71831L30.7515 11.3636C30.8592 11.5156 30.742 11.7119 30.5552 11.7119H25.3333C25.2284 11.7119 25.1277 11.6702 25.0534 11.596C24.9792 11.5217 24.9375 11.421 24.9375 11.3161V4.47131Z"
                    fill="#381A44"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">Demos</h4>
                <p className="text-xs text-grey-7">à télécharger</p>
              </div>
              <div>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.725 11.9488C16.5492 11.7732 16.3109 11.6746 16.0625 11.6746C15.8141 11.6746 15.5758 11.7732 15.4 11.9488L12.9375 14.4112V5.1875C12.9375 4.93886 12.8387 4.7004 12.6629 4.52459C12.4871 4.34877 12.2486 4.25 12 4.25C11.7514 4.25 11.5129 4.34877 11.3371 4.52459C11.1613 4.7004 11.0625 4.93886 11.0625 5.1875V14.4112L8.6 11.9488C8.42228 11.7831 8.18722 11.693 7.94435 11.6973C7.70147 11.7016 7.46974 11.8 7.29797 11.9717C7.12621 12.1435 7.02782 12.3752 7.02353 12.6181C7.01925 12.861 7.1094 13.096 7.275 13.2738L11.3375 17.3363L12 18L12.6625 17.3375L16.725 13.275C16.8121 13.1879 16.8812 13.0846 16.9284 12.9708C16.9755 12.857 16.9998 12.735 16.9998 12.6119C16.9998 12.4887 16.9755 12.3668 16.9284 12.253C16.8812 12.1392 16.8121 12.0358 16.725 11.9488ZM5.125 15.1875C5.125 14.9389 5.02623 14.7004 4.85041 14.5246C4.6746 14.3488 4.43614 14.25 4.1875 14.25C3.93886 14.25 3.7004 14.3488 3.52459 14.5246C3.34877 14.7004 3.25 14.9389 3.25 15.1875V19.25C3.25 19.913 3.51339 20.5489 3.98223 21.0178C4.45107 21.4866 5.08696 21.75 5.75 21.75H18.25C18.913 21.75 19.5489 21.4866 20.0178 21.0178C20.4866 20.5489 20.75 19.913 20.75 19.25V15.1875C20.75 14.9389 20.6512 14.7004 20.4754 14.5246C20.2996 14.3488 20.0611 14.25 19.8125 14.25C19.5639 14.25 19.3254 14.3488 19.1496 14.5246C18.9738 14.7004 18.875 14.9389 18.875 15.1875V19.25C18.875 19.4158 18.8092 19.5747 18.6919 19.6919C18.5747 19.8092 18.4158 19.875 18.25 19.875H5.75C5.58424 19.875 5.42527 19.8092 5.30806 19.6919C5.19085 19.5747 5.125 19.4158 5.125 19.25V15.1875Z"
                    fill="#381A44"
                    fill-opacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex  justify-end pt-1 border-t-0">
          <button
            type="button"
            className="
            text-violet-1
            hover:violet-1 font-bold border-none border-transparent-grey hover:bg-transparent focus:outline-none   rounded-lg text-sm 
            flex items-center justify-center px-[10px] py-[10px]
            
            "
            onClick={() => setOpenModal(false)}
          >
            Annuler
          </button>

          <button
            onClick={() => setOpenModal(false)}
            type="button"
            className="uppercase px-[10px] py-[10px] text-sm font-bold text-center inline-flex items-center text-white gap-3 bg-violet-1 rounded-lg hover:bg-violet-1 focus:ring-0 focus:outline-none focus:ring-blue-300 "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_192_2829)">
                <path
                  d="M12.75 6.75146C14.3812 6.76046 15.2648 6.83321 15.8408 7.40921C16.5 8.06846 16.5 9.12896 16.5 11.25V12C16.5 14.1217 16.5 15.1822 15.8408 15.8415C15.1823 16.5 14.121 16.5 12 16.5H6C3.879 16.5 2.81775 16.5 2.15925 15.8415C1.5 15.1815 1.5 14.1217 1.5 12V11.25C1.5 9.12896 1.5 8.06846 2.15925 7.40921C2.73525 6.83321 3.61875 6.76046 5.25 6.75146"
                  stroke="white"
                  stroke-width="1.125"
                  stroke-linecap="round"
                />
                <path
                  d="M9 11.25V1.5M9 1.5L11.25 4.125M9 1.5L6.75 4.125"
                  stroke="white"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_192_2829">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Importer
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        dismissible
        show={openCreateClient}
        onClose={() => setCreateClient(false)}
        className="glass-container"
        size={"3xl"}
      >
        <Modal.Header>
          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="43"
              height="43"
              rx="21.5"
              fill="#381A44"
              fill-opacity="0.1"
            />
            <path
              d="M24.625 23.875C21.4544 23.875 15.125 25.4544 15.125 28.625V31H34.125V28.625C34.125 25.4544 27.7956 23.875 24.625 23.875ZM13.9375 19.125V15.5625H11.5625V19.125H8V21.5H11.5625V25.0625H13.9375V21.5H17.5V19.125M24.625 21.5C25.8848 21.5 27.093 20.9996 27.9838 20.1088C28.8746 19.218 29.375 18.0098 29.375 16.75C29.375 15.4902 28.8746 14.282 27.9838 13.3912C27.093 12.5004 25.8848 12 24.625 12C23.3652 12 22.157 12.5004 21.2662 13.3912C20.3754 14.282 19.875 15.4902 19.875 16.75C19.875 18.0098 20.3754 19.218 21.2662 20.1088C22.157 20.9996 23.3652 21.5 24.625 21.5Z"
              fill="#381A44"
            />
          </svg>
        </Modal.Header>
        <Modal.Body>
          <h4 className="font-bold text-2xl">Nouveau client</h4>
          <span className="text-xs font-normal text-neutre">
            Ajouter un nouveau client
          </span>

          <div className="mt-3">
            <Stepper />
          </div>
        </Modal.Body>
        <Modal.Footer className="flex  justify-end pt-1 border-t-0"></Modal.Footer>
      </Modal>
    </>
  );
}
