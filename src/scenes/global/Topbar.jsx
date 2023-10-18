import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, Typography } from "@mui/material";

const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        <Typography fontSize={24} fontWeight={700}>Hello Daniel,</Typography>
      </Box>
      <Box display="flex" backgroundColor="#fff !important" borderRadius="3px">
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 0, flex: 1 }} placeholder="Search" />
      </Box>
    </Box>
  );
};

export default Topbar;
