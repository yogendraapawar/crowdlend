import React, { useEffect, useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Collapse } from "@mui/material";
import Card from "@mui/material/Card";
import { useSelector } from "react-redux";

const LoansFilter = () => {
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const isFilterOpen = useSelector(
    (state) => state.flags.isAdminLoansFilterOpen
  );

  const resetFilters = () => {
    setDateRange({ from: "", to: "" });
  };

  const handleDateChange = (e, field) => {
    setDateRange({
      ...dateRange,
      [field]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Selected Date Range:", dateRange);
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
                />
              </Box>
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
