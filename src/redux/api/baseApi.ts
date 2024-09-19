import axiosBaseQuery from "@/helper/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:4040/api/v1" }),
  tagTypes: ["pet"],
  endpoints: () => ({}),
});
