import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loanDetailsModalLoanId: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoanDetailsModalLoanId: (state, action) => {
      state.loanDetailsModalLoanId = {
        ...state.loanDetailsModalLoanId,
        ...action.payload,
      };
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLoanDetailsModalLoanId } = globalSlice.actions;
export default globalSlice.reducer;
