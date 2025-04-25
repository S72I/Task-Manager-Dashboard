import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DueDatePicker = ({ duedate }) => {
  const [dueDate, setDueDate] = useState(duedate);

  return (
    <DatePicker
      selected={dueDate}
      onChange={(date) => setDueDate(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select due date"
    />
  );
};

export default DueDatePicker;
