import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CategoryIcon from "@mui/icons-material/Category";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoriesMenuEl, setCategoriesMenuEl] = useState(null);
  const open = Boolean(anchorEl);
  const openCategories = Boolean(categoriesMenuEl);
  const navigate = useNavigate();

  const handleSettingsClick = (event) => setAnchorEl(event.currentTarget);
  const handleSettingsClose = () => {
    setAnchorEl(null);
    setCategoriesMenuEl(null);
  };

  const handleCategoriesOpen = (event) =>
    setCategoriesMenuEl(event.currentTarget);
  const handleCategoriesClose = () => setCategoriesMenuEl(null);

  const handleNavigate = (path) => {
    navigate(path);
    handleSettingsClose();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
        p: 2,
        bgcolor: "#1f1f1f",
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: "white" }}>
        Welcome, Admin
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="body2" sx={{ color: "gray" }}>
          FH General Equipments
        </Typography>

        {/* Settings Button */}
        <IconButton onClick={handleSettingsClick} sx={{ color: "white" }}>
          <SettingsIcon />
        </IconButton>

        {/* Main Settings Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleSettingsClose}
          PaperProps={{
            sx: {
              bgcolor: "#2b2b2b",
              color: "white",
              borderRadius: 2,
            },
          }}
        >
          {/* Categories Item with Submenu */}
          {/* Categories Item with Submenu */}
          <MenuItem
            onMouseEnter={handleCategoriesOpen}
            onMouseLeave={handleCategoriesClose}
            sx={{
              justifyContent: "space-between",
              position: "relative",
              "&:hover": { backgroundColor: "#383838" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CategoryIcon fontSize="small" />
              Categories
            </Box>
            <ArrowRightIcon fontSize="small" />

            {/* Submenu (perfect alignment fix) */}
            <Menu
              anchorEl={categoriesMenuEl}
              open={openCategories}
              onClose={handleCategoriesClose}
              disableAutoFocusItem
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                sx: {
                  bgcolor: "#2b2b2b",
                  color: "white",
                  borderRadius: 2,
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.4)",
                  mt: -1,
                  ml: 0.5,
                  minWidth: 180,
                  transition: "opacity 0.15s ease-in-out",
                },
              }}
              MenuListProps={{
                onMouseEnter: () => setCategoriesMenuEl(categoriesMenuEl),
                onMouseLeave: handleCategoriesClose,
              }}
            >
              <MenuItem
                onClick={() => handleNavigate("/admin/categories/list")}
              >
                <ListItemIcon>
                  <CategoryIcon sx={{ color: "white" }} fontSize="small" />
                </ListItemIcon>
                View Categories
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/admin/categories/add")}>
                <ListItemIcon>
                  <AddCircleOutlineIcon
                    sx={{ color: "white" }}
                    fontSize="small"
                  />
                </ListItemIcon>
                Add Category
              </MenuItem>
            </Menu>
          </MenuItem>

          <MenuItem onClick={() => handleNavigate("/admin/change-settings")}>
            <ListItemIcon>
              <PersonIcon sx={{ color: "white" }} fontSize="small" />
            </ListItemIcon>
            Account Settings
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
