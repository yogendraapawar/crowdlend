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
    },
  },
});

export const { setLoanDetailsModalLoanId } = globalSlice.actions;
export default globalSlice.reducer;
