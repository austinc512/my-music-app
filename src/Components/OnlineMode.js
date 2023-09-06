import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function OnlineMode(props) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Online Mode
        </Typography>
        <Typography variant="body2">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <Switch {...label} onChange={() => props.setIsOnline(!props.isOnline)} />
    </React.Fragment>
  );

  return (
    <Box
      // sx={{
      //   minWidth: 350,
      //   minHeight: 200,
      //   maxWidth: 400,
      //   maxHeight: 250,
      // }}
      className="box-component"
    >
      <Card className="card" variant="outlined">
        {card}
      </Card>
    </Box>
  );
}
