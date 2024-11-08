import React from "react";
import { Box, Paper, Typography, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EnhancedTable from "./TableComponent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { setIsBidFormOpened } from "../features/flags/flagsSlice";
import { useDispatch } from "react-redux";
import Divider from "@mui/material/Divider";
import DownloadIcon from "@mui/icons-material/Download";
import manImage from "../assets/man.jpg";

export default function LoanRequestDetailsCard({
  handleModalClose,
  loanDetails,
}) {
  const dispatch = useDispatch();
  console.log("loanDetails keys", Object.keys(loanDetails));
  const bidHeadCells = [
    {
      id: "bidder_name",
      numeric: false,
      disablePadding: false,
      label: "Bidder Name",
    },
    {
      id: "bid_amount",
      numeric: true,
      disablePadding: false,
      label: "Bid Amount",
    },
    {
      id: "offered_duration",
      numeric: true,
      disablePadding: false,
      label: "Offered Duration",
    },
    {
      id: "offered_interest_rate",
      numeric: true,
      disablePadding: false,
      label: "Offered Interest Rate",
    },
    {
      id: "bid_status",
      numeric: false,
      disablePadding: false,
      label: "Bid Status",
    },
  ];

  const personalDetails = {
    borrower_name: "Yogendra Pawar",
    loan_amount: 25000,
    duration_in_months: 20,
    expected_interest_rate: 7.4,
    created_at: "25/10/2024",
    date_of_birth: "10/01/2003",
    contact_number: "7499504618",
  };

  const formatKey = (key) => {
    return key
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* selfie image container */}
        <Box>
          <img src={manImage} alt="applicant" />
        </Box>
      </Box>
      <Paper sx={{ padding: 2 }} elevation={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            gap: 1,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                width: "100%",
                textAlign: "left",
                fontWeight: "bold",
                color: "primary.main",
              }}
            >
              Basic Details
            </Typography>
            <Divider />
            <Grid container spacing={2}>
              {Object.entries(personalDetails).map(([key, value], index) => (
                <Grid sx={{ width: "100%" }} size={{ sm: 12, md: 6, lg: 6 }}>
                  <Box sx={{ display: "flex", width: "100%" }}>
                    <Typography
                      fontSize={"14px"}
                      fontWeight={"semibold"}
                      sx={{
                        width: "100%",
                        color: "text.secondary",
                        fontWeight: "bold",
                      }}
                    >
                      {formatKey(key)}
                    </Typography>
                    <Typography
                      sx={{
                        width: "100%",
                        color: "text.primary",
                        fontWeight: "bold",
                      }}
                    >
                      {value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Paper>
      <Paper sx={{ padding: 2 }} elevation={5}>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center" /* Centers items vertically */,
              alignItems: "center",

              width: "100%",
            }}
          >
            <CheckCircleIcon sx={{ height: "2rem", color: "success.main" }} />
            <Typography sx={{ color: "text.secondary", fontWeight: "bold" }}>
              {"EKYC"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center" /* Centers items vertically */,
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{ height: "2rem", fontSize: "1.2rem", fontWeight: "bold" }}
            >
              {"800"}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontWeight: "bold" }}>
              {"Credit Score"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center" /* Centers items vertically */,
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton color="primary" sx={{ height: "2rem" }}>
              <DownloadIcon />
            </IconButton>
            <Typography sx={{ color: "text.secondary", fontWeight: "bold" }}>
              {"Financial Data"}
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Paper sx={{ padding: 2 }} elevation={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              textAlign: "left",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Bids offered
          </Typography>
          <Divider />
          <EnhancedTable rows={loanDetails?.bids} headCells={bidHeadCells} />
        </Box>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(setIsBidFormOpened(true));
          }}
        >
          Bid
        </Button>
      </Box>
    </Box>
  );
}
