import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Sidebar = () => {
  const [openStates, setOpenStates] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
  });

  const handleToggle = (key) => {
    setOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const buttons = [
    { key: "btn1", label: "Back 1" },
    { key: "btn2", label: "Back 2" },
    { key: "btn3", label: "Back 3" },
  ];

  return (
    <Box>
      {buttons.map(({ key, label }) => (
        <Box key={key}>
          <Button
            fullWidth
            onClick={() => handleToggle(key)}
            endIcon={
              <ArrowForwardIosIcon
                sx={{
                  transform: openStates[key] ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              />
            }
            sx={{
              justifyContent: "space-between",
              textAlign: "left",
              paddingRight: 2,
              mt: 1,
            }}
          >
            {label}
          </Button>

          {openStates[key] && (
            <Box sx={{ pl: 2, mt: 1 }}>
              {key === "btn1" ? (
                <>
                  <div>Option 1</div>
                </>
              ) : key === "btn2" ? (
                <>
                  <div>Option 1</div>
                  <div>Option 2</div>
                </>
              ) : (
                <>
                  <div>Option 1</div>
                  <div>Option 2</div>
                  <div>Option 3</div>
                </>
              )}
            </Box>
          )}
        </Box>
      ))}
      <Typography>Search bar</Typography>
    </Box>
  );
};

export default Sidebar;
