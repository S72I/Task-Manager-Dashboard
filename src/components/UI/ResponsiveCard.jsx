// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import { Box, Button } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const ResponsiveCard = ({ task, onDelete }) => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const navigate = useNavigate();

//   const handleToggle = () => setIsOpen(!isOpen);

//   const handelEdit = () => navigate(`/updateTasks/${task._id}`);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/api/tasks/delete/${task._id}`);
//       alert("Task deleted!");
//     } catch (error) {
//       console.error("Delete error:", error);
//     }
//   };

//   return (
//     <Box>
//       <Button
//         fullWidth
//         onClick={handleToggle}
//         endIcon={
//           <ArrowForwardIosIcon
//             sx={{ transform: isOpen ? "rotate(90deg)" : "none" }}
//           />
//         }
//         sx={{ border: "0.5px solid grey", height: "100px", mt: 1 }}
//       >
//         {task.title}
//       </Button>
//       {isOpen && (
//         <Box sx={{ pl: 2, mt: 1 }}>
//           <Typography>{task.description}</Typography>

//           <Box sx={{ display: "flex", gap: 2 }}>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               <span>
//                 <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
//                 {task.description}
//               </span>
//             </Typography>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               <span>
//                 <span style={{ fontWeight: "bold" }}>Status:</span>{" "}
//                 {task.status}
//               </span>
//             </Typography>
//           </Box>
//           <Box sx={{ display: "flex", gap: 2 }}>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               <span>
//                 <span style={{ fontWeight: "bold" }}>Priority:</span>{" "}
//                 {task.priority}
//               </span>
//             </Typography>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               <span>
//                 <span style={{ fontWeight: "bold" }}>DueDate:</span>{" "}
//                 {new Date(task.dueDate).toLocaleDateString("en-IN", {
//                   day: "2-digit",
//                   month: "2-digit",
//                   year: "numeric",
//                 })}
//               </span>
//             </Typography>
//             <Button variant="contained" onClick={handelEdit} color="success">
//               Edit
//             </Button>
//             <Button variant="contained" color="error" onClick={handleDelete}>
//               Delete
//             </Button>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ResponsiveCard;

import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResponsiveCard = ({ task, onDelete }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setIsOpen(!isOpen);

  const handleEdit = () => navigate(`/updateTasks/${task._id}`);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/delete/${task._id}`);
      alert("Task deleted!");
      onDelete(task._id); // Call the prop to update parent state
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete task");
    }
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Button
        fullWidth
        onClick={handleToggle}
        endIcon={
          <ArrowForwardIosIcon
            sx={{
              transform: isOpen ? "rotate(90deg)" : "none",
              transition: "transform 0.3s ease",
            }}
          />
        }
        sx={{
          border: "0.5px solid grey",
          height: "100px",
          mt: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {task.title}
        </Typography>
      </Button>
      {isOpen && (
        <Box sx={{ pl: 2, mt: 1 }}>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <span style={{ fontWeight: "bold" }}>Status:</span> {task.status}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <span style={{ fontWeight: "bold" }}>Priority:</span>{" "}
              {task.priority}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <span style={{ fontWeight: "bold" }}>Due Date:</span>
              {new Date(task.dueDate).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
              {task.description}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" onClick={handleEdit} color="success">
              Edit
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ResponsiveCard;
