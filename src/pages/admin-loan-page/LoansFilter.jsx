import React, { useEffect, useState } from "react";
import { Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Collapse } from "@mui/material";
import Card from "@mui/material/Card";
import { useSelector } from "react-redux";

const LoansFilter = () => {
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [status, setStatus] = useState(""); // For storing selected loan status
  const isFilterOpen = useSelector(
    (state) => state.flags.isAdminLoansFilterOpen
  );

  const resetFilters = () => {
    setDateRange({ from: "", to: "" });
    setStatus(""); // Reset the status filter
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
    setStatus(e.target.value); // Update the status filter
  };

  const handleSubmit = () => {
    console.log("Selected Filters - Date Range:", dateRange, "Status:", status);
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
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "30px",
                  },
                }}
                slotProps={{
                  select: {
                    native: true,
                  },
                }}
              >
                <option value="" disabled>
                  Select Loan Status
                </option>
                <option value="completed">Completed</option>
                <option value="closed">Closed</option>
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

export default LoansFilter;
