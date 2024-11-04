import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 showLoanDetailsModal:false,
  isBidFormOpened :false

};

export const flagSlice = createSlice({
  name: "flagSlice",
  initialState,
  reducers: {
    setShowLoanDetailsModal: (state, action) => {
      state.showLoanDetailsModal = action.payload;
    },
    setIsBidFormOpened: (state, action) => {
      state.isBidFormOpened = action.payload; // Directly assign the boolean value
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowLoanDetailsModal, setIsBidFormOpened } = flagSlice.actions;

export default flagSlice.reducer;
