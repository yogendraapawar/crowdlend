import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const DonutChart = ({
  data = [
    { name: "Category A", value: 400 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 300 },
    { name: "Category D", value: 200 },
  ],
  title = "Donut Chart",
  innerRadius = 0,
  outerRadius = 100,
  paddingAngle = 2,
  showLegend = true,
  showTooltip = true,
  showLabels = false,
  colors = COLORS,
  sx = {},
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderCustomizedLabel = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (!showLabels) return null;

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize: "12px" }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <Card variant="outlined" sx={{ p: 1, bgcolor: "background.paper" }}>
          <Typography variant="subtitle2">{data.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            Value: {data.value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Percentage: {((data.value / total) * 100).toFixed(1)}%
          </Typography>
        </Card>
      );
    }
    return null;
  };

  return (
    <Card sx={{ ...sx, width: "100%" }}>
      <CardHeader
        title={
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        }
      />
      <CardContent>
        <Box sx={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                paddingAngle={paddingAngle}
                dataKey="value"
                animationBegin={0}
                animationDuration={1000}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              {showTooltip && <Tooltip content={<CustomTooltip />} />}
              {showLegend && (
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                />
              )}
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DonutChart;
