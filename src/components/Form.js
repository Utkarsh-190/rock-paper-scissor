import { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Form() {
  const firstNameRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });

  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
    console.log("ref", firstNameRef);
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 3 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChanges}
                inputRef={firstNameRef}
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChanges}
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                name="age"
                value={formData.age}
                onChange={handleChanges}
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <TextField
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                name="gender"
                value={formData.gender}
                onChange={handleChanges}
              />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Button
                variant="contained"
                color="success"
                style={{ width: "50%" }}
              >
                SUBMIT
              </Button>
            </Item>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
