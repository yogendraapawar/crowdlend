import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, IconButton } from "@mui/material";
import {
  PageContainer,
  PageContainerToolbar,
} from "@toolpad/core/PageContainer";
import React from "react";
import LoansList from "../../components/LoansList";

import { useDispatch } from "react-redux";
import { setIsMyBidsFilterOpen } from "../../features/flags/flagsSlice";
import MyBidsFilter from "../admin-loan-page/MyLoansFilter";

export default function MyBids() {
  const loanData = [
    {
      id: "1",
      loan_id: "a",
      borrower_name: "Yogendra Pawar",
      loan_amount: 25000,
      loan_duration: 20,
      expected_interest_rate: 7.4,
      loan_status: "ongoing",
      created_at: "25/10/2024",
      status: "bidding",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "2",
      loan_id: "b",
      borrower_name: "Anjali Sharma",
      loan_amount: 15000,
      loan_duration: 12,
      expected_interest_rate: 6.5,
      created_at: "15/10/2024",
      status: "completed",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "3",
      loan_id: "c",
      borrower_name: "Rahul Mehta",
      loan_amount: 50000,
      loan_duration: 24,
      expected_interest_rate: 8.0,
      created_at: "10/10/2024",
      status: "bidding",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "4",
      loan_id: "d",
      borrower_name: "Sneha Gupta",
      loan_amount: 30000,
      loan_duration: 18,
      expected_interest_rate: 5.5,
      created_at: "05/10/2024",
      status: "closed",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "5",
      loan_id: "e",
      borrower_name: "Vikram Singh",
      loan_amount: 20000,
      loan_duration: 15,
      expected_interest_rate: 7.0,
      created_at: "20/09/2024",
      status: "bidding",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "6",
      loan_id: "f",
      borrower_name: "Neha Desai",
      loan_amount: 40000,
      loan_duration: 36,
      expected_interest_rate: 9.0,
      created_at: "01/09/2024",
      status: "completed",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "7",
      loan_id: "g",
      borrower_name: "Ajay Kumar",
      loan_amount: 35000,
      loan_duration: 30,
      expected_interest_rate: 6.8,
      created_at: "30/08/2024",
      status: "bidding",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
    {
      id: "8",
      loan_id: "h",
      borrower_name: "Pooja Rani",
      loan_amount: 18000,
      loan_duration: 14,
      expected_interest_rate: 7.2,
      created_at: "25/07/2024",
      status: "completed",
      bids_count: Math.floor(Math.random() * 151) + 50,
    },
  ];

  function PageToolbar() {
    const dispatch = useDispatch();
    const toggleFilter = () => {
      console.log("toggling my bid");
      dispatch(setIsMyBidsFilterOpen());
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

  return (
    <PageContainer
      breadcrumbs={false}
      title="My Bids"
      slots={{ toolbar: PageToolbar }}
    >
      <Box
        sx={{
          width: "100%",
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <MyBidsFilter />
        <LoansList />
      </Box>
    </PageContainer>
  );
}
