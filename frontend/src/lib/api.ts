import axios from "axios";

export const root = axios.create({
  baseURL: process.env.API_ROOT || `http://localhost:${process.env.PORT || 3001}`,
});

export default root;
