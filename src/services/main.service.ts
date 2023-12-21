import axios, { AxiosResponse, CancelTokenSource } from "axios";

const API_HREF = "https://backend.pereepl.mg/"; // TODO: set global variable
// const API_HREF = `http://localhost:${
//   import.meta.env.BACKEND_PORT || 8000
// }/api/`;
let cancelToken: CancelTokenSource | null = null;
export const getAll = (
  endpoint: string,
  limit?: number,
  offset?: number,
  filter?: any
): Promise<AxiosResponse<{ count: number; results: any[] }>> => {
  let params = {
    limit: limit || 10,
    offset: offset || 0
  };
  if (filter) {
    params = { ...filter };
  }
  return axios.get(`${API_HREF}${endpoint}/`, {
    params,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getById = (
  endpoint: string,
  id: string | undefined
): Promise<AxiosResponse<any>> => {
  return axios.get(`${API_HREF}${endpoint}/${id}/`, {
    params: {},
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const post = (endpoint: string, data: any): Promise<AxiosResponse<any>> => {
  if (cancelToken) {
    cancelToken.cancel("Operation canceled due to new request.");
  }
  cancelToken = axios.CancelToken.source();
  return axios.post(`${API_HREF}${endpoint}/`, data, {
    cancelToken: cancelToken.token,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const patch = (
  endpoint: string,
  id: number | undefined,
  data: any
): Promise<AxiosResponse<any>> => {
  if (cancelToken) {
    cancelToken.cancel("Operation canceled due to new request.");
  }
  cancelToken = axios.CancelToken.source();
  return axios.patch(`${API_HREF}${endpoint}/${id}/`, data, {
    cancelToken: cancelToken.token,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const put = (endpoint: string, data: any): Promise<AxiosResponse<any>> => {
  if (cancelToken) {
    cancelToken.cancel("Operation canceled due to new request.");
  }
  cancelToken = axios.CancelToken.source();
  return axios.put(`${API_HREF}${endpoint}/${data.id}/`, data, {
    cancelToken: cancelToken.token,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const remove = (
  endpoint: string,
  id: number | undefined
): Promise<AxiosResponse<any>> => {
  return axios.delete(`${API_HREF}${endpoint}/${id}/`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
