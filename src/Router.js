// Here is where we are importing to the two main components we need from the React Router package.
import React from "react";
import { Routes, Route } from "react-router-dom";

// Local imports. Import components we built ourselves
// import Home from "./Home";
// import Dashboard from "./components/Dashboard";
// import Profile from "./components/Profile";

import Signin from "./Components/Signin";
import MasterVolume from "./Components/MasterVolume";
import SoundQuality from "./Components/soundQuality";
import App from "./App.js";

const Router = () => {
  return (
    //Then we use Routes and Route. Routes acts like a regular JS Switch* Statement
    //depending on the path in the URL, one of these Routes will be returned and their component rendered
    <Routes>
      <Route path="/*" element={<Signin />} />
      <Route path="/volume" element={<MasterVolume />} />
      <Route path="/soundquality" element={<SoundQuality />} />
      <Route path="/home" element={<App />} />
    </Routes>
  );
};

//Don't forget to export your newly create Router component
export default Router;
