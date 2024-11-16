import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useDispatch } from "react-redux";
import {
  setIsBidFormOpened,
  setIsLoanDetailsModalOpen,
} from "../features/flags/flagsSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmationDialog({
  open,
  onClose,
  onAgree,
  onDisagree,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  agreeText = "OK",
  disagreeText = "Cancel",
}) {
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState(null); // 'success' | 'failure' | null
  const dispatch = useDispatch();
  const handleAgreeClick = async () => {
    setLoading(true);
    setApiStatus(null); // Reset status before making the API call

    try {
      // Simulating an API call
      const result = await onAgree(); // Call the onAgree function prop (API request)

      // On success
      setApiStatus("success");
    } catch (error) {
      // On failure
      setApiStatus("success");
    } finally {
      setLoading(false);
    }
    setTimeout(() => {
      dispatch(setIsBidFormOpened(false));
    }, 1500);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {loading ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ mt: 2 }}
            >
              Please wait...
            </DialogContentText>
          </Box>
        ) : apiStatus === "success" ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="green"
          >
            <CheckCircleIcon sx={{ fontSize: 50 }} />
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ mt: 2, color: "green" }}
            >
              Success! Your action was completed.
            </DialogContentText>
          </Box>
        ) : apiStatus === "failure" ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="red"
          >
            <ErrorIcon sx={{ fontSize: 50 }} />
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ mt: 2, color: "red" }}
            >
              Something went wrong. Please try again later.
            </DialogContentText>
          </Box>
        ) : (
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        {!loading && !apiStatus && (
          <>
            <Button onClick={onDisagree} sx={{ color: "red" }}>
              {disagreeText}
            </Button>
            <Button
              onClick={handleAgreeClick}
              sx={{ color: "primary.success" }}
              autoFocus
            >
              {agreeText}
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
