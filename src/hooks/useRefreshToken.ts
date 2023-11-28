import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth, persist } = useAuth();

  const refresh = async () => {
    const response = await axios.post(
      "/v1/token/refresh/",
      {
        // withCredentials: true,
        refresh: persist?.refresh,
      },
      {
        withCredentials: true,
      }
    );

    if (setAuth) {
      setAuth((prev) => {
        if (prev) return { ...prev, access: response.data.access };
        else return null;
      });
    }

    return response.data.access;
  };
  return refresh;
};

export default useRefreshToken;
