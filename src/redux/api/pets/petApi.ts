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
    DeletePetById: builder.mutation({
      query: (id: string) => {
        return {
          url: `/pets/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllPetsQuery,
  useAddPetMutation,
  useDeletePetByIdMutation,
} = petApi;
