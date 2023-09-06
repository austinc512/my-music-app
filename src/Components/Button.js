import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../App.css";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        className="main-btn"
        onClick={() => {
          console.log("Button clicked!!");
        }}
      >
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
