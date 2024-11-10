import * as React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Container,
  Paper,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTheme } from "@mui/material/styles";
import { post } from "../../utils/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CustomMobileNumberField({ value, onChange }) {
  const handleInputChange = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    onChange(newValue);
  };

  return (
    <TextField
      id="input-with-icon-textfield"
      label="Mobile Number"
      name="mobileNumber"
      type="tel"
      size="small"
      required
      fullWidth
      value={value}
      onChange={handleInputChange}
      inputMode="numeric"
      pattern="[0-9]*"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle fontSize="inherit" />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
}

function CustomPasswordField({ value, onChange }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        name="password"
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? (
                <VisibilityOff fontSize="inherit" />
              ) : (
                <Visibility fontSize="inherit" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

export default function SignIn() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    mobileNumber: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = {
        phone: formData.mobileNumber,
        password: formData.password,
      };

      const response = await post("/users/login/user-login", body);

      if (response.success) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("role", response.role || "");

        navigate("/home", { replace: true });
      } else {
        alert("Login failed: " + response.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        px: 4,
      }}
    >
      <Paper sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          <CustomMobileNumberField
            value={formData.mobileNumber}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, mobileNumber: value }))
            }
          />
          <CustomPasswordField
            value={formData.password}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, password: value }))
            }
          />
          <Button
            type="submit"
            variant="outlined"
            color="info"
            size="small"
            disableElevation
            fullWidth
            sx={{ my: 2 }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
