import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/category/get-all-categories`,
          method: "GET",
          params: arg,
        };
      },
      providesTags: ["category"],
    }),
    createCategory: builder.mutation({
      query: (data) => {
        return {
          url: `/category/create-category`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["category"],
    }),
  }),
});

export const { useGetAllCategoryQuery, useCreateCategoryMutation } =
  categoryApi;
