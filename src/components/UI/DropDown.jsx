import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDown = () => {
  const [tasksLImit, settasksLImit] = React.useState("");

  const handleChange = (event) => {
    settasksLImit(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Tasks Limit</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={tasksLImit}
        label="Tasks Limit"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={4}>Limit 4</MenuItem>
        <MenuItem value={10}>Limit 10</MenuItem>
        <MenuItem value={20}>Limit 20</MenuItem>
        <MenuItem value={30}>Limit 30</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropDown;
