import { Button, Container, Input } from "@mui/joy";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerFields, setRegisterFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handelChanges = (e) => {
    setError("");
    setRegisterFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handelRegister = async (e) => {
    e.preventDefault();
    try {
      let user = await axios.post(
        "http://localhost:5000/api/users/register",
        registerFields
      );
      console.log("user", user.data);
      if (user.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Email already exist");
      }
    }
  };
  return (
    <Container component="main" sx={{ mt: 20 }} maxWidth="xs">
      <h3>Sign up</h3>
      <Input placeholder="Name" name="name" onChange={handelChanges} />
      <Input
        sx={{ mt: 1 }}
        placeholder="Email"
        name="email"
        onChange={handelChanges}
      />
      <Input
        sx={{ mt: 1 }}
        name="password"
        placeholder="Password"
        onChange={handelChanges}
      />
      <span style={{ marginLeft: "150px" }}>Already have an account</span>{" "}
      <Link to={"/login"}>Login</Link>
      <Button sx={{ mt: 1 }} onClick={handelRegister} variant="outlined">
        Register
      </Button>
      <h5 style={{ color: "red" }}>{error}</h5>
    </Container>
  );
};

export default Register;
