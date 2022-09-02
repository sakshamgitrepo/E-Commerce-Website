import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./sign-in-page.styles.scss";

function SignInPage() {
  return (
    <div className="signIn-page-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default SignInPage;
