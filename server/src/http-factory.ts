import axios, { AxiosRequestConfig } from "axios";
// the only file that needs to know about axios is this one.
const httpClientInit = (baseURL: string) => {
  const service = axios.create({
    baseURL
    // here we could set the custom headers, timeout, etc..
  });
  const baseMethod = (forceOptions: AxiosRequestConfig) => (options: AxiosRequestConfig) => {
    const opts = { ...options, ...forceOptions };
    return service.request({
      ...opts
    });
  };

  const get = baseMethod({ method: "get" });
  const post = baseMethod({ method: "post" });

  return {
    get,
    post
  };
};

// here we could validate some env vars and depend on that use diferent base urls
// or create more clients if we need to comunicate with more than one API
export const httpClient = httpClientInit(
  "https://mauvelous-leopard-5257.twil.io"
);
