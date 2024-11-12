import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import manImage from "../assets/man.jpg";
import { setIsBidFormOpened } from "../features/flags/flagsSlice";
import EnhancedTable from "./TableComponent";

export default function LoanRequestDetailsCard({ loanDetails }) {
  const dispatch = useDispatch();
  const currentUserPath = useSelector((state) => state.global.currentUserPath);
  console.log("loanDetails keys", Object.keys(loanDetails));
  console.log(currentUserPath);
  const isMyLoansPage = true;
  const offeredData = {
    "Loan Amount": "₹25,000",
    "Interest Rate": "7.4%",
    Duration: "20 months",
    Status: "Ongoing",
  };
  const VISIBLE_FIELDS = [
    "bidder_name",
    "bid_amount",
    "offered_interest_rate",
    "bid_status",
    "offered_duration",
  ];
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
    loan_tenure: 20,
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

  useEffect(() => {});

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
          flexDirection: { xs: "column", sm: "column", md: "row" },
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              overflow: "hidden",
              mb: 2,
            }}
          >
            <img
              src={manImage}
              alt="Selfie"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
        {currentUserPath === "/my-bids" && (
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Card sx={{ p: 1 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "primary.main",
                    fontSize: "1rem",
                  }}
                >
                  My offer
                </Typography>
                <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
                {Object.entries(offeredData).map(([key, value], index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      py: 0.5,
                    }}
                  >
                    <Typography
                      fontSize={"14px"}
                      sx={{ color: "text.secondary", fontWeight: "bold" }}
                    >
                      {key}
                    </Typography>
                    <Typography
                      sx={{ color: "text.primary", fontWeight: "bold" }}
                    >
                      {value}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Box>
        )}
      </Box>
      <Paper sx={{ padding: 2 }}>
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
              sx={{
                width: "100%",
                textAlign: "left",
                fontWeight: "bold",
                color: "primary.main",
                fontSize: "1rem",
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
      <Paper sx={{ padding: 2 }}>
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
      <Paper sx={{ padding: 2 }}>
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
              fontSize: "1rem",
            }}
          >
            Bids offered
          </Typography>
          <Divider />
          <EnhancedTable
            rows={loanDetails?.bids}
            headCells={bidHeadCells}
            VISIBLE_FIELDS={VISIBLE_FIELDS}
          />
        </Box>
      </Paper>
      <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
        {currentUserPath === "/my-bids" && (
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setIsBidFormOpened(true));
            }}
            color="error"
          >
            {"Delete"}
          </Button>
        )}
        <Button
          variant="contained"
          onClick={() => {
            dispatch(setIsBidFormOpened(true));
          }}
        >
          {currentUserPath === "/my-bids" ? "Edit" : "Bid"}
        </Button>
      </Box>
    </Box>
  );
}
