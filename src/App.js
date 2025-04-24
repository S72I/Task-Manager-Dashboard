import React from "react";
import Dashboard from "./pages/Dashboard";
import ResponsiveAppBar from "./components/UI/ResponsiveAppBar";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import {
  AppBar,
  createTheme,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const App = () => {
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
      {/* <ResponsiveAppBar /> */}
      {/* <Dashboard /> */}
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                Logo
              </Typography>
              <Typography variant="h6" component="div" margin="20px">
                <Link
                  to="/login"
                  style={{ color: "White", textDecoration: "none" }}
                >
                  Login
                </Link>
              </Typography>
              <AccountCircle />
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
