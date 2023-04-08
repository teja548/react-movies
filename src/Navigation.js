import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function Nav({ loggedIn, setIsAuth }) {
  const classes = useStyles();
  const logout = function () {
    localStorage.removeItem("loggedIn");
    setIsAuth(false);
  };

  const [navHtml, setNavHtml] = useState(
    loggedIn ? (
      <>
        <Typography variant="h6" className={classes.title}>
          <Link to="/movies" className={classes.link}>
            {" "}
            Movie{" "}
          </Link>
        </Typography>

        <Typography variant="h6" className={classes.title}>
          <Link to="/info" className={classes.link}>
            {" "}
            CompanyInfo{" "}
          </Link>
        </Typography>

        <Link to="/login" className={classes.link}>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Link>
      </>
    ) : (
      ""
    )
  );

  useEffect(() => {
    setNavHtml(
      loggedIn ? (
        <>
          <Typography variant="h6" className={classes.title}>
            <Link to="/movies" className={classes.link}>
              {" "}
              Movies{" "}
            </Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link to="/info" className={classes.link}>
              {" "}
              CompanyInfo{" "}
            </Link>
          </Typography>

          <Link to="/login" className={classes.link}>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Link>
        </>
      ) : (
        ""
      )
    );
  }, [classes.link, classes.title, loggedIn]);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>{navHtml}</Toolbar>
      </AppBar>
    </div>
  );
}
