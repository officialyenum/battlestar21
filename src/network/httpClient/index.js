import axios from "axios";

const ROOT_URL = "https://battlestar21-api.vercel.app/api/";

const headers = {};

const httpClient = axios.create({
  baseURL: ROOT_URL,
  headers,
});

export { httpClient };
