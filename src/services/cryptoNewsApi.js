import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = { 
   'x-bingapis-sdk': 'true', 
   'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY, 
   'x-rapidapi-host': process.env.REACT_APP_BING_HOST 
      
};


const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BING_URL }),
  endpoints: (builder) => ({
      getCryptosNews: builder.query({
          query: ({newsCategory, count}) => createRequest( `/news/search?q=${newsCategory}&safeSearch=Off&&textFormat=Raw&freshness=Day&count=${count}`), 
      })
  })
});

export const {
    useGetCryptosNewsQuery
} = cryptoNewsApi
