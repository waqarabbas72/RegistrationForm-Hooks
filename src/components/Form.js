import React, { useEffect, useState } from "react";
import { TextField, Typography, Button, Grid } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

const Form = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {}, [flag]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
     alert('All Fields are mendatory')
    } else {
      setFlag(true);
    }

    if(setFlag){
        setTimeout(() => {
            setFlag(false)
        }, 2000);
    }
  };

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="gray"
        textAlign="center"
        p={2}
        mt={2}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "12px",
          }}
        >
          <pre>
            {flag ? (
              <h2 style={{color:"green"}}>Registered successfully!</h2>
            ) : (
              ""
            )}
          </pre>
          <Typography variant="h4" fontWeight="800" color="primary" my={2}>
            Registration Form
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              label="Enter your name"
              color="primary"
              type="text"
              fullWidth
              margin="normal"
              onChange={handleData}
              value={inputData.name}
              name="name"
            />
            <TextField
              variant="outlined"
              label="Enter your Email"
              color="primary"
              type="email"
              fullWidth
              margin="normal"
              onChange={handleData}
              value={inputData.email}
              name="email"
            />
           <div style={{display:"flex", alignItems:"center"}}>
           <TextField
              variant="outlined"
              label="Enter your password"
              color="primary"
              type="password"
              fullWidth
              margin="normal"
              onChange={handleData}
              value={inputData.password}
              name="password"
            />
            <VisibilityIcon />
           </div>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </form>
        </div>
      </Grid>
    </>
  );
};

export default Form;
