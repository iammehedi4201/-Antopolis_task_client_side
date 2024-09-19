// petSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PetState {
  selectedPet?: string[];
}

const initialState: PetState = {
  selectedPet: [],
};

const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    toggleCardSelection: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.selectedPet?.includes(id)) {
        state.selectedPet = state.selectedPet.filter((cardId) => cardId !== id);
      } else {
        state.selectedPet?.push(id);
      }
    },
  },
});

export const { toggleCardSelection } = petSlice.actions;

export default petSlice.reducer;
