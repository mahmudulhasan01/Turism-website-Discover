import { Container, Grid } from "@mui/material";
import React from "react";
import Service from "./Service/Service";

const Services = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mt-3">
      <Container>
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Service></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
