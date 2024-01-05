import { useFieldArray, useForm } from "react-hook-form";
import { CreateSupplierDto } from "../../interfaces/supplier";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FloatingLabelCustom from "../components/FloatingLabelCustom";
import ErrorMessage from "../components/ErrorMessage";
import { Button } from "flowbite-react";
import { postSupplier } from "../../services/supplier.service";
import { enqueueSnackbar } from "notistack";
import { LIST_VARIABLES } from "../../functions";
import SelectCustom from "../components/SelectCustom";

type FormValue = CreateSupplierDto;

type PropsFormAddSupplier = {
  close?: () => void;
};
export default function FormAddSupplier({ close }: PropsFormAddSupplier) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    location: Yup.string().required(),
    website: Yup.string().required(),
    billing_address: Yup.string().required(),
    type: Yup.string().required(),
    area_covered: Yup.string().required(),
    remark: Yup.string().required(),
    contacts: Yup.array()
      .of(
        Yup.object().shape({
          phone: Yup.string().required(),
          email: Yup.string().email().required(),
          role: Yup.string().required(),
        })
      )
      .required(),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver<FormValue>(validationSchema),
    mode: "onSubmit",
    defaultValues: {
      contacts: [
        {
          email: "",
          phone: "",
          role: "",
        },
      ],
    },
  });

  const onSubmit = async (body: FormValue) => {
    try {
      await postSupplier(body);
      enqueueSnackbar("Enregister avec succès", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("Une erreur a été rencontrée", {
        variant: "error",
      });
    }
  };

  const { fields, append, remove } = useFieldArray<FormValue>({
    control,
    name: "contacts",
  });

  console.log("errors", errors);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4 mt-4">
        <div>
          <FloatingLabelCustom<FormValue>
            label="Name"
            register={register}
            name="name"
          />

          <ErrorMessage
            message={errors.name?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Location"
            register={register}
            name="location"
          />

          <ErrorMessage
            message={errors.location?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Website"
            register={register}
            name="website"
          />

          <ErrorMessage
            message={errors.website?.message}
            className="text-10 text-red-500"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-4 ">
        <div>
          <FloatingLabelCustom<FormValue>
            label="Billing address"
            register={register}
            name="billing_address"
          />

          <ErrorMessage
            message={errors.billing_address?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Type"
            register={register}
            name="type"
          />

          <ErrorMessage
            message={errors.type?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Area covered"
            register={register}
            name="area_covered"
          />

          <ErrorMessage
            message={errors.area_covered?.message}
            className="text-10 text-red-500"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-4 ">
        <div>
          <FloatingLabelCustom<FormValue>
            label="Remark"
            register={register}
            name="remark"
          />

          <ErrorMessage
            message={errors.remark?.message}
            className="text-10 text-red-500"
          />
        </div>
      </div>

      {fields.map((field, index) => {
        return (
          <div className="flex gap-4 mt-4 items-center" key={field.id}>
            <div>
              <FloatingLabelCustom<FormValue>
                label="Email"
                register={register}
                name={`contacts.${index}.email` as const}
              />

              <ErrorMessage
                message={
                  errors.contacts?.[index]
                    ? errors.contacts[index]?.email?.message
                    : undefined
                }
                className="text-10 text-red-500"
              />
            </div>

            <div>
              <FloatingLabelCustom<FormValue>
                label="Phone"
                register={register}
                name={`contacts.${index}.phone` as const}
              />

              <ErrorMessage
                message={
                  errors.contacts?.[index]
                    ? errors.contacts[index]?.phone?.message
                    : undefined
                }
                className="text-10 text-red-500"
              />
            </div>

            <div>
              <SelectCustom<FormValue>
                register={register}
                name={`contacts.${index}.role` as const}
                values={LIST_VARIABLES.SUPPLIER_ROLE}
              />
              {/* <FloatingLabelCustom<FormValue>
                label="Role"
                register={register}
                name={`contacts.${index}.role` as const}
              /> */}

              <ErrorMessage
                message={
                  errors.contacts?.[index]
                    ? errors.contacts[index]?.role?.message
                    : undefined
                }
                className="text-10 text-red-500"
              />
            </div>

            <div>
              {index === 0 && (
                <button
                  className="btn btn-square bg-transparent hover:bg-transparent btn-sm"
                  type="button"
                  onClick={() =>
                    append({
                      email: "",
                      phone: "",
                      role: "",
                    })
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                    />
                  </svg>
                </button>
              )}

              {index !== 0 && (
                <button
                  className="btn btn-square bg-transparent hover:bg-transparent btn-sm"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="M19 12.998H5v-2h14z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        );
      })}
      <div className="flex gap-4 mt-4">
        <Button className="contained-button" type="submit">
          Confirmer
        </Button>
        <Button
          color="gray"
          onClick={() => {
            if (close) close();
          }}
        >
          Annuler
        </Button>
      </div>
    </form>
  );
}
