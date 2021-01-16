import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Link,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import canopyTrees from '../../../images/canopy-trees.svg';
import MobileNavMenu from './mobile-nav-tabs';
import styles from './styles';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const MobileNav = (props) => {
  const { classes, showMobileNavMenu, setShowMobileNavMenu } = props;

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          style={{ height: '100px', flexDirection: 'row' }}
        >
          <Toolbar
            disableGutters
            style={{
              width: '100%',
              backgroundColor: '#fff',
              padding: '0 10px',
            }}
          >
            <Link
              component={NavLink}
              exact
              to="/"
              underline="none"
              onClick={() => setShowMobileNavMenu(false)}
            >
              <img
                src={canopyTrees}
                style={{ height: '60px', margin: '0 18px 0 20px' }}
              />
            </Link>
            <Link
              component={NavLink}
              exact
              to="/"
              underline="none"
              className={classes.navLink}
              activeClassName={classes.activeTab}
              onClick={() => setShowMobileNavMenu(false)}
            >
              <Typography variant="h6" className={classes.homeNavText}>
                Canopy Investments
              </Typography>
            </Link>
            {showMobileNavMenu ? (
              <Fragment>
                <CloseIcon
                  className={classes.menuIcon}
                  onClick={() => setShowMobileNavMenu(false)}
                />
              </Fragment>
            ) : (
              <MenuIcon
                className={classes.menuIcon}
                onClick={() => setShowMobileNavMenu(true)}
              />
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {showMobileNavMenu && (
        <MobileNavMenu closeMenu={() => setShowMobileNavMenu(false)} />
      )}
    </Fragment>
  );
};

export default withStyles(styles)(MobileNav);
