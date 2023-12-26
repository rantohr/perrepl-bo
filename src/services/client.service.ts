import { axiosPrivate } from "../api/axios";
import { ITraveler } from "../interfaces/itraveler.interface";
import { IOrderResults } from "../interfaces/results/iorder.interface.result";

export const getClient = async () => {
  const { data } = await axiosPrivate.get<{ results: ITraveler[] }>(
    "/v2/find/client",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data.results;
};

export const getOrder = async () => {
  const { data } = await axiosPrivate.get<{ results: IOrderResults[] }>(
    "/v2/order",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data.results;
};
