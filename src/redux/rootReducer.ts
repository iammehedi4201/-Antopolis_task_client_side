import { baseApi } from "./api/baseApi";
import petReducer from "./api/pets/petSlice";
import categoryReducer from "./api/category/categorySlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  pet: petReducer,
  categroy: categoryReducer,
};
