import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });

    if (setAuth) {
      setAuth((prev) => {
        if (prev) return { ...prev, accessToken: response.data.accessToken };
        else return null;
      });
    }

    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
