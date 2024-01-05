import axios from "../api/axios";
import { IBackendResponse } from "../interfaces/ibackendResponse.interface";
import { CreateSupplierDto, ISupplier } from "../interfaces/supplier";
const API_HREF = import.meta.env.VITE_URL_BACKEND + "api";

export const postSupplier = (body: CreateSupplierDto) => {
  return axios.post<IBackendResponse<ISupplier>>(
    `${API_HREF}/v2/supplier/`,
    body,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
