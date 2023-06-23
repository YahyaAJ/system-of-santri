import React from "react";
import { Route, Routes } from "react-router-dom";
import NavSprint from "../Component/NavSprint";
import Sprint1 from "../Component/Sprint/Sprint1";
import Sprint2 from "../Component/Sprint/Sprint2";
import Sprint3 from "../Component/Sprint/Sprint3";
import NotFound from "../Pages/NotFound";

const NavRoute = () => {
  return (
    <div>
      <NavSprint />
      <Routes>
        <Route path="sprint-1" element={<Sprint1 />} />
        <Route path="sprint-2" element={<Sprint2 />} />
        <Route path="sprint-3" element={<Sprint3 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </NavSprint> */}
    </div>
  );
};

export default NavRoute;
