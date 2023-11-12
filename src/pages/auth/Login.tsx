import { useNavigate } from "react-router-dom";
import DefaultInput from "../../components/input/DefaultInput";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex justify-center items-center bg-gray-100 h-full min-h-screen">
        <div className="container mx-auto ">
          <div className="flex flex-col h-auto  justify-center bg-white rounded-lg p-5 w-full ">
            <div>
              <h1 className="text-base text-[#9F1972] font-bold tracking-normal leading-5">
                Pereepl.
              </h1>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-1 flex-row justify-center items-center relative">
                <form className="">
                  <p className="mb-0 mr-4 text-2xl font-bold text-[#381A44]">
                    Bienvenue à vous
                  </p>
                  <span className="text-sm text-[#00000080] font-normal">
                    Je vous souhaite la bienvenue sur notre plateforme
                  </span>

                  <div className="mt-4">
                    <DefaultInput label="Email" type="text" />
                    {/* <div className="relative">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#381A44] focus:outline-none focus:ring-0 focus:border-[#381A44] peer"
                        placeholder=""
                      />
                      <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#381A44] peer-focus:dark:text-[#381A44] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Email
                      </label>
                    </div> */}
                  </div>

                  <div className="mt-4">
                    <DefaultInput label="Mots de passe" type="password" />

                    {/* <div className="relative">
                      <input
                        type="password"
                        id="floating_outlined"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#381A44] focus:outline-none focus:ring-0 focus:border-[#381A44] peer"
                        placeholder=""
                      />
                      <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#381A44] peer-focus:dark:text-[#381A44] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Mots de passe
                      </label>
                    </div> */}
                  </div>

                  <div className="mt-4 text-right">
                    <p className="text-[#00000080] text-xs">Oublié?</p>
                  </div>

                  <div className="mt-4">
                    <button className="text-sm text-white bg-[#381A44] font-bold p-4 rounded-lg w-full">
                      SE CONNECTER
                    </button>
                    {/* <button className="p-4 w-full text-sm font-bold text-purple-950">
                      CREER UN COMPTE
                    </button> */}
                  </div>

                  <div className="mt-4">
                    <p
                      className="uppercase text-[#381A44] font-weight-700 text-xs cursor-pointer"
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      <span className="text-[#381A4480]">Pas de compte ?</span>{" "}
                      commencez votre essai gratuit
                    </p>
                  </div>
                </form>

                <div className="absolute left-0 bottom-0">
                  <div>
                    <img src="/photos/trip.png" alt="Sample image" />
                  </div>
                </div>
              </div>
              <div className="flex relative">
                <img
                  src="/photos/placeLogin.png"
                  className="w-full"
                  alt="Sample image"
                />

                <div className="absolute h-full w-full flex justify-center items-center">
                  <div>
                    <img src="/photos/iconHLFC.png" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
