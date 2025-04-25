// import { Stack } from "@mui/joy";
// import React, { useState } from "react";
// import AxiosData from "../../utils/AxiosData";
// import axios from "axios";

// const Sidebar = () => {
//   const [selectedValue, setSelectedValue] = useState(null);

//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     setSelectedValue(checked ? value : null);

//     if (checked) {
//       console.log("Selected value:", value);
//       sortTasks([value]);
//       <AxiosData priorityValue={[value]} />;
//     }
//   };

//   const sortTasks = async (priorityValues) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/tasks/sort?priority=${priorityValues}`
//       );
//       console.log(response.data);
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         console.log("No data found");
//       }
//     }
//   };

//   return (
//     <div>
//       <h4>Sorting</h4>
//       <Stack sx={{ mt: 2 }}>
//         <label>
//           <input
//             name="priority"
//             value="high"
//             type="checkbox"
//             checked={selectedValue === "high"}
//             onChange={handleCheckboxChange}
//           />
//           High
//         </label>
//         <label>
//           <input
//             name="priority"
//             value="low"
//             type="checkbox"
//             checked={selectedValue === "low"}
//             onChange={handleCheckboxChange}
//           />
//           Low
//         </label>
//         <label>
//           <input
//             name="priority"
//             value="medium"
//             type="checkbox"
//             checked={selectedValue === "medium"}
//             onChange={handleCheckboxChange}
//           />
//           Medium
//         </label>
//       </Stack>
//     </div>
//   );
// };


import { Stack } from "@mui/joy";
import React from "react";

const Sidebar = ({ selectedValue, onSelect }) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    onSelect(checked ? value : null);
  };

  return (
    <div>
      <h4>Sorting</h4>
      <Stack sx={{ mt: 2 }}>
        <label>
          <input
            name="priority"
            value="high"
            type="checkbox"
            checked={selectedValue === "high"}
            onChange={handleCheckboxChange}
          />
          High
        </label>
        <label>
          <input
            name="priority"
            value="medium"
            type="checkbox"
            checked={selectedValue === "medium"}
            onChange={handleCheckboxChange}
          />
          Medium
        </label>
        <label>
          <input
            name="priority"
            value="low"
            type="checkbox"
            checked={selectedValue === "low"}
            onChange={handleCheckboxChange}
          />
          Low
        </label>
      </Stack>
    </div>
  );
};

export default Sidebar;
