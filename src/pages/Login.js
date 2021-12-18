import React from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <center>
        <h2>Login</h2>
        <TextField variant="outlined" label="Username" />
        <br />
        <br />
        <TextField variant="outlined" label="Password" />
        <br />
        <br />
        <nav>
          <Button variant="contained">
            <Link to="/thunk">Login</Link>
          </Button>
        </nav>
      </center>
    </>
  );
};

export default Login;
