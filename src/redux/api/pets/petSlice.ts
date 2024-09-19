// petSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PetState {}

const initialState: PetState = {};

const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {},
});

export const {} = petSlice.actions;

export default petSlice.reducer;
