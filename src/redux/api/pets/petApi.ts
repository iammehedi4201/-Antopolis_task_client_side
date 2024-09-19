import { baseApi } from "../baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPets: builder.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/pets`,
          method: "GET",
          params: arg,
        };
      },
    }),
    addPet: builder.mutation({
      query: (data) => {
        return {
          url: `/pets`,
          method: "POST",
          data,
        };
      },
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
