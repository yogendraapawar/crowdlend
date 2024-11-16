import {
  Box,
  Button,
  Collapse,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const FilterTab = () => {
  const [interestRateInputs, setInterestRateInputs] = useState(["0", "10"]);
  const [amountInputs, setAmountInputs] = useState(["0", "50000"]);
  const [durationInputs, setDurationInputs] = useState(["0", "36"]);
  const [loanStatus, setLoanStatus] = useState("Select");
  const isFilterOpen = useSelector((state) => state.flags.isHomeFilterTabOpen);

  const resetFilters = () => {
    setInterestRateInputs(["0", "10"]);
    setAmountInputs(["0", "50000"]);
    setDurationInputs(["0", "36"]);
    setLoanStatus("");
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
      loanStatus: loanStatus,
    });
  };

  return (
    <Box>
      <Collapse in={isFilterOpen}>
        <Card
          sx={{
            width: "100%",
            p: 3,
            borderRadius: 2,
            marginTop: 2,
            color: "palette.text.primary",
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
                Interest Rate Range (%)
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
                Amount Range(Rupees)
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
                Duration Range(Months)
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
                  fullWidth
                  size="small"
                  value={loanStatus}
                  onChange={(e) => setLoanStatus(e.target.value)}
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
