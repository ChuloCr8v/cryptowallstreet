import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "eb6d684b20mshd3b4025d7c50329p141521jsn8cb44c488bff",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
      getCryptos: builder.query({
          query: (count) => createRequest( `/coins?limit=${count}`)
      }), 
      getCryptoDetails: builder.query({
          query: (coinId) => createRequest( `/coin/${coinId}`)
      }), 
      getCryptoHistory: builder.query({
          query: ({coinId, timeperiod}) => createRequest( `/coin/${coinId}/history/${timeperiod}`)
      })
  })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery 
} = cryptoApi