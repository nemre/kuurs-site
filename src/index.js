import React from "react";
import ReactDOM from "react-dom";
import Application from "@webcodesk/react-app-framework";

let schema;
let userComponents;
let userFunctions;
let packageJson = {};

if (process.env.NODE_ENV !== "production") {
  schema = require("./app/schema").default;
  userComponents = require("./app/indices/userComponents").default;
  userFunctions = require("./app/indices/userFunctions").default;
  packageJson = require("../package.json");
} else {
  schema = require("./app/schema-prod").default;
  userComponents = require("./app/indices-prod/userComponents").default;
  userFunctions = require("./app/indices-prod/userFunctions").default;
}

ReactDOM.render(
  <Application
    name={packageJson.name}
    version={packageJson.version}
    schema={schema}
    userComponents={userComponents}
    userFunctions={userFunctions}
  />,
  document.body
);
