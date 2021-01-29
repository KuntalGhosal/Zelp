import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { ReactComponent as ZelpLogo } from "../assets/zelp-logo.svg";

const useStyles = makeStyles({
  button: {
    background: "#6163FF",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    width: 183,
    marginLeft: 30,
  },
  navigation: {
    paddingLeft: 93,
    paddingRight: 63,
    color: "white",
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftNav: {},
  rightNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 16,
    fontWeight: 600,
    "& a": {
      marginLeft: 30,
    },
  },
  main: {
    backgroundColor: "#151719",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.navigation}>
        <div className={classes.leftNav}>
          {/* <img src="../assets/zelp-logo.svg" alt="next" /> */}
          <ZelpLogo />
        </div>
        <div className={classes.rightNav}>
          <a>How it works?</a>
          <a>Why us?</a>
          <a>Services</a>
          <Button className={classes.button}>Get your team now</Button>
        </div>
      </div>
    </div>
  );
}
