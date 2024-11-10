import { Box, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import PersonDetails from "../../components/PersonDetails";
import Button from "@mui/material/Button";

export default function AdminLoanDetailsMobile({ loanDetails }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
        sx={{
          flexShrink: 0,
          px: 2,
        }}
      >
        <Tab
          icon={<CallReceivedIcon />}
          iconPosition="start"
          label="Borrower"
        />
        <Tab icon={<CallMadeIcon />} iconPosition="start" label="Lender" />
      </Tabs>

      {/* Scrollable content area */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {/* Conditionally render Borrower or Lender details */}
        <div>
          {value === 0 && (
            <PersonDetails personalDetails={loanDetails.borrower} />
          )}
          {value === 1 && (
            <PersonDetails personalDetails={loanDetails.lender} />
          )}
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          p: 2,
        }}
      >
        <Button variant="contained" color="primary" size="small">
          Deploy Contract
        </Button>
      </Box>
    </Box>
  );
}
