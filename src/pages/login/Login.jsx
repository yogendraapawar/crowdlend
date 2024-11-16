import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CircularProgress, Alert, Slide } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Collapse,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
} from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../utils/api";
import { useDispatch } from "react-redux";
import { setSession } from "../../features/global/globalSlice";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    mobileNumber: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const body = {
        phone: formData.mobileNumber,
        password: formData.password,
      };

      const response = await post("/users/login", body);

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", response.user.role || "");

      dispatch(
        setSession({
          user: {
            name: response.user.name,
            email: response.user.phone,
            image: response.user.photo,
          },
        })
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage(error?.message || "An error occurred. Please try again.");
      setOpen(true);
    } finally {
      setLoading(false);
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
        overflow: "hidden", // Prevent scrolling
      }}
    >
      <Paper
        sx={{
          p: 4,
          width: "100%",
          maxWidth: "400px", // Ensure the form fits smaller screens
          boxSizing: "border-box",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Subtle overlay for contrast
          borderRadius: "8px",
        }}
      >
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

          <Collapse in={open}>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
              {errorMessage}
            </Alert>
          </Collapse>

          <Button
            type="submit"
            variant="outlined"
            color="info"
            size="small"
            disableElevation
            fullWidth
            sx={{ my: 2 }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
