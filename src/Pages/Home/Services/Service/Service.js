import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Service = ({ place }) => {
  return (
    <Box>
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
          <Link to={`/places/:${place._id}`} className="text-decoration-none">
            <Button style={{ fontWeight: 700 }} size="small">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Service;
