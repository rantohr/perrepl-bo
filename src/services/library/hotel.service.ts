import axios, { AxiosResponse, CancelTokenSource } from "axios"
import { IHotel } from "../../interfaces/ihotel.interface";

const API_HREF = "http://localhost:8000/"
// const API_HREF = `http://localhost:${
//   import.meta.env.BACKEND_PORT || 8000
// }/api/`

let cancelToken: CancelTokenSource | null = null

export const getHotels = (
    limit: number,
    offset: number,
    filter?: any 
): Promise<AxiosResponse<{count: number; results: IHotel[]}>> => {
    let handledFilter = {}
    if(filter) {
        handledFilter = {...filter}
    }
    return axios.get(`${API_HREF}hotel/`, {
        params: {
            limit,
            offset,
            ...handledFilter
        },
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    });
}

export const getHotelById = (
    sinister_id: string | undefined
):  Promise<AxiosResponse<IHotel>> => {
    return axios.get(`${API_HREF}hotel/${sinister_id}/`, {
        params: {},
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
        }
    })
}

export const postHotel = (sinister: IHotel): Promise<AxiosResponse<IHotel>> => {
    if (cancelToken) {
        cancelToken.cancel("Operation canceled due to new request.")
    }
    cancelToken = axios.CancelToken.source();
    return axios.post(`${API_HREF}hotel/`, sinister, {
        cancelToken: cancelToken.token,
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

export const patchHotel = (
    sinisterId: number | undefined,
    data: any
): Promise<AxiosResponse<IHotel>> => {
    if (cancelToken) {
        cancelToken.cancel("Operation canceled due to new request.")
    }
    cancelToken = axios.CancelToken.source()
    return axios.patch(`${API_HREF}hotel/${sinisterId}/`, data, {
        cancelToken: cancelToken.token,
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
        }
    })
}

export const putHotel = (sinister: IHotel): Promise<AxiosResponse<IHotel>> => {
    if (cancelToken) {
        cancelToken.cancel("Operation canceled due to new request.");
    }
    cancelToken = axios.CancelToken.source();
    return axios.put(`${API_HREF}hotel/${sinister.id}/`, sinister, {
        cancelToken: cancelToken.token,
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
        }
    })
}

export const deleteHotel = (
    id: number | undefined
): Promise<AxiosResponse<any>> => {
    return axios.delete(`${API_HREF}hotel/${id}/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
        }
    })
}