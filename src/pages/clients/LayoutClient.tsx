import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BadgeCustom from "../components/BadgeCustom";
import { useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { GrAddCircle } from "react-icons/gr";

export default function LayoutClient() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const last = paths[paths.length - 1];
  const [openModal, setOpenModal] = useState(false);

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
      >
        <Modal.Body>
          <div className="form-modal">
            <Modal.Header className="form-modal-header">
              <GrAddCircle />
              <h3>Nouvelle demande</h3>
              <p>Ajouter une nouvelle demande</p>
            </Modal.Header>
            <Modal.Body>
              <div className="form-modal-body">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                  </div>
                  <TextInput
                    id="email1"
                    placeholder="name@flowbite.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="form-modal-footer">
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Annuler
                </Button>
                <Button
                  onClick={() => setOpenModal(false)}
                  className="contained-button"
                >
                  Passer la demande
                </Button>
              </div>
            </Modal.Body>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
