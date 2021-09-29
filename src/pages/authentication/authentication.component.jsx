import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.components";

import "./authentication.styles.scss";

const AuthenticationPage = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthenticationPage;
