import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DogsResult } from "../../types";

export const dogApi = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/" }),
  endpoints: (builder) => ({
    getCorgiPembroke: builder.query<DogsResult, null>({
      query: () => `breed/pembroke/images`,
    }),
  }),
});

export const { useGetCorgiPembrokeQuery } = dogApi;
