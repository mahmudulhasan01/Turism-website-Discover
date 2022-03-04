import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ServiceBannar = () => {
  return (
    <div className="my-5 ">
      <Container>
        <Grid container spacing={2} style={{ backgroundColor: "#EDEDEA" }}>
          <Grid
            className="d-flex justify-content-start align-items-center"
            item
            xs={12}
            sm={8}
            md={8}
          >
            <div>
              <h3 className="text-danger fw-bolder pt-3">
                Book your dream vacation now
              </h3>
              <p className="px-5 fs-5 text-start">
                Discovery World is Milwaukee’s premier, non-profit science and
                technology center for the whole family. Our 130,000 sq. ft.
                center offers fun and educational experiences and features
                interactive exhibits, the Reiman Aquarium, educational labs and
                programs, and other exciting activities.
              </p>
              <Link>
                <button type="button" class="btn btn-danger text-start fw-bold">
                  Our All Location
                </button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <img
              className="mt-n1"
              src="https://images.unsplash.com/photo-1633712132667-663554221b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFkdmVudHVyZSUyMHRyYXZlbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              height={340}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ServiceBannar;
