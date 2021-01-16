import React, { Fragment } from 'react';
import { Hidden } from '@material-ui/core';
import MainNav from './main-nav';
import MobileNav from './mobile-navbar';

const Navbar = (props) => {
  const { showMobileNavMenu, setShowMobileNavMenu } = props;

  return (
    <Fragment>
      <Hidden smDown>
        <MainNav />
      </Hidden>
      <Hidden mdUp>
        <MobileNav
          showMobileNavMenu={showMobileNavMenu}
          setShowMobileNavMenu={setShowMobileNavMenu}
        />
      </Hidden>
    </Fragment>
  );
};

export default Navbar;
