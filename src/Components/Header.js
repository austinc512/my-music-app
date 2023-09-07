import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
      <Link to="/*">Signin Page</Link>
    </Box>
  );
}

// this will change the URL in the address bar.
// which is picked up by the BrowserRouter component
// which calls the Router so the <Routes> component
// in the Router will return the correct component
// to the <BrowserRouter>

// in this case, <Signin>
// the Link component in its simplest form just takes a "to" prop
// that indicates the path

/*

Links can send an object of properties through the to prop, which makes them more powerful. for example:

<Link
  to={{
      pathname: "/dash",
      search: "?sort=name",
      hash: "#the-hash",
      state: { fromHome: true }
  }}
/>


*/
