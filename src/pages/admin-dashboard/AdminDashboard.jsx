import React from "react";
import DoughnutChart from "../../charts/Doughnut";

export default function AdminDashboard() {
  const defaultData = {
    labels: ["Bidding", "Closed", "Completed"], // Default labels
    datasets: [
      {
        data: [100, 120, 80], // Default data values
        backgroundColor: ["#28a745", "#dc3545", "#fd7e14"],
        hoverBackgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true, // Tooltip remains enabled
      },
      legend: {
        position: "top",
      },
    },
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest", // Default hover interaction mode
      intersect: false, // Ensure that hovering outside a segment still highlights the segment
    },
    elements: {
      arc: {
        hoverBackgroundColor: null, // Disable hover color change
        hoverBorderWidth: 0, // Optional: Remove hover border width
      },
    },
  };

  return (
    <div>
      <DoughnutChart data={defaultData} options={options} />
    </div>
  );
}
