import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledAnchor = styled.a`
  align-items: ${(props) => props.alignItems};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  overflow: ${(props) => props.overflow};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  text-decoration: ${(props) => props.textDecoration};
  width: ${(props) => props.width};
  &:hover {
    background-color: ${(props) => props.hover.backgroundColor};
  }
`;

const Anchor = (props) => {
  return (
    <StyledAnchor href={props.href} {...props}>
      {props.children}
      {props.content}
    </StyledAnchor>
  );
};

Anchor.propTypes = {
  alignItems: PropTypes.oneOf([" ", "center", "end", "start"]),
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  color: PropTypes.string,
  content: PropTypes.string,
  display: PropTypes.oneOf([" ", "flex"]),
  flexDirection: PropTypes.oneOf([" ", "column", "row"]),
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  height: PropTypes.string,
  href: PropTypes.string,
  hover: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
  justifyContent: PropTypes.oneOf([
    " ",
    "center",
    "end",
    "space-around",
    "space-between",
    "space-evenly",
    "start",
  ]),
  lineHeight: PropTypes.string,
  margin: PropTypes.string,
  overflow: PropTypes.oneOf([" ", "auto", "hidden", "scroll", "visible"]),
  overflowX: PropTypes.oneOf([" ", "auto", "hidden", "scroll", "visible"]),
  overflowY: PropTypes.oneOf([" ", "auto", "hidden", "scroll", "visible"]),
  padding: PropTypes.string,
  textAlign: PropTypes.oneOf([" ", "center", "left", "right"]),
  textDecoration: PropTypes.oneOf([" ", "line-through", "none", "underline"]),
  width: PropTypes.string,
};

export default Anchor;
