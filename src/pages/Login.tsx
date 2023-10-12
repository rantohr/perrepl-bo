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
              <div className="flex flex-row ">
                <img
                  src="/photos/placeLogin.png"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
