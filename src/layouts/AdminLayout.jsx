import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../pages/Admin/components/Sidebar";
import Topbar from "../pages/Admin/components/Topbar";

const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#121212" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          color: "#fff",
          backgroundColor: "#181818",
          overflowY: "auto",
        }}
      >
        <Topbar />
        <Outlet /> {/* renders nested admin routes */}
      </Box>
    </Box>
  );
};

export default AdminLayout;
