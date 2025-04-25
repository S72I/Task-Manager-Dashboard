// import {
//   Button,
//   Container,
//   FormControl,
//   FormLabel,
//   Input,
//   MenuItem,
//   Select,
//   Textarea,
// } from "@mui/joy";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const UpdateTasks = () => {
//   const { _id } = useParams();
//   const [task, setTask] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//     priority: "high",
//     status: "pending",
//   });

//   const getTaskById = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/tasks/${_id}`
//       );

//       const formattedTask = {
//         ...response.data,
//         dueDate: response.data.dueDate.split("T")[0],
//         // priority: response.data.priority || "high",
//         // status: response.data.status || "pending",
//       };

//       setTask(formattedTask);
//     } catch (error) {
//       console.error("Error fetching task:", error);
//     }
//   };

//   // Handle changes in form fields
//   const handleChange = (e) => {
//     if (!e || !e.target) return;
//     setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/api/tasks/update/${_id}`, task);
//       alert("Task updated successfully!");
//     } catch (error) {
//       console.error("Error updating task:", error);
//     }
//   };

//   useEffect(() => {
//     getTaskById();
//   }, []);

//   return (
//     <Container component="main" sx={{ mt: 2 }} maxWidth="xs">
//       <h3>Update Task</h3>
//       <form onSubmit={handleSubmit}>
//         <FormControl sx={{ mb: 2 }}>
//           <FormLabel>Title</FormLabel>
//           <Input
//             name="title"
//             value={task.title}
//             onChange={handleChange}
//             required
//           />
//         </FormControl>

//         <FormControl sx={{ mb: 2 }}>
//           <FormLabel>Description</FormLabel>
//           <Textarea
//             name="description"
//             value={task.description}
//             onChange={handleChange}
//             minRows={3}
//           />
//         </FormControl>

//         <FormControl sx={{ mb: 2 }}>
//           <FormLabel>Due Date</FormLabel>
//           <Input
//             type="date"
//             name="dueDate"
//             value={task.dueDate}
//             onChange={handleChange}
//             required
//           />
//         </FormControl>

//         <FormControl sx={{ mb: 2 }}>
//           <FormLabel>Priority</FormLabel>
//           <Select
//             name="priority"
//             value={task.priority}
//             onChange={(e, newValue) =>
//               setTask((prev) => ({ ...prev, priority: newValue }))
//             }
//           >
//             <MenuItem value="high">High</MenuItem>
//             <MenuItem value="medium">Medium</MenuItem>
//             <MenuItem value="low">Low</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl sx={{ mb: 3 }}>
//           <FormLabel>Status</FormLabel>
//           <Select
//             name="status"
//             value={task.status}
//             onChange={(e, newValue) =>
//               setTask((prev) => ({ ...prev, status: newValue }))
//             }
//           >
//             <MenuItem value="pending">Pending</MenuItem>
//             <MenuItem value="completed">Completed</MenuItem>
//           </Select>
//         </FormControl>

//         <Button type="submit" fullWidth variant="outlined">
//           Update Task
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default UpdateTasks;
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
  Select,
  Textarea,
} from "@mui/joy";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DueDatePicker from "../UI/DueDatePicker";

const UpdateTasks = () => {
  const { _id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "high",
    status: "pending",
  });

  const getTaskById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/tasks/${_id}`
      );

      const formattedTask = {
        ...response.data,
        dueDate: response.data.dueDate.split("T")[0],
        // priority: response.data.priority || "high",
        // status: response.data.status || "pending",
      };
      setTask(formattedTask);
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  // Handle changes in form fields
  const handleChange = (e) => {
    if (!e || !e.target) return;
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/tasks/update/${_id}`, task);
      alert("Task updated successfully!");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  useEffect(() => {
    getTaskById();
  }, []);

  return (
    <Container component="main" sx={{ mt: 2 }} maxWidth="xs">
      <h3>Update Task</h3>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            minRows={3}
          />
        </FormControl>

        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Due Date</FormLabel>
          {/* <Input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          /> */}
          <DueDatePicker duedate={task.dueDate} />
        </FormControl>

        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Priority</FormLabel>
          <Select name="priority" value={task.priority} onChange={handleChange}>
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="low">Low</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ mb: 3 }}>
          <FormLabel>Status</FormLabel>
          <Select name="status" value={task.status} onChange={handleChange}>
            <MenuItem value={task.status}>Pending</MenuItem>
            <MenuItem value={task.status}>Completed</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" fullWidth variant="outlined">
          Update Task
        </Button>
      </form>
    </Container>
  );
};

export default UpdateTasks;
