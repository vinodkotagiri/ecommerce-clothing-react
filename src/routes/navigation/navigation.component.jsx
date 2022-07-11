import { Fragment } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import React from 'react';
import './navigation.styles.scss';
import { Outlet, Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP</Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in">SIGN IN</Link>
        </div>
      </div>

      

      <Outlet />
    </Fragment>
  )
}

export default Navigation
