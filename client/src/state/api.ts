import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337' }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    // first genetic is the response we want
    getKpis: build.query<Array<GetKpisResponse>, void>({
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


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
//   reducerPath: "main",
//   tagTypes: ["Kpis", "Products", "Transactions"],
//   endpoints: (build) => ({
//     getKpis: build.query<void, void>({
//       query: () => "kpi/kpis/",
//       providesTags: ["Kpis"],
//     }),
//     // getProducts: build.query<Array<GetProductsResponse>, void>({
//     //   query: () => "product/products/",
//     //   providesTags: ["Products"],
//     // }),
//     // getTransactions: build.query<Array<GetTransactionsResponse>, void>({
//     //   query: () => "transaction/transactions/",
//     //   providesTags: ["Transactions"],
//     // }),
//   }),
// });




// export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
//   api;