import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loanDetailsModalLoanId: null,
  currentUserPath: "",
  session: null,

  // Filters
  adminLoansFilter: {
    startDate: null,
    endDate: null,
    loanStatus: null,
  },

  myBidsFilter: {
    bidDateRange: null,
    loanStatus: null,
    bidStatus: null,
  },

  placeBidsFilter: {
    interestRange: null,
    amountRange: null,
    loanTenure: null,
    loanStatus: null,
  },

  // User Place bids Loans data
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

    // Setters for filters
    setAdminLoansFilter: (state, action) => {
      state.adminLoansFilter = {
        ...state.adminLoansFilter,
        ...action.payload,
      };
    },
    setMyBidsFilter: (state, action) => {
      state.myBidsFilter = {
        ...state.myBidsFilter,
        ...action.payload,
      };
    },
    setPlaceBidsFilter: (state, action) => {
      state.placeBidsFilter = {
        ...state.placeBidsFilter,
        ...action.payload,
      };
    },
  },
});

export const {
  setLoanDetailsModalLoanId,
  setCurrentUserPath,
  setSession,
  setAdminLoansFilter,
  setMyBidsFilter,
  setPlaceBidsFilter,
} = globalSlice.actions;

export default globalSlice.reducer;
