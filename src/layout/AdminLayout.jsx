import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import AdminDashboard from "../pages/admin-dashboard/AdminDashboard";
import PaymentsIcon from "@mui/icons-material/Payments";
import AdminLoanPage from "../pages/admin-loan-page/AdminLoanPage";
const NAVIGATION = [
  {
    segment: "loans",
    title: "Loans",
    icon: <PaymentsIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  let content;
  console.log("CURRENT_PATH_IN_DASHBOARD", pathname);

  switch (pathname) {
    case "/loans":
      content = <AdminLoanPage />;
      break;
    default:
      content = <div>Page Not Found</div>;
      break;
  }

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      {content}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function AdminLayout(props) {
  const { window } = props;

  const router = useDemoRouter("/loans");

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        title: "CROWDLEND",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

export default AdminLayout;
