import React from "react";
import { Box } from "@mui/material";
import LoansList from "../../components/LoansList";
import { IconButton } from "@mui/material";
import {
  PageContainer,
  PageContainerToolbar,
} from "@toolpad/core/PageContainer";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { useDispatch } from "react-redux";
import { setisHomeFilterTabOpen } from "../../features/flags/flagsSlice";
import FilterTab from "../../components/FilterTab";

function HomePageToolbar() {
  const dispatch = useDispatch();
  const toggleFilter = () => {
    dispatch(setisHomeFilterTabOpen());
  };

  return (
    <PageContainerToolbar>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={toggleFilter}>
          <FilterAltIcon />
        </IconButton>
      </Box>
    </PageContainerToolbar>
  );
}

export default function Home() {
  return (
    <PageContainer
      breadcrumbs={false}
      sx={{ width: "100%" }}
      title="Loans"
      slots={{ toolbar: HomePageToolbar }}
    >
      <Box
        sx={{
          width: "100%",
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <FilterTab />
        <LoansList />
      </Box>
    </PageContainer>
  );
}
