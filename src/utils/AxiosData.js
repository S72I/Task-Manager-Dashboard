import axios from "axios";
import React, { useEffect, useState } from "react";
import ResponsiveCard from "../components/UI/ResponsiveCard";
import { Box } from "@mui/joy";

const AxiosData = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTasks = async (pageNumber) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/tasks/pagination?page=${pageNumber}&limit=4`
      );

      setTasks(response.data.allTasks || []);
      setTotalPages(response.data.totalPages || 1); 
    } catch (error) {
      console.error("Failed to fetch tasks:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks(page);
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <>
      {tasks.length === 0 ? (
        <h2>No Tasks found</h2>
      ) : (
        <Box sx={{ gap: 2, flexWrap: "wrap" }}>
          {tasks.map((task, index) => (
            <ResponsiveCard key={index} tasks={task} />
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
      </Box>
    </>
  );
};

export default AxiosData;













