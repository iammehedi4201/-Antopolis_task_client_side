import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/category`,
          method: "GET",
          params: arg,
        };
      },
    }),
    addPet: builder.mutation({
      query: (data) => {
        return {
          url: `/category`,
          method: "POST",
          data,
        };
      },
    }),
  }),
});

export const { useGetAllCategoryQuery } = categoryApi;
