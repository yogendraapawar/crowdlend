import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Collapse } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import Card from "@mui/material/Card";

const FilterTab = () => {
  const [interestRateInputs, setInterestRateInputs] = useState(["0", "10"]);
  const [amountInputs, setAmountInputs] = useState(["0", "50000"]);
  const [durationInputs, setDurationInputs] = useState(["0", "36"]);
  const [loanStatus, setLoanStatus] = useState("Select"); // For loan status dropdown
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const resetFilters = () => {
    setInterestRateInputs(["0", "10"]);
    setAmountInputs(["0", "50000"]);
    setDurationInputs(["0", "36"]);
    setLoanStatus(""); // Reset loan status
  };

  const handleInputChange = (index, value, type) => {
    const cleanedValue = value.replace(/^0+/, "");
    const parsedValue = cleanedValue === "" ? undefined : Number(cleanedValue);

    if (type === "interest") {
      const newRange = [...interestRateInputs];
      newRange[index] = parsedValue !== undefined ? parsedValue : 0;
      setInterestRateInputs(newRange.map((val) => String(val)));
    } else if (type === "amount") {
      const newRange = [...amountInputs];
      newRange[index] = parsedValue !== undefined ? parsedValue : 0;
      setAmountInputs(newRange.map((val) => String(val)));
    } else if (type === "duration") {
      const newRange = [...durationInputs];
      newRange[index] = parsedValue !== undefined ? parsedValue : 0;
      setDurationInputs(newRange.map((val) => String(val)));
    }
  };

  const handleSubmit = () => {
    console.log("Selected Ranges:", {
      interestRate: interestRateInputs,
      amount: amountInputs,
      duration: durationInputs,
      loanStatus: loanStatus, // Log selected loan status
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            width: "100%",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "text.secondary",
          }}
        >
          Loan Requests
        </Box>
        <IconButton onClick={toggleFilter}>
          {!isFilterOpen ? <FilterAltIcon /> : <FilterAltOffIcon />}
        </IconButton>
      </Box>
      <Collapse in={isFilterOpen}>
        <Card
          sx={{
            width: "100%",
            p: 3,
            borderRadius: 2,
            marginTop: 2,
            color: "palette.text.primary", // Set font color based on theme
          }}
        >
          <Grid
            container
            columnSpacing={10}
            rowSpacing={{ xs: 3, sm: 3 }}
            direction={{ xs: "column", md: "row" }}
          >
            <Grid item xs={12}>
              <Typography fontSize={14} textAlign={"left"} gutterBottom>
                Interest Rate (%)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  type="number"
                  value={interestRateInputs[0]}
                  onChange={(e) =>
                    handleInputChange(0, e.target.value, "interest")
                  }
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "30px",
                    },
                  }}
                  inputProps={{ min: 0, max: 10 }}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  type="number"
                  value={interestRateInputs[1]}
                  onChange={(e) =>
                    handleInputChange(1, e.target.value, "interest")
                  }
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "30px",
                    },
                  }}
                  inputProps={{ min: 0, max: 10 }}
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography fontSize={14} textAlign={"left"} gutterBottom>
                Amount (Rupees)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  type="number"
                  value={amountInputs[0]}
                  onChange={(e) =>
                    handleInputChange(0, e.target.value, "amount")
                  }
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "30px",
                    },
                  }}
                  inputProps={{ min: 0, max: 50000 }}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  type="number"
                  value={amountInputs[1]}
                  onChange={(e) =>
                    handleInputChange(1, e.target.value, "amount")
                  }
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "30px",
                    },
                  }}
                  inputProps={{ min: 0, max: 50000 }}
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography fontSize={14} textAlign={"left"} gutterBottom>
                Duration (Months)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  type="number"
                  value={durationInputs[0]}
                  onChange={(e) =>
                    handleInputChange(0, e.target.value, "duration")
                  }
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "30px",
                    },
                  }}
                  inputProps={{ min: 0, max: 36 }}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  type="number"
                  value={durationInputs[1]}
                  onChange={(e) =>
                    handleInputChange(1, e.target.value, "duration")
                  }
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "30px",
                    },
                  }}
                  inputProps={{ min: 0, max: 36 }}
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Grid>

            {/* Loan Status Dropdown - TextField select */}
            <Grid item xs={12}>
              <Box sx={{ width: "100%" }}>
                <Typography fontSize={14} textAlign={"left"} gutterBottom>
                  Loan Status
                </Typography>

                <TextField
                  select
                  size="small"
                  value={loanStatus}
                  onChange={(e) => setLoanStatus(e.target.value)}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "30px",
                    },
                  }}
                >
                  {["a", "b", "c"].map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
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

export default FilterTab;
