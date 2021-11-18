import axios from "axios";

export const root = axios.create({
  baseURL: process.env.api_root || 'http://localhost:3001',
});

export default root;
