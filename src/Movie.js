import React from "react";
// import rockstar from "./rockstar.jpg"
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 80,
    display: "flex",
    flexDirection: "row",
  },
  paper: {
    height: 700,
    width: 300,
    backgroundColor: "#212121",
    padding: 10,
    display: "flex",
  },

  movie: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "center",
    marginLeft: 24,
    padding: 20,
  },

  movieDetails: {
    color: "white",
    marginLeft: 18,
  },

  image: {
    height: 230,
    width: 230,
    marginTop: 40,
    marginRight: "auto",
    marginLeft: "auto",
  },

  link: {
    textDecoration: "none",
  },
  button: {
    marginLeft: 50,
    width: 200,
  },
  button1: {
    marginLeft: 90,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    width: 120,
  },
  genres: {
    color: "Black",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "center",
    marginLeft: 24,
    padding: 20,
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Movie(props) {
  const movies = props.data;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} key={props.key}>
        <Paper className={classes.paper}>
          <div class="voting">
            <button class="upvote">
              <i class="fa fa-thumbs-up"></i>
            </button>
            <span class="count">0</span>
            <button class="downvote">
              <i class="fa fa-thumbs-down"></i>
            </button>
          </div>
          <div>
            <Paper
              className={classes.image}
              style={{
                backgroundImage: `url('${props?.data?.poster}')`,
                backgroundSize: "100% 100%",
                marginTop: 30,
              }}
            ></Paper>
          </div>
          <br />
          <Typography className={classes.movie}>
            {props?.data?.title}
          </Typography>
          <Typography className={classes.movieDetails}>
            Genre : {props?.data?.genre}
          </Typography>
          <Typography className={classes.movieDetails}>
            Director : {props?.data?.director?.[0]}
          </Typography>
          <Typography className={classes.movieDetails}>
            Starring : {props?.data?.stars}
          </Typography>
          <Typography className={classes.movieDetails}>
            {props?.data?.runTime ? `${props?.data?.runTime} Mins |` : ""}{" "}
            {props?.data?.language} | {formatDate(props?.data?.releasedDate)}
          </Typography>
          <Typography className={classes.movieDetails}>
            {props?.data?.pageViews} views |{" "}
            {props?.data?.totalVoted
              ? `Voted by ${props?.data?.totalVoted} people`
              : "No Votes"}
          </Typography>
          <br />
          <a
            href={props?.data?.trailer_url}
            target="_blank"
            className={classes.link}
          >
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Watch trailer
            </Button>
          </a>{" "}
          <br />
          <br />
          {/* <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClickOpen}
          >
            genres
          </Button> */}
          {/* <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
              className={classes.genres}
            >
              Genres
            </DialogTitle>
            <DialogContent dividers>
              <Typography>
                {props?.data?.genres.map((genre) => (
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button1}
                  >
                    {genre}
                  </Button>
                ))}
              </Typography>
            </DialogContent>
          </Dialog> */}
          <br />
          <br />
          {/* <Button variant="contained" className={classes.button}>
            Season Year:{props?.data?.season_year}
          </Button>{" "}
          <br />
          <br />{" "}
          <Button variant="contained" className={classes.button}>
            Episodes :{props?.data?.episodes_count}
          </Button> */}
        </Paper>
      </Grid>
    </Grid>
  );
}
