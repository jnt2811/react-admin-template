import axios from "axios";
import { constants } from "../data";

export const fetch = axios.create({
  baseURL: constants.baseURL,
});
