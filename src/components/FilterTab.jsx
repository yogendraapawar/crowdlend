import React, { useState } from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Collapse } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
const FilterTab = () => {
  const [interestRateInputs, setInterestRateInputs] = useState(["0", "10"]);
  const [amountInputs, setAmountInputs] = useState(["0", "50000"]);
  const [durationInputs, setDurationInputs] = useState(["0", "36"]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const resetFilters = () => {
    setInterestRateInputs(["0", "10"]);
    setAmountInputs(["0", "50000"]);
    setDurationInputs(["0", "36"]);
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
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={toggleFilter}>
          {!isFilterOpen ? <FilterAltIcon /> : <FilterAltOffIcon />}
        </IconButton>
      </Box>
      <Collapse in={isFilterOpen}>
        <Box
          sx={{
            width: "100%",
            border: 1,
            borderColor: "primary.main", // Set border color to primary
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
        </Box>
      </Collapse>
    </Box>
  );
};

export default FilterTab;
