import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div className="mt-3">
      <h2 className="my-3 mb-5 py-2 fw-bolder text-center text-danger">
        Most Popular Destination
      </h2>
      <Container>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {places.slice(0, 6).map((place) => (
            <Grid place xs={12} sm={6} md={4} key={place._id}>
              <Service place={place}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
