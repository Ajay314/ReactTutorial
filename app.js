import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {"id":"heading"},
    "Hello world"
)
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);

 const jsxHeading = <h1>Helloo World!!</h1>
 root.render(jsxHeading);