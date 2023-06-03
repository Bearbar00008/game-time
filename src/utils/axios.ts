import axios from "axios";

export const axiosCustomInstance = axios.create({
  baseURL: "https://mobile-staging.gametime.co/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});