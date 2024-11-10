import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import LoanAgreementDetails from "../../components/LoanAgreement";
import { useSelector } from "react-redux";
import { setIsAdminLoanDetailsModalOpen } from "../../features/flags/flagsSlice";
export default function AdminLoanModal() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const isFilterOpen = useSelector(
    (state) => state.flags.isAdminLoanDetailsModalOpen
  );

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 0,
  };

  return (
    isFilterOpen && (
      <Modal
        open={isFilterOpen}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={modalStyle}>
          {/* Sticky Header */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              bgcolor: "background.paper",
              borderBottom: "1px solid",
              borderColor: "divider",
              p: 2,
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "left",
                paddingX: 2,
              }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "text.secondary",
                }}
              >
                {"Loan Agreement Details"}
              </Box>
              <IconButton
                onClick={() => {
                  dispatch(setIsAdminLoanDetailsModalOpen(false));
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Scrollable Content */}
          <Box
            sx={{
              overflowY: "auto",
              flex: 1,
              py: 1,
            }}
          >
            {isLoading ? (
              <Typography>Loading content...</Typography>
            ) : (
              <>
                <LoanAgreementDetails />
              </>
            )}
          </Box>
        </Box>
      </Modal>
    )
  );
}
