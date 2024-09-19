import { baseApi } from "./api/baseApi";
import petReducer from "./api/pets/petSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  pet: petReducer,
};
