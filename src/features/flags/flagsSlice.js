import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLoanDetailsModal: false,
  isBidFormOpened: false,
  isAdminLoansFilterOpen: false,
  isHomeFilterTabOpen: false,
  isAdminLoanDetailsModalOpen: false,
  isMyBidsFilterOpen: false,
};

export const flagSlice = createSlice({
  name: "flagSlice",
  initialState,
  reducers: {
    setShowLoanDetailsModal: (state, action) => {
      state.showLoanDetailsModal = action.payload;
    },
    setIsBidFormOpened: (state, action) => {
      state.isBidFormOpened = action.payload;
    },
    setisAdminLoansFilterOpen: (state) => {
      console.log("setting loan", state.isAdminLoansFilterOpen);
      state.isAdminLoansFilterOpen = !state.isAdminLoansFilterOpen;
    },
    setisHomeFilterTabOpen: (state) => {
      console.log("setting loan", state.isHomeFilterTabOpen);
      state.isHomeFilterTabOpen = !state.isHomeFilterTabOpen;
    },
    setIsAdminLoanDetailsModalOpen: (state, action) => {
      state.isAdminLoanDetailsModalOpen = action.payload;
    },
    setIsMyBidsFilterOpen: (state, action) => {
      state.isMyBidsFilterOpen = !state.isMyBidsFilterOpen;
    },
  },
});

export const {
  setShowLoanDetailsModal,
  setIsBidFormOpened,
  setisAdminLoansFilterOpen,
  setisHomeFilterTabOpen,
  setIsAdminLoanDetailsModalOpen,
  setIsMyBidsFilterOpen,
} = flagSlice.actions;

export default flagSlice.reducer;
