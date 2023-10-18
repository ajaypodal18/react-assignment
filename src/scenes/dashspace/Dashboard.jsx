import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Piechart from "../../components/Piechart";
import Barchart from "../../components/Barchart";
import {
  CardHeader,
  Divider,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { green } from "@mui/material/colors";
import BasicTable from "../../components/Datatable";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Dashboard() {
  const [duration, setDuration] = useState("");
  const [days, setDays] = useState("");

  const handleChange = (event) => {
    setDuration(event.target.value);
  };

  const handleChange2 = (event) => {
    setDays(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1, padding: "15px", overflow: "hidden" }}>
      <Grid container rowSpacing={3} columnSpacing={8}>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="card-icon green">
                <CurrencyExchangeOutlinedIcon
                  fontSize="inherit"
                  style={{ color: "#189618" }}
                />
              </div>
              <div>
                <Typography className="card-head">Earning</Typography>
                <Typography variant="h5" fontWeight={600}>
                  $198k
                </Typography>
                <Typography>
                  <span style={{ color: "green", fontWeight: "600" }}>
                    <ArrowUpwardRoundedIcon fontSize="small" /> 37.8%
                  </span>{" "}
                  this month
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="card-icon purple">
                <ListAltOutlinedIcon
                  fontSize="inherit"
                  style={{ color: "#a02fa6f0" }}
                />
              </div>
              <div>
                <Typography className="card-head">Orders</Typography>
                <Typography variant="h5" fontWeight={600}>
                  $2.4k
                </Typography>
                <Typography>
                  <span style={{ color: "red", fontWeight: "600" }}>
                    <ArrowDownwardRoundedIcon fontSize="small" /> 2%
                  </span>{" "}
                  this month
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="card-icon blue">
                <AccountBalanceWalletOutlinedIcon
                  fontSize="inherit"
                  style={{ color: "#0000ffad" }}
                />
              </div>
              <div>
                <Typography className="card-head">Balance</Typography>
                <Typography variant="h5" fontWeight={600}>
                  $2.4k
                </Typography>
                <Typography>
                  <span style={{ color: "red", fontWeight: "600" }}>
                    <ArrowDownwardRoundedIcon fontSize="small" /> 2%
                  </span>{" "}
                  this month
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="card-icon red">
                <LocalMallOutlinedIcon
                  fontSize="inherit"
                  style={{ color: "#ef1414c7" }}
                />
              </div>
              <div>
                <Typography className="card-head">Total Sales</Typography>
                <Typography variant="h5" fontWeight={600}>
                  $89k
                </Typography>
                <Typography>
                  <span style={{ color: "green", fontWeight: "600" }}>
                    <ArrowUpwardRoundedIcon fontSize="small" /> 11%
                  </span>{" "}
                  this week
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Graphs and Chart */}

        <Grid item xs={6} md={8}>
          <Card style={{ height: "45vh" }}>
            <CardContent>
              <Box display="flex" style={{ justifyContent: "space-between" }}>
                <CardHeader title="Overview" subheader="Monthly Earning" />
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Duration
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={duration}
                      label="duration"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Monthly"}>Monthly</MenuItem>
                      <MenuItem value={"Quarterly"}>Quarterly</MenuItem>
                      <MenuItem value={"Half-Yearly"}>Half-Yearly</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Barchart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card style={{ height: "45vh" }}>
            <CardContent>
              <CardHeader
                title="Customers"
                subheader="Customers that buy products"
              />
              <Piechart />
            </CardContent>
          </Card>
        </Grid>

        {/* Graphs and Chart */}

        <Grid item xs={6} md={12}>
          <Card>
            <CardContent>
              <Box display="flex" style={{ justifyContent: "space-between" }}>
                <CardHeader title="Product Sell" />
                <div style={{display:'flex'}}>
                  <Box
                    display="flex"
                    backgroundColor="#ececec !important"
                    borderRadius="3px"
                    mr={2}
                  >
                    <IconButton type="button" sx={{ p: 1 }}>
                      <SearchIcon />
                    </IconButton>
                    <InputBase sx={{ ml: 0, flex: 1 }} placeholder="Search" />
                  </Box>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select2-label">
                        Days
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select2-label"
                        id="demo-simple-select2"
                        value={days}
                        label="days"
                        onChange={handleChange2}
                      >
                        <MenuItem value={"last 30 days"}>last 30 days</MenuItem>
                        <MenuItem value={"last 60 days"}>last 60 days</MenuItem>
                        <MenuItem value={"last 90 days"}>last 90 days</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </Box>
              <Divider />
              <BasicTable />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
