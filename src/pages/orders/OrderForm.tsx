import { FC, useEffect, useState } from "react";
import { useOrderStore } from "../../stores/order.store";
import { IOrder } from "../../interfaces/iorder.interface";
import { IForm } from "../../interfaces/genricModule/iform.interface";
import GenericForm from "../../components/generciForm/GenericForm";
import { format } from "date-fns";

const OrderForm: FC<{
  onConfirm: (data: IOrder) => void;
  onCancel: () => void;
}> = ({ onConfirm, onCancel }) => {
  /** STORE */
  const selectedItem = useOrderStore((state) => state.selectedOrder);

  /** LOCAL STATE */
  const [formData, setFormData] = useState<IForm | null>(null);

  useEffect(() => {
    if (selectedItem) {
      const cleanData = {
        ...selectedItem,
        travelers: selectedItem.travelers?.length
          ? selectedItem.travelers
          : [{} as any],
      };

      setFormData({
        initialData: cleanData,
        fields: [
          {
            field: "travelers_0_first_name",
            label: "Prénom(s)",
            required: true,
            size: 1,
          },
          {
            field: "travelers_0_last_name",
            label: "Nom",
            required: true,
            size: 2,
          },
          {
            field: "travelers_0_email",
            label: "Email",
            required: true,
            size: 2,
          },
          {
            field: "travelers_0_phone_number",
            label: "Téléphone",
            required: true,
            size: 1,
          },
          {
            field: "arrival_datetime",
            label: "Date d'arrivée",
            required: true,
            size: 1,
            type: "date",
            onChange: onChangeArrival,
          },
          {
            field: "departure_datetime",
            label: "Date de départ",
            required: true,
            size: 1,
            type: "date",
            onChange: onChangeDeparture,
          },
          {
            field: "trip_duration",
            label: "Nombre de jour",
            required: true,
            size: 1,
            type: "number",
            onChange: onChangeDuration,
            // "": "",
          },
          { field: "description", label: "Style de voyage" },
          { field: "client_type", label: "Type client" },
          { field: "trip_reason", label: "Raison du voyage" },
          { field: "trip_interest", label: "Intérêts de voyage" },
          {
            field: "custom_trip_reason",
            label: "Autre raison",
            defaultValue: "Funerary",
          },
          { field: "room_type", label: "Type de chambre" },
        ],
        dividers: [
          { title: "Client", index: 0 },
          { title: "Détail du voyage", index: 4 },
        ],
        onCancel,
        onConfirm: beforeConfirm,
      });
    }
  }, [selectedItem]);

  /** FORM MANIPULATON */
  const onChangeArrival = (data: any, value: any) => {
    const data_c = { ...data };
    data_c.arrival_datetime = value;
    data_c.departure_datetime = value;
    data_c.trip_duration = 1;
    return data_c;
  };

  const onChangeDeparture = (data: any, value: any) => {
    const data_c = { ...data };
    data_c.departure_datetime = value;
    const date1 = new Date(data_c.arrival_datetime);
    const date2 = new Date(data_c.departure_datetime);
    const diffTime = Math.abs((date2 as any) - (date1 as any));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    data_c.trip_duration = diffDays;
    return data_c;
  };

  const onChangeDuration = (data: any, value: any) => {
    const data_c = { ...data };
    data_c.trip_duration = value;
    const date = new Date(data_c.arrival_datetime);
    date.setDate(date.getDate() + +value);
    data_c.departure_datetime = format(date, "yyyy-MM-dd");
    return data_c;
  };

  const beforeConfirm = (data: any) => {
    const data_c = { ...data };
    if (!data_c.travelers) data_c.travelers = [];
    if (!data_c.travelers[0]) data_c.travelers = [{}];

    /** Transform travelers into array */
    Object.keys(data_c).forEach((key) => {
      if (key.startsWith("travelers_")) {
        const propertyName = key.replace(`travelers_0_`, "");
        data_c.travelers[0][propertyName] = data_c[key];
        delete data_c[key];
      }
    });

    if (onConfirm !== undefined) {
      data_c.pax_type = "ADT:1,CNN:0,INF:0";
      data_c.arrival_datetime = format(
        new Date(data_c.arrival_datetime),
        "yyyy-MM-dd'T'HH:mm:ss"
      );

      data_c.departure_datetime = format(
        new Date(data_c.departure_datetime),
        "yyyy-MM-dd'T'HH:mm:ss"
      );
      onConfirm(data_c);
    }
  };

  if (!formData) return <></>;

  return (
    <>
      <GenericForm formData={formData} />
    </>
  );
};

export default OrderForm;
