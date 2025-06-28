

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import postsReducer from "./features/posts/postsSlice.jsx";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    posts: postsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
