import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Link,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import canopyTrees from '../../images/canopy-trees.svg';
import NavTabs from './nav-tabs';
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

const Navbar = (props) => {
  const { classes } = props;
  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        style={{ height: '100px', flexDirection: 'row' }}
      >
        <Toolbar
          disableGutters
          style={{ width: '100%', backgroundColor: '#fff', padding: '0 10px' }}
        >
          <img
            src={canopyTrees}
            style={{ height: '60px', margin: '0 18px 0 20px' }}
          />
          <Link
            component={NavLink}
            exact
            to="/"
            underline="none"
            className={classes.navLink}
            activeClassName={classes.activeTab}
          >
            <Typography variant="h6" className={classes.homeNavText}>
              Canopy Investments
            </Typography>
          </Link>
          <NavTabs />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default withStyles(styles)(Navbar);
