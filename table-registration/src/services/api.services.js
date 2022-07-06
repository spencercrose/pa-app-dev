/*!
 * API services (Vue)
 * File: api.services.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://premiersawards.gww.gov.bc.ca/eventregistration/api"
      : "http://localhost:3001/tables",
  headers: {
    "Content-Type": "application/json",
    dataType: "json",
  },
  withCredentials: true,
});
export default api;
