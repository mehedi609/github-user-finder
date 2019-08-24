import React, { Fragment } from "react";
import PropTypes from "prop-types";
import spinner from "./spinner.gif";

const Spinner = props => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={spinnerStyle} />
    </Fragment>
  );
};

const spinnerStyle = {
  width: "200px",
  margin: "auto",
  display: "block"
};

Spinner.propTypes = {};

export default Spinner;
