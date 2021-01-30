import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import React from "react";

const useStyles = makeStyles({
  headerTextStyle: {
    color: "#FFFFFF",
  },
});

interface Props {}

export default function Hero(props: Props) {
  const classes = useStyles();
  return (
    <div>
      <p style={{ color: "#FFFFFF" }}>
        Ready to deploy teams for ReactNative projects
      </p>
      {/* <p></p> */}
    </div>
  );
}
