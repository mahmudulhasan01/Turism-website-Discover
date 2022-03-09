import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const MyBooking = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Typography style={{ marginBottom: 50, marginTop: 20 }} variant="h3">
        My Booking
      </Typography>
      <Footer></Footer>
    </Box>
  );
};

export default MyBooking;
