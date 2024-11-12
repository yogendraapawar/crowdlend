import React from "react";
import { Box, Card, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import selfiePlaceHolder from "../assets/man.svg";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";

export default function PersonDetails({ heading, personalDetails }) {
  const excludeKeys = ["selfie_url"];
  const formatKey = (key) => {
    return key
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        px: 2,
        py: 2,
      }}
    >
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
          {heading}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Box
          sx={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={selfiePlaceHolder}
            alt="Selfie"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Card
        variant="outlined"
        sx={{
          px: 2,
          py: 2,
          bgcolor: "background.green",
          mt: 4,
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

        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Grid container spacing={2}>
            {Object.entries(personalDetails)
              .filter(([key, value]) => !excludeKeys.includes(key))
              .map(([key, value], index) => (
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
              ))}
          </Grid>
        </Box>
      </Card>{" "}
    </Paper>
  );
}
