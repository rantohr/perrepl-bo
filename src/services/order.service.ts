import { AxiosResponse, CancelTokenSource } from "axios";
import { IOrder } from "../interfaces/iorder.interface";
import axios from "../api/axios";

const API_HREF = "http://localhost:8000/api/"; // TODO: set global variable
// const API_HREF = `http://localhost:${
//   import.meta.env.BACKEND_PORT || 8000
// }/api/`;
let cancelToken: CancelTokenSource | null = null;
export const getOrders = (
  limit: number,
  offset: number,
  filter?: any
): Promise<AxiosResponse<{ count: number; results: IOrder[] }>> => {
  let handledFilter = {};
  if (filter) {
    handledFilter = { ...filter };
  }
  return axios.get(`/v2/order/`, {
    params: {
      limit,
      offset,
      ...handledFilter,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getOrderById = (
  sinister_id: string | undefined
): Promise<AxiosResponse<IOrder>> => {
  return axios.get(`${API_HREF}orders/${sinister_id}/`, {
    params: {},
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
};

export const postOrder = (sinister: IOrder): Promise<AxiosResponse<IOrder>> => {
  // if (cancelToken) {
  //   cancelToken.cancel("Operation canceled due to new request.");
  // }
  // cancelToken = axios.CancelToken.source();
  return axios.post(`${API_HREF}v2/order/`, sinister, {
    // cancelToken: cancelToken.token,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const patchOrder = (
  sinisterId: number | undefined,
  data: any
): Promise<AxiosResponse<IOrder>> => {
  if (cancelToken) {
    cancelToken.cancel("Operation canceled due to new request.");
  }
  cancelToken = axios.CancelToken.source();
  return axios.patch(`${API_HREF}orders/${sinisterId}/`, data, {
    cancelToken: cancelToken.token,
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
};

export const putOrder = (sinister: IOrder): Promise<AxiosResponse<IOrder>> => {
  if (cancelToken) {
    cancelToken.cancel("Operation canceled due to new request.");
  }
  cancelToken = axios.CancelToken.source();
  return axios.put(`${API_HREF}orders/${sinister.id}/`, sinister, {
    cancelToken: cancelToken.token,
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
};

export const deleteOrder = (
  id: number | undefined
): Promise<AxiosResponse<any>> => {
  return axios.delete(`${API_HREF}orders/${id}/`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
};
