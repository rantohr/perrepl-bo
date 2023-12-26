import { useNavigate } from "react-router-dom";
import DefaultInput from "../../components/input/DefaultInput";
import { useState } from "react";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../index.css";
import axios from "../../api/axios";
import { IAuth } from "../../interfaces/iauth.interface";
import { CgLaptop } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";
// import { FloatingLabel } from "flowbite-react";

type FormValue = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const { setAuth, setPersist } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    // control,
    formState: { errors },
    // setValue,
    // clearErrors,
    getValues,
    // reset,
  } = useForm<FormValue>({
    resolver: yupResolver<FormValue>(validationSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "admin@pereepl.mg",
      password: "password",
    },
  });

  console.log("errors", { errors, getValues: getValues() });

  const onSubmit = async (body: FormValue) => {
    try {
      const { data } = await axios.post<IAuth>("/v1/auth/token/", body);
      if (setAuth && setPersist) {
        setAuth(data);
        setPersist(data);
        localStorage.setItem("persist", JSON.stringify(data));
        localStorage.setItem("token", data.access);
        navigate("/");
      }
    } catch (error) {
      alert("Alert");
    }
  };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="mb-0 mr-4 text-2xl font-bold text-[#381A44]">
                    Bienvenue à vous
                  </p>
                  <span className="text-sm text-[#00000080] font-normal">
                    Je vous souhaite la bienvenue sur notre plateforme
                  </span>

                  <div className="mt-4 relative">
                    <input
                      type="email"
                      className="inputFloating"
                      id="email"
                      {...register("email")}
                    />
                    <label htmlFor="email" className="labelFloating">
                      Email
                    </label>
                  </div>

                  <div className="mt-4 relative">
                    <input
                      type="password"
                      className="inputFloating"
                      id="password"
                      {...register("password")}
                    />
                    <label htmlFor="password" className="labelFloating">
                      Mots de passe
                    </label>
                  </div>

                  <div className="mt-4 text-right">
                    <p className="text-[#00000080] text-xs">Oublié?</p>
                  </div>

                  <div className="mt-4">
                    <button
                      className="text-sm text-white bg-[#381A44] font-bold p-4 rounded-lg w-full"
                      type="submit"
                    >
                      SE CONNECTER
                    </button>
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
