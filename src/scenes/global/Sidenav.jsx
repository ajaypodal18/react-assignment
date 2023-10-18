import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import { Box, Typography } from "@mui/material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
   
    <MenuItem
      display="flex"
      // active={selected === title}
      style={{ color: "white" }}
      // onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title} </Typography>
      {/* <Link to={to} /> */}
    </MenuItem>
   
  );
};

const Sidenav = () => {
  return (
    <div>
      <Box>
        <Sidebar>
          <Box display="flex" textAlign="center" px="10px" py="10px" my="20px">
            <Typography color="white"><TokenOutlinedIcon fontSize="large"/></Typography>
            <Typography fontSize={24} fontWeight={700} color="white">
              DASHBOARD
            </Typography>
          </Box>
          <Menu>
            <Box>
              <Item
                title="Dashboard"
                // to="/team"
                icon={<SpaceDashboardOutlinedIcon />}
                // selected={selected}
                // setSelected={setSelected}
              />
              
              <Item
                title="Product"
                // to="/contacts"
                icon={<ProductionQuantityLimitsOutlinedIcon />}
                // selected={selected}
                // setSelected={setSelected}
              />
              <Item
                title="Customers"
                // to="/invoice"
                icon={<AssignmentIndOutlinedIcon />}
                // selected={selected}
                // setSelected={setSelected}
              />
              <Item
                title="Income"
                // to="/form"
                icon={<AccountBalanceWalletOutlinedIcon />}
                // selected={selected}
                // setSelected={setSelected}
              />
              <Item
                title="Promote"
                // to="/calendar"
                icon={<PercentIcon />}
                // selected={selected}
                // setSelected={setSelected}
              />
              <Item
                title="Help"
                // to="/calendar"
                icon={<LiveHelpOutlinedIcon />}
                // selected={selected}
                // setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </div>
  );
};

export default Sidenav;
