import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

const MultiLineChart = ({ data }) => {
  return (
    <Card>
      <CardHeader
        title={<Typography variant="h6">Loan Status Trends</Typography>}
      />
      <CardContent>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="bidding"
                stroke="#2196f3"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Bidding"
              />
              <Line
                type="monotone"
                dataKey="completed"
                stroke="#4caf50"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Completed"
              />
              <Line
                type="monotone"
                dataKey="closed"
                stroke="#9e9e9e"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Closed"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiLineChart;
