import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  Typography,
  Dialog,
  CircularProgress,
  Slide,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LoanAgreementDetails from "../../components/LoanAgreement";
import { setIsAdminLoanDetailsModalOpen } from "../../features/flags/flagsSlice";

const headerStyle = {
  position: "sticky",
  top: 0,
  bgcolor: "background.paper",
  borderBottom: "1px solid",
  borderColor: "divider",
  p: 2,
  zIndex: 1,
};

const contentStyle = {
  overflowY: "auto",
  flex: 1,
  py: 1,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AdminLoanDialog() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const isFilterOpen = useSelector(
    (state) => state.flags.isAdminLoanDetailsModalOpen
  );

  const handleClose = () => {
    dispatch(setIsAdminLoanDetailsModalOpen(false));
  };

  return (
    <Dialog
      fullScreen
      open={isFilterOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
      BackdropProps={{
        timeout: 500,
      }}
      disableRestoreFocus
    >
      <Box display="flex" flexDirection="column" height="100%">
        {/* Sticky Header */}
        <Box sx={headerStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "left",
              paddingX: 2,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", color: "text.secondary" }}
            >
              Loan Agreement Details
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Scrollable Content */}
        <Box sx={contentStyle}>
          {isLoading ? <CircularProgress /> : <LoanAgreementDetails />}
        </Box>
      </Box>
    </Dialog>
  );
}
