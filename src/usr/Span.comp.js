import PropTypes from "prop-types";
import React from "react";

const Span = (props) => {
  return (
    <span style={{ ...props }}>
      {props.content}
      {props.children}
    </span>
  );
};

Span.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  width: PropTypes.string,
  height: PropTypes.string,
  display: PropTypes.oneOf([" ", "flex"]),
  overflow: PropTypes.oneOf([" ", "auto", "hidden", "visible", "scroll"]),
  overflowX: PropTypes.oneOf([" ", "auto", "hidden", "visible", "scroll"]),
  overflowY: PropTypes.oneOf([" ", "auto", "hidden", "visible", "scroll"]),
  flexDirection: PropTypes.oneOf([" ", "row", "column"]),
  justifyContent: PropTypes.oneOf([
    " ",
    "start",
    "center",
    "end",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  alignItems: PropTypes.oneOf([" ", "start", "center", "end"]),
  padding: PropTypes.string,
  margin: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  content: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  textAlign: PropTypes.oneOf([" ", "left", "center", "right"]),
  fontFamily: PropTypes.string,
};

export default Span;
