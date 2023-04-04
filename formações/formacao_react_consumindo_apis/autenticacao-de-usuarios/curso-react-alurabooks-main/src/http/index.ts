import axios, { AxiosError } from "axios";
import { useObterToken } from "../hooks/useSessions";
import { history } from "../App";

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
});

http.interceptors.request.use(function (config) {
  const token = useObterToken();
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`
  return config;
}, function (error: AxiosError) {
  console.log(error);
  return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
  return response;
}, function (error: AxiosError) {
  if (error.response?.status === 401) {
    history.push('/');
    return Promise.reject();
  }
  return Promise.reject(error);
});


export default http;
