import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
// import { ITraveler } from "../../interfaces/itraveler.interface";

import FloatingLabelCustom from "../components/FloatingLabelCustom";
import ErrorMessage from "../components/ErrorMessage";
import { LIST_VARIABLES } from "../../functions";
import SelectCustom from "../components/SelectCustom";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { differenceInDays, format } from "date-fns";
import { CreateOrderDto } from "../../dto/create.order.dto";
import { IPaxType } from "../../interfaces/ipaxType.interface";
import { enqueueSnackbar } from "notistack";

// type CreateTraveler = Omit<ITraveler, "id" | "created_at">;

type FormValue = {
  departure_datetime: string;
  arrival_datetime: string;
  trip_duration: number;
  client_type: string;
  room_type: string;
  //   pax_type: string; // GENERATION HAFA MINTSY
  trip_interest: string;
  trip_reason: string;
  custom_trip_reason: string;
  description: string;
  adt: number;
  cnn: number;
  inf: number;
  // travelers: CreateTraveler[];

  email: string;
  first_name: string;
  last_name: string;
  gender: string;
  phone_number: string;
  traveler_type: string;
};

// type FormValue = {

//   description: string;

// };

type PropsOrderFormV2 = {
  onConfirm: (data: CreateOrderDto) => void;
};

