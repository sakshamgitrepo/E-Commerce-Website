import React, { Fragment,useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./Navbar.styles.scss";

function Navbar() {
  const {currentUser}= useContext(UserContext);

  const {isCartOpen} = useContext(CartContext);

  const signOutHandler = async()=>{
  await signOutUser();
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
          <CartIcon/>
        </div>
       {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
