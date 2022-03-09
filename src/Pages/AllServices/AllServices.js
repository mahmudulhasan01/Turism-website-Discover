import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const AllServices = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <Box>
      <Navbar></Navbar>
      <Typography style={{ marginBottom: 50, marginTop: 20 }} variant="h3">
        This is All Services
      </Typography>

      <Container>
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {places.map((place) => (
            <Grid place xs={12} sm={6} md={4} key={place._id}>
              {/*_________________________________Card--start_________________________________*/}
              <Box style={{ marginBottom: 20 }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    //   height="140"
                    image={place.img}
                  />
                  <CardContent>
                    <Typography
                      style={{ fontWeight: "bold" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {place.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button style={{ fontWeight: 700 }} size="small">
                      Book Now
                    </Button>
                    <Link
                      to={`/places/:${place._id}`}
                      className="text-decoration-none"
                    >
                      <Button style={{ fontWeight: 700 }} size="small">
                        Details
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Box>
              {/* -------------------------Card--End------------------------ */}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default AllServices;
