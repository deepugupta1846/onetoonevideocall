import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Roompage from "./Roompage";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/room/:roomid" element={<Roompage />} />
      </Routes>
    </>
  );
}

export default Routers;
