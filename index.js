import React from "react";
import ReactDOM from "react-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

const clientId =
 "438125506274-sl9c2saihce3f6r347ctn93h05cm9ghi.apps.googleusercontent.com";
  
ReactDOM.render(
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
