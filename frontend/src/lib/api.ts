import axios from "axios";

export const root = axios.create({
  baseURL: process.env.api_root || `http://localhost:${process.env.PORT || 3001}`,
});

export default root;
