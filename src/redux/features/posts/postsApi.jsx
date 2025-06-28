import { apiSlice } from "../../api/apiSlice";

const postsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
