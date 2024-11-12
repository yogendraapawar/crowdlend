import React from "react";
import LoansFilter from "./LoansFilter";
import { Box, Paper } from "@mui/material";
import EnhancedTable from "../../components/TableComponent";
import { IconButton } from "@mui/material";
import {
  PageContainer,
  PageContainerToolbar,
} from "@toolpad/core/PageContainer";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { useDispatch } from "react-redux";
import { setisAdminLoansFilterOpen } from "../../features/flags/flagsSlice";
import TestTable from "../../components/TestTable";
import AdminLoanModal from "./CompletedLoanModal";
import { setIsAdminLoanDetailsModalOpen } from "../../features/flags/flagsSlice";

const loanDetails = [
  {
    id: "1",
    final_loan_amount: 12000,
    final_interest_rate: 8.9,
    final_loan_tenure: 20,
    borrower_name: "Kunal Raj",
    lender_name: "Pradeep Junja",
    loan_id: "abc",
  },
];

const bidHeadCells = [
  { id: "borrower_name", numeric: false, label: "Borrower Name" },
  { id: "lender_name", numeric: false, label: "Lender Name" },
  { id: "final_loan_amount", numeric: true, label: "Final Loan Amount" },
  { id: "final_interest_rate", numeric: true, label: "Interest Rate (%)" },
  { id: "final_loan_tenure", numeric: true, label: "Loan Tenure (Months)" },
];

function PageToolbar() {
  const dispatch = useDispatch();
  const toggleFilter = () => {
    dispatch(setisAdminLoansFilterOpen());
  };

  return (
    <PageContainerToolbar>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={toggleFilter}>
          <FilterAltIcon />
        </IconButton>
      </Box>
    </PageContainerToolbar>
  );
}

export default function AdminLoanPage() {
  const dispatch = useDispatch();

  const rowActions = [
    {
      label: "Details",
      onClick: (row) => {
        dispatch(setIsAdminLoanDetailsModalOpen(true));
      },
    },
  ];

  const VISIBLE_FIELDS = [
    "final_loan_amount",
    "final_interest_rate",
    "final_loan_tenure",
    "borrower_name",
    "lender_name",
  ];
  return (
    <PageContainer
      breadcrumbs={false}
      title="Loans Page"
      slots={{ toolbar: PageToolbar }}
    >
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <LoansFilter />
        <Paper sx={{ flexGrow: 1 }}>
          <EnhancedTable
            rows={loanDetails}
            headCells={bidHeadCells}
            rowActions={rowActions}
            VISIBLE_FIELDS={VISIBLE_FIELDS}
          />
        </Paper>
      </Box>
      <AdminLoanModal />
    </PageContainer>
  );
}
