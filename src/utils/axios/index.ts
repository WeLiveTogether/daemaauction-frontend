import axios, { AxiosError, AxiosRequestConfig } from "axios";
import uri from "../../constance/uri";
import refreshTokenResponse from "../../models/dto/response/refreshTokenResponse";

const instance = axios.create({
  baseURL: "https://daemaauction.herokuapp.com",
  timeout: 500000,
});

export const DEAMA_AUCTION = "https://daemaauction.herokuapp.com";
export const DHRTUSEOAK = "https://dhrtuseoak.herokuapp.com";

const EXPIRE_MINUTE = 30;

const addMinutes = (date: Date, minutes: number) => {
  return date.setMinutes(date.getMinutes() + minutes);
};

const refresh = async (config: AxiosRequestConfig) => {
  if (config.baseURL === DHRTUSEOAK) {
    //token이 필요없기 떄문에 바로 request 함
    return config;
  }

  let accessToken = localStorage.getItem("access_token");
  const expireAt = localStorage.getItem("expire_at");

  if (!expireAt) {
    //만료시간이 없음
    window.location.href = "/login";
    return config;
  }

  const expireDate = new Date(expireAt);

  if (expireDate.getTime() < new Date().getTime()) {
    //토큰이 만료됨
    try {
      const { access_token } = (await axios.get<refreshTokenResponse>(uri.refresh)).data.body;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("expire_at", addMinutes(new Date(), EXPIRE_MINUTE).toString());
      accessToken = access_token;
    } catch (error) {
      //리프레시 실패(리스레시 토큰 만료)
      window.location.href = "/login";
      return config;
    }
  }

  config.headers!["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

instance.interceptors.request.use(refresh, function (error: AxiosError) {
  return Promise.reject(error);
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export const getRequest = (baseURL: typeof DEAMA_AUCTION | typeof DHRTUSEOAK) => {
  instance.defaults["baseURL"] = baseURL;
  return instance;
};
