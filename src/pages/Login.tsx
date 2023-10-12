export default function Login() {
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
              <div className="flex flex-1 flex-row justify-center items-center ">
                <form className="w-1/2">
                  <p className="mb-0 mr-4 text-2xl font-bold text-[#381A44]">
                    Bienvenue à vous
                  </p>
                  <span className="text-sm text-[#00000080] font-normal">
                    Je vous souhaite la bienvenue sur notre plateforme
                  </span>

                  <div className="mt-5">
                    <div className="relative">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Floating outlined
                      </label>
                    </div>
                  </div>

                  <div className="mt-5">
                    <input
                      className="w-full border p-3 pl-5 rounded-lg focus:outline-none text-gray-500"
                      id="password"
                      type="text"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mt-5">
                    <input
                      className="w-full border p-3 pl-5 rounded-lg focus:outline-none text-gray-500"
                      id="password"
                      type="password"
                      placeholder="Mot de passe"
                    />
                  </div>

                  <div className="mt-5">
                    <button className="text-sm text-white bg-[#381A44] font-bold p-4 rounded-lg w-full">
                      SE CONNECTER
                    </button>
                    <button className="p-4 w-full text-sm font-bold text-purple-950">
                      CREER UN COMPTE
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex relative">
                <img
                  src="/photos/placeLogin.png"
                  className="w-full"
                  alt="Sample image"
                />

                <div className="absolute h-full w-full flex justify-center items-center">
                  <div>
                    <img
                      src="/photos/iconHLFC.png"
                      // className="w-full"
                      alt="Sample image"
                    />
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
