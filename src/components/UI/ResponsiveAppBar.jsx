import {
  AppBar,
  Button,
  createTheme,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";

const ResponsiveAppBar = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>
            <button>Login</button>
            {/* <NavLink to={"/login"}>Login</NavLink> */}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default ResponsiveAppBar;
