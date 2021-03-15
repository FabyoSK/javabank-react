import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/javabank4/api",
});
export default api;
