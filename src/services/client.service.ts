import { axiosPrivate } from "../api/axios";
import { ITraveler } from "../interfaces/itraveler.interface";

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
