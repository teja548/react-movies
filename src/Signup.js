import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 90,
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    height: 430,
    width: 370,
    backgroundColor: "#eeeeee",
    padding: 40,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },

  heading: {
    color: "#002884",
    display: "block",
    marginLeft: 60,
    marginRight: "auto",
    fontSize: 30,
    fontWeight: "bold",
  },
  subheading: {
    color: "#002884",
    textAlign: "left",
    fontSize: 15,
  },

  image: {
    height: 100,
    width: 100,
  },
  div1: {
    display: "flex",
    flexDirection: "row",
  },
  upload: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  div2: {
    marginLeft: 70,
  },
  button: {
    width: 230,
  },
}));

function Signup() {
  const classes = useStyles();
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    profession: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("User registered successfully!");
    routeChange("/login");
  };

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.div1}>
          <Paper className={classes.paper}>
            <div className={classes.div2}>
              <Typography className={classes.heading}> Sign Up</Typography>
              <br />
              <Typography className={classes.subheading}>
                {" "}
                Enter UserName{" "}
              </Typography>

              <TextField
                variant="outlined"
                type="text"
                name="name"
                placeholder="Enter UserName"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <br />
              <Typography className={classes.subheading}>
                {" "}
                Enter Mail{" "}
              </Typography>

              <TextField
                variant="outlined"
                type="text"
                name="email"
                placeholder="Enter Mail"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <br />
              <Typography className={classes.subheading}>
                {" "}
                Enter Password{" "}
              </Typography>
              <TextField
                variant="outlined"
                type="password"
                name="password"
                placeholder="Enter Password "
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <br />

              <Typography className={classes.subheading}>
                {" "}
                Enter Phone{" "}
              </Typography>
              <TextField
                variant="outlined"
                type="text"
                name="phone"
                placeholder="Enter phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <br />

              <Typography className={classes.subheading}>
                {" "}
                Select profession{" "}
              </Typography>
              <Select
                name="profession"
                variant="outlined"
                labelId="select-label"
                id="select"
                value={formData.profession}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="teacher">Teacher</MenuItem>
                <MenuItem value="engineer">Engineer</MenuItem>
                <MenuItem value="doctor">Doctor</MenuItem>
              </Select>

              <br />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                {" "}
                Sign in
              </Button>
              <br />
              <Link to="/login">Already have an account? Sign In</Link>
            </div>
          </Paper>
        </div>
      </form>
    </div>
  );
}

export default Signup;
