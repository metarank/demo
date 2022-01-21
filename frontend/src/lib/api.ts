import axios from "axios";

export const root = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT || `http://localhost:${process.env.REACT_APP_API_ROOT || 3001}`,
});

export default root;
