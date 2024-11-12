import React, { useEffect, useState } from "react";
import { Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Collapse } from "@mui/material";
import Card from "@mui/material/Card";
import { useSelector } from "react-redux";

const MyBidsFilter = () => {
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [status, setStatus] = useState(""); // For storing selected loan status
  const [bidStatus, setBidStatus] = useState(""); // For storing selected bid status
  const isFilterOpen = useSelector((state) => state.flags.isMyBidsFilterOpen);

  const resetFilters = () => {
    setDateRange({ from: "", to: "" });
    setStatus(""); // Reset the loan status filter
    setBidStatus(""); // Reset the bid status filter
  };

  const handleDateChange = (e, field) => {
    const newDate = e.target.value;

    if (field === "from" && dateRange.to && newDate > dateRange.to) {
      // If "from" date is greater than "to" date, reset the "to" date
      setDateRange({
        ...dateRange,
        from: newDate,
        to: newDate, // Set to the same value to prevent invalid range
      });
    } else if (field === "to" && newDate < dateRange.from) {
      // If "to" date is smaller than "from" date, don't allow it
      return;
    } else {
      setDateRange({
        ...dateRange,
        [field]: newDate,
      });
    }
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value); // Update the loan status filter
  };

  const handleBidStatusChange = (e) => {
    setBidStatus(e.target.value); // Update the bid status filter
  };

  const handleSubmit = () => {
    console.log(
      "Selected Filters - Date Range:",
      dateRange,
      "Loan Status:",
      status,
      "Bid Status:",
      bidStatus
    );
  };

  useEffect(() => {
    console.log("data", isFilterOpen);
  });

  return (
    <Box>
      <Collapse in={isFilterOpen}>
        <Card
          sx={{
            width: "100%",
            p: 3,
            borderRadius: 2,
            marginTop: 1,
            mb: 1,
            color: "palette.text.primary",
          }}
        >
          <Grid
            container
            columnSpacing={10}
            rowSpacing={{ xs: 3, sm: 3 }}
            direction={{ xs: "column", md: "row" }}
          >
            {/* Date Range Filter */}
            <Grid item xs={12}>
              <Typography fontSize={14} textAlign={"left"} gutterBottom>
                Loan Date Range
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  type="date"
                  value={dateRange.from}
                  onChange={(e) => handleDateChange(e, "from")}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "30px",
                    },
                  }}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  type="date"
                  value={dateRange.to}
                  onChange={(e) => handleDateChange(e, "to")}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "30px",
                    },
                  }}
                  variant="outlined"
                  size="small"
                  // Disable dates before the "from" date
                  inputProps={{
                    min: dateRange.from,
                  }}
                />
              </Box>
            </Grid>

            {/* Loan Status Filter (Normal Dropdown) */}
            <Grid item xs={12}>
              <Typography fontSize={14} textAlign={"left"} gutterBottom>
                Loan Status
              </Typography>
              <TextField
                select
                fullWidth
                size="small"
                value={status}
                onChange={handleStatusChange}
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    height: "30px",
                  },
                }}
              >
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="closed">Closed</MenuItem>
              </TextField>
            </Grid>

            {/* Bid Status Filter (Normal Dropdown) */}
            <Grid item xs={12}>
              <Typography fontSize={14} textAlign={"left"} gutterBottom>
                Bid Status
              </Typography>
              <TextField
                select
                fullWidth
                size="small"
                value={bidStatus}
                onChange={handleBidStatusChange}
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    height: "30px",
                  },
                }}
              >
                <MenuItem value="open">Open</MenuItem>
                <MenuItem value="closed">Closed</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Grid sx={{ justifyContent: "end", display: "flex", columnGap: 2 }}>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={resetFilters}
              sx={{ mt: 2 }}
            >
              Clear filter
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mt: 2 }}
            >
              Apply Filters
            </Button>
          </Grid>
        </Card>
      </Collapse>
    </Box>
  );
};

export default MyBidsFilter;
