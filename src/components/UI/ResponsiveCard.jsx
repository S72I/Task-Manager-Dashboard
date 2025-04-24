import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ResponsiveCard = ({ key , tasks }) => {
  const [openStates, setOpenStates] = React.useState({});

  const handleToggle = (key) => {
    setOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    // <Card sx={{ maxWidth: 700 }}>
    //   <CardActionArea>
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {tasks.title}
    //       </Typography>
    //       <Box sx={{ display: "flex", gap: 2 }}>
    //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //           {tasks.description}
    //         </Typography>
    //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //           Status: {tasks.status}
    //         </Typography>
    //       </Box>
    //       <Box sx={{ display: "flex", gap: 2 }}>
    //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //           Priority: {tasks.priority}
    //         </Typography>
    //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //           {tasks.dueDate}
    //         </Typography>
    //       </Box>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>

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
          paddingRight: 2,
          mt: 1,
          color: "black",
          border: "0.5px solid grey",
          height: "100px",
        }}
      >
        {" "}
        {tasks.title}
      </Button>

      {openStates[key] && (
        <Box sx={{ pl: 2, mt: 1 }}>
          {key === key ? (
            <>
              <div>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <span>
                      <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                      {tasks.description}
                    </span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <span>
                      <span style={{ fontWeight: "bold" }}>Status:</span>{" "}
                      {tasks.status}
                    </span>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <span>
                      <span style={{ fontWeight: "bold" }}>Priority:</span>{" "}
                      {tasks.priority}
                    </span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <span>
                      <span style={{ fontWeight: "bold" }}>DueDate:</span>{" "}
                      {tasks.dueDate}
                    </span>
                  </Typography>
                </Box>
              </div>
            </>
          ) : (
            ""
          )}
        </Box>
      )}
    </Box>
  );
};

export default ResponsiveCard;
