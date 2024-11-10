import React, { useState } from "react";
import { Tooltip, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export default function ClickableTooltip({ description }) {
  const [open, setOpen] = useState(false);

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  return (
    <Tooltip
      title={description}
      arrow
      open={open}
      onClose={handleTooltipClose}
      onOpen={handleTooltipOpen}
    >
      <IconButton
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        onMouseEnter={handleTooltipOpen}
        onMouseLeave={handleTooltipClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
        }}
      >
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
}
