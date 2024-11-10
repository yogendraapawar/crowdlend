import { Box, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import PersonDetails from "../../components/PersonDetails";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function AdminLoanDetailsDesktop({ loanDetails }) {
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
        px: 1,
      }}
    >
      <Box sx={{ display: "flex", width: "100%", pb: 1 }}>
        <Box sx={{ width: "50%" }}>
          {" "}
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              textAlign: "left",
              fontWeight: "bold",
              color: "primary.main",
              px: 2,
            }}
          >
            Borrower
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          {" "}
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              textAlign: "left",
              fontWeight: "bold",
              color: "primary.main",
              px: 2,
            }}
          >
            Lender
          </Typography>
        </Box>
      </Box>

      <Divider />
      {/* Scrollable content area with side-by-side layout */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
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
            <PersonDetails personalDetails={loanDetails.borrower} />
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
            <PersonDetails personalDetails={loanDetails.lender} />
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