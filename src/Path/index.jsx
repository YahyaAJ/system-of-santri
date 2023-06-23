import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../Pages/Profile";
// import Kurikulum from "../Pages/Kurikulum";
import Presensi from "../Pages/Presensi";
import Dashboard from "../Pages/Dashboard";
import DataSantri from "../Pages/DataSantri";
import Navbar from "../Component/Navbar";
import NotFound from "../Pages/NotFound";
import NavPath from "./NavPath";
import NavRoute from "./NavRoute";

const Path = () => {
  return (
    <div>
      <Router>
        <Navbar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="kurikulum" element={<Kurikulum />} /> */}
            <Route path="/presensi" element={<Presensi />} />
            <Route path="/data-santri" element={<DataSantri />} />
            <Route
              path="kurikulum/*"
              element={
                <NavPath>
                  <NavRoute />
                </NavPath>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Navbar>
      </Router>
    </div>
  );
};

export default Path;
