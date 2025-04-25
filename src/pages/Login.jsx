import { Button, Container, Input } from "@mui/joy";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [color, setColor] = useState(false);

  const handelLoginForm = async () => {
    try {
      let response = await axios.post(
        "http://localhost:5000/api/users/login",
        loginFields
      );
      setColor(true);
      setError("login successful");
      console.log("response", response.data);
    } catch (error) {
      setColor(false);
      if (error.response && error.response.status === 400) {
        setError("Email or Password is wrong");
      } else {
        setError("Something wrong try again");
      }
    }
  };

  const handelChange = (e) => {
    setError("");
    setLoginFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Container component="main" sx={{ mt: 20 }} maxWidth="xs">
      <h3>Sign In</h3>
      <Input placeholder="Email" name="email" onChange={handelChange} />
      <Input
        sx={{ mt: 1 }}
        name="password"
        placeholder="Password"
        onChange={handelChange}
      />
      <span style={{ marginLeft: "150px" }}>Don't have an account</span>{" "}
      <Link to={"/register"}>Register</Link>
      <Button sx={{ mt: 1 }} onClick={handelLoginForm} variant="outlined">
        Login
      </Button>
      <h5 style={{ color: color ? "green" : "red" }}>{error}</h5>
    </Container>
  );
}
