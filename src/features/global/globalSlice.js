import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loanDetailsModalLoanId: null,
  currentUserPath: "",
  session: null,
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
    setCurrentUserPath: (state, action) => {
      console.log("setting as ", action.payload);
      state.currentUserPath = action.payload;
    },
    setSession: (state, action) => {
      state.session = action.payload;
    },
  },
});

export const { setLoanDetailsModalLoanId, setCurrentUserPath, setSession } =
  globalSlice.actions;
export default globalSlice.reducer;
