import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Service = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          //   height="140"
          image="https://i.ibb.co/yPGLDXW/coxbazar-sq-1-png.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cox's Bazar
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ fontWeight: 700 }} size="small">
            Book Now
          </Button>
          <Button style={{ fontWeight: 700 }} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Service;
