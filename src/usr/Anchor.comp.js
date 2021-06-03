import PropTypes from "prop-types";
import React from "react";

const Anchor = (props) => {
  return (
    <a
      href={props.href}
      style={{
        alignItems:
          props.align == "Start"
            ? "flex-start"
            : props.align == "Center"
            ? "center"
            : props.align == "End"
            ? "flex-end"
            : "",
        flexDirection:
          props.direction == "Horizontal"
            ? "row"
            : props.direction == "Vertical"
            ? "column"
            : "",
        display: props.display,
        justifyContent:
          props.distribute == "Start"
            ? "flex-start"
            : props.distribute == "Center"
            ? "center"
            : props.distribute == "End"
            ? "flex-end"
            : props.distribute == "Space Between"
            ? "space-between"
            : props.distribute == "Space Around"
            ? "space-around"
            : props.distribute == "Space Evenly"
            ? "space-evenly"
            : "",
        backgroundColor: props.backgroundColor,
        height: props.height,
        margin: props.margin,
        padding: props.padding,
        borderRadius: props.radius,
        width: props.width,
      }}
    >
      {props.children}
    </a>
  );
};

Anchor.propTypes = {
  align: PropTypes.oneOf([" ", "Start", "Center", "End"]),
  direction: PropTypes.oneOf([" ", "Horizontal", "Vertical"]),
  display: PropTypes.oneOf([" ", "flex"]),
  distribute: PropTypes.oneOf([
    " ",
    "Start",
    "Center",
    "End",
    "Space Between",
    "Space Around",
    "Space Evenly",
  ]),
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  href: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Anchor;
