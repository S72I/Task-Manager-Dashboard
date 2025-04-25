// import { Container } from "@mui/material";
// import React from "react";
// import { Box } from "@mui/material";

// import Sidebar from "../components/UI/Sidebar";
// import AxiosData from "../utils/AxiosData";
// const Dashboard = () => {
//   return (
//     <>
//       <Container
//         maxWidth="xl"
//         sx={{ display: "flex", bgcolor: "#fff", height: "100vh" }}
//       >
//         <Box width="20%" height="100vh">
//           <Sidebar />
//         </Box>
//         <Box width="80%" height="100vh" sx={{ pl: 20, mt: 1 }}>
//           <AxiosData />
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Dashboard;
import { Container, Box } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../components/UI/Sidebar";
import AxiosData from "../utils/AxiosData";

const Dashboard = () => {
  const [priorityFilter, setPriorityFilter] = useState(null);

  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", bgcolor: "#fff", height: "100vh" }}
    >
      <Box width="20%" height="100vh">
        <Sidebar selectedValue={priorityFilter} onSelect={setPriorityFilter} />
      </Box>
      <Box width="80%" height="100vh" sx={{ pl: 20, mt: 1 }}>
        <AxiosData priorityValue={priorityFilter} />
      </Box>
    </Container>
  );
};

export default Dashboard;
