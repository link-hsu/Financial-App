import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"]
    }),
    // getKpis2: build.query({
    //   query: () => "kpi/kpis2/",
    //   providesTags: ["Kpis"]
    // }),
  })
});

export const { useGetKpisQuery } = api;