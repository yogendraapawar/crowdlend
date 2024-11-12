import React from "react";
import DonutChart from "../../charts/Doughnut";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import MultiLineChart from "../../charts/MultiLineChart";
import { Typography, Tooltip, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import InfoIcon from "@mui/icons-material/Info";
import { PageContainer } from "@toolpad/core/PageContainer";
import ClickableTooltip from "../../components/ClickableTooltip";

export default function AdminDashboard() {
  const donut_data = [
    { name: "Category A", value: 400 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 300 },
    { name: "Category D", value: 200 },
  ];
  const data = [
    {
      month: "Jan 2024",
      bidding: 45,
      completed: 20,
      closed: 10,
    },
    {
      month: "Feb 2024",
      bidding: 52,
      completed: 28,
      closed: 15,
    },
    {
      month: "Mar 2024",
      bidding: 48,
      completed: 35,
      closed: 22,
    },
    {
      month: "Apr 2024",
      bidding: 60,
      completed: 40,
      closed: 28,
    },
    {
      month: "May 2024",
      bidding: 55,
      completed: 45,
      closed: 32,
    },
    {
      month: "Jun 2024",
      bidding: 65,
      completed: 50,
      closed: 38,
    },
  ];

  const cards_data = [
    {
      title: "Total Loan Amount Disbursed",
      value: "₹25,00,00,000",
      description:
        "Total amount disbursed to borrowers through various loan schemes.",
    },
    {
      title: "Total Loan Lenders",
      value: "25,000",
      description: "Number of lenders contributing to the loan pool.",
    },
    {
      title: "Total Loan Borrowers",
      value: "12,000",
      description: "Total number of individuals benefiting from loans.",
    },
  ];

  return (
    <PageContainer breadcrumbs={false} title="Overall Analysis">
      <Box
        width={"100%"}
        sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <Grid container spacing={2}>
          {cards_data.map((item, index) => (
            <Grid
              key={index}
              item
              sx={{ width: "100%" }}
              size={{ sm: 12, md: 6, lg: 3 }}
            >
              <Card
                sx={{
                  px: 4,
                  py: 4,
                  boxShadow: 3,
                  borderRadius: 2,
                  height: "100%",
                  position: "relative",
                  borderLeft: `6px solid`,
                  borderColor: "primary.main",
                }}
              >
                {/* Tooltip Icon */}
                <ClickableTooltip description={item.description} />

                {/* Title */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    textAlign: "left",
                    fontSize: "1rem",
                  }}
                >
                  {item.title}
                </Typography>

                {/* Value */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "primary.main",
                    textAlign: "left",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.value}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid width={"100%"} container spacing={2}>
          {/* MultiLine Chart */}
          <Grid sx={{ width: "100%" }} size={{ sm: 12, md: 12, lg: 6 }}>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 1,
                width: "100%",
              }}
            >
              <MultiLineChart data={data} />
            </Box>
          </Grid>

          {/* Donut Chart */}
          <Grid
            sx={{ width: "100%", height: "100%" }}
            size={{ sm: 12, md: 12, lg: 6 }}
          >
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 1,

                width: "100%",
                height: "100%",
              }}
            >
              <DonutChart data={donut_data} title="Loan Statuses" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
