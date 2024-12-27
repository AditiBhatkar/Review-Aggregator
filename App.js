import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const App = () => {
  const handleLoginSuccess = async (response) => {
    console.log("Login Successful:", response);
    const { credential } = response;

    try {
      // Send the ID token to the backend
      const res = await axios.post("http://localhost:5000/verify-token", {
        id_token: credential,
      });
      console.log("User Info from Backend:", res.data);
    } catch (err) {
      console.error(
        "Error verifying token:",
        err.response ? err.response.data : err.message
      );
    }
  };

  const handleLoginError = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId="438125506274-sl9c2saihce3f6r347ctn93h05cm9ghi.apps.googleusercontent.com">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <h1>Google OAuth Login</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
