import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Home from "../pages/home/Home";
import LoanRequestForm from "../components/LoanRequestForm";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AdminDashboard from "../pages/admin-dashboard/AdminDashboard";
import MyBids from "../pages/my-bids/MyBids";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GavelIcon from "@mui/icons-material/Gavel";
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "../features/global/globalSlice";
import { useNavigate } from "react-router-dom";

const NAVIGATION = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "home",
    title: "Place Bids",
    icon: <GavelIcon />,
  },
  {
    segment: "my-bids",
    title: "My Bids",
    icon: <ListAltIcon />,
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

  switch (pathname) {
    case "/dashboard":
      content = <AdminDashboard />;
      break;
    case "/home":
      content = <Home />;
      break;
    case "/my-bids":
      content = <MyBids />;
      break;

    default:
      content = <div>Page Not Found</div>;
      break;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {content}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function HomeLayout(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  const demoWindow = window !== undefined ? window() : undefined;

  const session = useSelector((state) => state.global.session);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const clearSession = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("isAuthenticated");
    dispatch(setSession(null));
    navigate("/login");
  };

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Bharat Kashyap",
            email: "bharatkashyap@outlook.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        clearSession();
      },
    };
  }, []);

  return (
    <AppProvider
      session={session}
      authentication={authentication}
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

export default HomeLayout;