export default function OrderFormV2({ onConfirm }: PropsOrderFormV2) {
  const validationSchema = Yup.object().shape({
    departure_datetime: Yup.string().required(),
    arrival_datetime: Yup.string().required(),
    trip_duration: Yup.number().required(),
    client_type: Yup.string().required(),
    room_type: Yup.string().required(),
    trip_interest: Yup.string().required(),
    trip_reason: Yup.string().required(),
    custom_trip_reason: Yup.string().required(),
    description: Yup.string().required(),

    adt: Yup.number().required(),
    cnn: Yup.number().required(),
    inf: Yup.number().required(),

    // travelers: Yup.array().of(
    //   Yup.object().shape({
    //     email: Yup.string().email().required(),
    //     first_name: Yup.string().required(),
    //     last_name: Yup.string().required(),
    //     gender: Yup.string().required(),
    //     phone_number: Yup.string().required(),
    //     traveler_type: Yup.string().required(),
    //   })
    // ),

    email: Yup.string().email().required(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    gender: Yup.string().required(),
    phone_number: Yup.string().required(),
    traveler_type: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver<FormValue>(validationSchema),
    mode: "onSubmit",
    defaultValues: {
      adt: 1,
      cnn: 0,
      inf: 0,
      traveler_type: "ADT",
    },
  });

  const departure_datetime = watch("departure_datetime");
  const arrival_datetime = watch("arrival_datetime");

  const onSubmit = async (body: FormValue) => {
    const datas: CreateOrderDto = {
      arrival_datetime: format(
        new Date(body.arrival_datetime),
        "yyyy-MM-dd'T'HH:mm:ss"
      ),
      client_type: body.client_type,
      custom_trip_reason: body.custom_trip_reason,
      departure_datetime: format(
        new Date(body.departure_datetime),
        "yyyy-MM-dd'T'HH:mm:ss"
      ),
      description: body.description,
      pax_type: `ADT:${body.adt},CNN:${body.cnn},INF:${body.inf}`,
      room_type: body.room_type,
      trip_duration: body.trip_duration,
      trip_interest: body.trip_interest,
      trip_reason: body.trip_reason,
      travelers: [
        {
          email: body.email,
          first_name: body.first_name,
          gender: body.gender,
          last_name: body.last_name,
          lead_traveler: true,
          phone_number: body.phone_number,
          traveler_type: body.traveler_type as IPaxType,
        },
      ],
    };

    // enqueueSnackbar("Enregister avec succès", {
    //   variant: "success",
    // });

    onConfirm(datas);
  };

  useEffect(() => {
    if (departure_datetime && arrival_datetime) {
      setValue(
        "trip_duration",
        differenceInDays(
          new Date(arrival_datetime),
          new Date(departure_datetime)
        )
      );
    } else setValue("trip_duration", 0);
  }, [departure_datetime, arrival_datetime, setValue]);

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex gap-4">
        <div>
          <FloatingLabelCustom<FormValue>
            label="Prènoms"
            register={register}
            name="first_name"
          />

          <ErrorMessage
            message={errors.first_name?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Nom"
            register={register}
            name="last_name"
          />

          <ErrorMessage
            message={errors.last_name?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Email"
            type="email"
            register={register}
            name="email"
          />

          <ErrorMessage
            message={errors.email?.message}
            className="text-10 text-red-500"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <FloatingLabelCustom<FormValue>
            label="Téléphone"
            register={register}
            name="phone_number"
          />

          <ErrorMessage
            message={errors.phone_number?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          {/* <FloatingLabelCustom<FormValue>
            label="Genre"
            register={register}
            name="gender"
          /> */}
          <SelectCustom<FormValue>
            register={register}
            name="gender"
            values={LIST_VARIABLES.GENDER}
          />

          <ErrorMessage
            message={errors.gender?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Type de voyageur"
            register={register}
            name="traveler_type"
            readonly={true}
          />

          <ErrorMessage
            message={errors.traveler_type?.message}
            className="text-10 text-red-500"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <FloatingLabelCustom<FormValue>
            label="Adulte(s)"
            type="number"
            register={register}
            name="adt"
          />
          <ErrorMessage
            message={errors.adt?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Enfant(s)"
            type="number"
            register={register}
            name="inf"
          />
          <ErrorMessage
            message={errors.inf?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Bébé(s)"
            type="number"
            register={register}
            name="cnn"
          />
          <ErrorMessage
            message={errors.cnn?.message}
            className="text-10 text-red-500"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <FloatingLabelCustom<FormValue>
            label="Date de départ"
            register={register}
            name="departure_datetime"
            type="date"
          />

          <ErrorMessage
            message={errors.departure_datetime?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Date d'arriver"
            register={register}
            type="date"
            name="arrival_datetime"
          />

          <ErrorMessage
            message={errors.arrival_datetime?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Nombre de jour(s)"
            register={register}
            type="number"
            name="trip_duration"
            readonly={true}
          />

          <ErrorMessage
            message={errors.trip_duration?.message}
            className="text-10 text-red-500"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <SelectCustom<FormValue>
            register={register}
            name="client_type"
            values={LIST_VARIABLES.CLIENT_TYPE}
          />

          <ErrorMessage
            message={errors.client_type?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <SelectCustom<FormValue>
            register={register}
            name="room_type"
            values={LIST_VARIABLES.ROOM_TYPE}
          />

          <ErrorMessage
            message={errors.room_type?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <SelectCustom<FormValue>
            register={register}
            name="trip_interest"
            values={LIST_VARIABLES.TRIP_INTEREST}
          />

          <ErrorMessage
            message={errors.trip_interest?.message}
            className="text-10 text-red-500"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <SelectCustom<FormValue>
            register={register}
            name="trip_reason"
            values={LIST_VARIABLES.TRIP_REASON}
          />

          <ErrorMessage
            message={errors.trip_reason?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <SelectCustom<FormValue>
            register={register}
            name="custom_trip_reason"
            values={LIST_VARIABLES.TRIP_REASON}
          />

          <ErrorMessage
            message={errors.custom_trip_reason?.message}
            className="text-10 text-red-500"
          />
        </div>

        <div>
          <FloatingLabelCustom<FormValue>
            label="Description"
            register={register}
            name="description"
          />

          <ErrorMessage
            message={errors.description?.message}
            className="text-10 text-red-500"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button color="gray">Annuler</Button>
        <Button className="contained-button" type="submit">
          Confirmer
        </Button>
      </div>
    </form>
  );
}
