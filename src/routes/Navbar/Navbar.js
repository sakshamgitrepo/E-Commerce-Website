import React, { Fragment,useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./Navbar.styles.scss";

function Navbar() {
  const {currentUser,setCurrentUser}= useContext(UserContext)

  const signOutHandler = async()=>{
  await signOutUser();
  setCurrentUser(null);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser?(
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ):(
          <Link className="nav-link" to="/sign-in-page">
            SIGN IN
          </Link>)}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
