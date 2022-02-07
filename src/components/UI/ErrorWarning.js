import Card from "./Card";
import classes from "./ErrorWarning.module.css";
import ReactDOM from "react-dom";
import React from "react";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const WarningOverlay = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card className={classes.warning}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorWarning = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <WarningOverlay
          title={props.title}
          message={props.messagr}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")

      )}
    </React.Fragment>
  );
};

export default ErrorWarning;
