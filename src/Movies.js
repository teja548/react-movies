import { useEffect, useState } from "react";
import Movie from "./Movie";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    display: "flex",
    flexDirection: "row",
  },

  movie: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "left",
    marginLeft: 24,
  },

  root1: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  div1: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  movie1: {
    color: "pink",
    fontSize: 40,
  },
  grid1: {
    marginLeft: "auto",
    alignItems: "center",
  },
}));

function Movies(props) {
  const classes = useStyles();
  const { setMovies, allData } = props;
  const [input, setInput] = useState("");
  useEffect(() => {}, [props.data]);

  const searchHandler = (e) => {
    const val = e.target.value;
    setInput(val);
  };
  const search = (e) => {
    e.preventDefault();
    setMovies(
      allData.filter((movie) => {
        if (input == "") {
          return movie;
        } else if (
          movie.title.toLowerCase().includes(input.toLowerCase()) ||
          movie.description.toLowerCase().includes(input.toLowerCase())
        ) {
          return movie;
        }
      })
    );
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className={classes.div1}>
          <div>
            <Typography className={classes.movie}>
              <span className={classes.movie1}>Movies</span>{" "}
            </Typography>
          </div>
          <div>
            <Paper component="form" className={classes.root1}>
              <InputBase
                className={classes.input}
                placeholder="Search Movie here"
                inputProps={{ "aria-label": "search Movie here" }}
                onChange={searchHandler}
              />

              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon onClick={search} />
              </IconButton>
            </Paper>
          </div>
        </div>
        <div>
          <br />
          <Grid container spacing={5}>
            {props?.data?.length > 0 &&
              props?.data?.map((movieData, index) => (
                <Grid item xs={12} sm={4} className={classes.grid1}>
                  <Movie data={movieData} key={movieData._id} />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Movies;
