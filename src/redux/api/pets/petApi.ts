import { baseApi } from "../baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPets: builder.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/pet/get-pets`,
          method: "GET",
          params: arg,
        };
      },
      providesTags: ["pet"],
    }),
    addPet: builder.mutation({
      query: (data) => {
        return {
          url: `/pet/create-pet`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["pet"],
    }),
    DeletePet: builder.mutation({
      query: (data) => {
        return {
          url: `/pet/delete-pets`,
          method: "DELETE",
          data: { ids: data },
        };
      },
      invalidatesTags: ["pet"],
    }),
  }),
});

export const { useGetAllPetsQuery, useAddPetMutation, useDeletePetMutation } =
  petApi;
