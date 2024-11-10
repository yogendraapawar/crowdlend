import { Widgets } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PersonDetails from "./PersonDetails";
import AdminLoanDetailsMobile from "../pages/admin-loan-page/AdminLoanDetailsMobile";
import AdminLoanDetailsDesktop from "../pages/admin-loan-page/AdminLoanDetailsDesktop";

export default function LoanAgreementDetails() {
  const loanDetails = {
    borrower: {
      name: "Yogendraa Pawar",
      dob: "10/04/2007",
      address: "Wall street, New York",
      contact: "7499056481",
      selfie_url: "https://www.githubpagessite.com?x=500&y=-500",
      expected_loan_amount: 23000,
      expected_interest_rate: 9,
    },
    lender: {
      name: "Jogendra Powar",
      dob: "12/08/1990",
      address: "Wall street, New York",
      contact: "9907514121",
      offered_loan_amount: 23000,
      offered_interest_rate: 9,
      selfie_url: "https://www.githubpagessite.com?x=500&y=-500",
      offered_loan_tenure: 12,
    },
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <>
      {isLargeScreen && <AdminLoanDetailsDesktop loanDetails={loanDetails} />}
      {(isSmallScreen || isMediumScreen) && (
        <AdminLoanDetailsMobile loanDetails={loanDetails} />
      )}
    </>
  );
}
