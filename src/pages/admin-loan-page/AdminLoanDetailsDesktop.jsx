import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import PersonDetails from "../../components/PersonDetails";

export default function AdminLoanDetailsDesktop({ loanDetails }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        px: 2,
      }}
    >
      {/* Scrollable content area with side-by-side layout */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          border: "2px solid",
          borderColor: "divider",
          p: 2,
        }}
      >
        {/* Borrower Details */}

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",

            p: 2,
          }}
        >
          <div>
            <PersonDetails
              heading={"Borrower"}
              personalDetails={loanDetails.borrower}
            />
          </div>
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",

            p: 2,
          }}
        >
          <div>
            <PersonDetails
              heading={"Lender"}
              personalDetails={loanDetails.lender}
            />
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          padding: 2,
        }}
      >
        <Button variant="contained" color="primary">
          Deploy Contract
        </Button>
      </Box>
    </Box>
  );
}
