import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoanDetailsModalOpen: false,
  isBidFormOpened: false,
  isAdminLoansFilterOpen: false,
  isHomeFilterTabOpen: false,
  isAdminLoanDetailsModalOpen: false,
  isMyBidsFilterOpen: false,
  isConfirmationDialogOpen: false,
};

export const flagSlice = createSlice({
  name: "flagSlice",
  initialState,
  reducers: {
    setIsLoanDetailsModalOpen: (state, action) => {
      state.isLoanDetailsModalOpen = action.payload;
    },
    setIsBidFormOpened: (state, action) => {
      state.isBidFormOpened = action.payload;
    },
    setisAdminLoansFilterOpen: (state) => {
      state.isAdminLoansFilterOpen = !state.isAdminLoansFilterOpen;
    },
    setisHomeFilterTabOpen: (state) => {
      state.isHomeFilterTabOpen = !state.isHomeFilterTabOpen;
    },
    setIsAdminLoanDetailsModalOpen: (state, action) => {
      state.isAdminLoanDetailsModalOpen = action.payload;
    },
    setIsMyBidsFilterOpen: (state) => {
      state.isMyBidsFilterOpen = !state.isMyBidsFilterOpen;
    },
    // New action to set confirmation dialog open/close state
    setIsConfirmationDialogOpen: (state, action) => {
      state.isConfirmationDialogOpen = action.payload;
    },
  },
});

export const {
  setIsLoanDetailsModalOpen,
  setIsBidFormOpened,
  setisAdminLoansFilterOpen,
  setisHomeFilterTabOpen,
  setIsAdminLoanDetailsModalOpen,
  setIsMyBidsFilterOpen,
  setIsConfirmationDialogOpen, // Export new action
} = flagSlice.actions;

export default flagSlice.reducer;
