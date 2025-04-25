// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import ResponsiveCard from "../components/UI/ResponsiveCard";
// import { Box } from "@mui/joy";

// const AxiosData = ({ priorityValue }) => {
//   const [tasks, setTasks] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedOption, setSelectedOption] = useState(4);

//   const fetchTasks = async (pageNumber) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/tasks/pagination?page=${pageNumber}&limit=${selectedOption}`
//       );

//       setTasks(response.data.allTasks || []);
//       setTotalPages(response.data.totalPages || 1);
//     } catch (error) {
//       console.error("Failed to fetch tasks:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchTasks(page);
//   }, [page, selectedOption]);

//   const handlePrev = () => {
//     if (page > 1) setPage((prev) => prev - 1);
//   };

//   const handleNext = () => {
//     if (page < totalPages) setPage((prev) => prev + 1);
//     console.log(priorityValue);
//   };

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//     console.log("Selected option:", event.target.value);
//   };

//   return (
//     <>
//       {tasks.length === 0 ? (
//         <h2>No Tasks found</h2>
//       ) : (
//         <Box sx={{ gap: 2, flexWrap: "wrap" }}>
//           {tasks.map((task) => (
//             <ResponsiveCard key={task._id} task={task} />
//           ))}
//         </Box>
//       )}

//       <Box sx={{ marginTop: 2 }}>
//         <button onClick={handlePrev} disabled={page === 1}>
//           Previous
//         </button>

//         <span style={{ margin: "0 10px" }}>
//           Page {page} of {totalPages}
//         </span>

//         <button onClick={handleNext} disabled={page === totalPages}>
//           Next
//         </button>

//         <select value={selectedOption} onChange={handleOptionChange}>
//           <option value="4">limit 4</option>
//           <option value="10">limit 10</option>
//           <option value="15">limit 15</option>
//         </select>
//       </Box>
//     </>
//   );
// };

// export default AxiosData;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ResponsiveCard from "../components/UI/ResponsiveCard";
import { Box } from "@mui/joy";

const AxiosData = ({ priorityValue, orderValue }) => {
  const [tasks, setTasks] = useState([]);
  // const [sortedTasks, setSortedTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedOption, setSelectedOption] = useState(4);


  const fetchData = async () => {
    try {
      // Fetch the sorted tasks based on priority and order
      const sortedResponse = await axios.get(
        `http://localhost:5000/api/tasks/sort`,
        {
          params: {
            priority: priorityValue,
            order: orderValue,
          },
        }
      );

      const sortedData = sortedResponse.data;

      // Set the sorted tasks into state
      // setSortedTasks(sortedData);

      // Calculate total pages for pagination based on the length of the sorted data
      const totalPageCount = Math.ceil(sortedData.length / selectedOption);
      setTotalPages(totalPageCount);

      // Apply pagination based on the current page
      paginateTasks(sortedData, page, selectedOption);
    } catch (error) {
      console.error("Failed to fetch tasks:", error.message);
    }
  };

  
  useEffect(() => {
    fetchData(); // Fetch data when priorityValue, orderValue, page, or selectedOption changes
  }, [priorityValue, orderValue, page, selectedOption]);

  const paginateTasks = (tasks, currentPage, limit) => {
    const startIdx = (currentPage - 1) * limit;
    const endIdx = startIdx + limit;

    // Slice the sorted tasks to match the current page and limit
    const paginatedTasks = tasks.slice(startIdx, endIdx);
    setTasks(paginatedTasks);
  };

  const handleDeleteSuccess = (deletedId) => {
    setTasks(tasks.filter((task) => task._id !== deletedId));
  };

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(Number(event.target.value));
    setPage(1); // Reset to page 1 when limit changes
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <h2>No Tasks found</h2>
      ) : (
        <Box sx={{ gap: 2, flexWrap: "wrap" }}>
          {tasks.map((task) => (
            <ResponsiveCard
              onDelete={handleDeleteSuccess}
              key={task._id}
              task={task}
            />
          ))}
        </Box>
      )}

      <Box sx={{ marginTop: 2 }}>
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button onClick={handleNext} disabled={page === totalPages}>
          Next
        </button>

        <select value={selectedOption} onChange={handleOptionChange}>
          <option value={4}>limit 4</option>
          <option value={10}>limit 10</option>
          <option value={15}>limit 15</option>
        </select>
      </Box>
    </div>
  );
};

export default AxiosData;
