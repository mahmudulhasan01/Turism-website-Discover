import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import BookingModel from "../Shared/BookingModel";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const PlaceDetails = () => {
  return (
    <div className="text-start ">
      <Navbar></Navbar>
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={7}>
            <img
              src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/tour-gallery-img-6-550x550.jpg"
              alt=""
            />
            <h1>Cox's Bazar</h1>
            <h6 className="text-danger">
              <i>$1200 per person</i>{" "}
            </h6>
            <p>
              An adventure is an exciting experience or undertaking that is
              potential for physical danger such as traveling, exploring,
              skydiving, mountain climbing, scuba diving, river rafting or
              participating in extreme sports. typically bold, sometimes risky.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              error aut modi, deleniti nulla maiores sequi doloremque placeat,
              aperiam reiciendis et! Possimus et consectetur perspiciatis itaque
              voluptatem accusamus asperiores debitis? Adventures may be
              activities with some
            </p>
            {/* --------------------TABLE-START-------------------------------- */}
            <div className="">
              <TableContainer
                sx={{ minWidth: 250, maxWidth: 350 }}
                component={Paper}
              >
                <Table style={{}} sx={{ maxWidth: 250 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="start">Cost/person</TableCell>
                      <TableCell align="start">Duration</TableCell>
                      <TableCell align="start">Age</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="start">3 days</TableCell>
                      <TableCell align="start">200</TableCell>
                      <TableCell align="start">20+</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {/* --------------------TABLE--END-------------------------------- */}

            {/* -----------Rating--START-------------- */}
            <div className="mt-5">
              <div className="">
                <p className="fs-1 fw-bold">Rating</p>
              </div>

              <div className="">
                <img
                  className="img-fulid"
                  src="https://i.ibb.co/PYw4Vxb/Screenshot-2021-10-31-174454.png"
                  alt=""
                />
              </div>
            </div>
            {/* -----------Rating--END-------------- */}

            {/* --------------------------GALAREY--START-------------- */}
            <div className="mt-5">
              <h1>From Our Gallery</h1>
              <h6 className="text-danger">
                <i>Be our gest and see it for your self</i>{" "}
              </h6>
              <p>
                An adventure is an exciting experience or undertaking that is
                potential for physical danger such as traveling, exploring,
                skydiving, mountain climbing, scuba diving, river rafting or
                participating in extreme sports. typically bold, sometimes
                risky. Adventures may be activities with some
              </p>
              {/* ---------------------------------------------------------------- */}
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={6} sm={4} md={4}>
                  <img
                    src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/tour-gallery-img-1-550x550.jpg"
                    height={245}
                    width={245}
                    alt=""
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                  <img
                    src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/tour-gallery-img-2-550x550.jpg"
                    height={245}
                    width={245}
                    alt=""
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                  <img
                    src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/tour-gallery-img-3-550x550.jpg"
                    height={245}
                    width={245}
                    alt=""
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                  <img
                    src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/tour-gallery-img-4-550x550.jpg"
                    height={245}
                    width={245}
                    alt=""
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                  <img
                    src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/tour-gallery-img-5-550x550.jpg"
                    height={245}
                    width={245}
                    alt=""
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                  <img
                    src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/tour-gallery-img-6-550x550.jpg"
                    height={245}
                    width={245}
                    alt=""
                  />
                </Grid>
              </Grid>
              {/* ---------------------------------------------------------------- */}
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={5}>
            <BookingModel></BookingModel>
          </Grid>
        </Grid>
      </div>
      .
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PlaceDetails;
