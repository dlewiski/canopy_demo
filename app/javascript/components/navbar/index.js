import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  useScrollTrigger,
  Link,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import canopyTrees from '../../images/canopy-trees.svg'
import { withStyles } from '@material-ui/styles';
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
  const theme = useTheme();
  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        style={{ height: '100px', flexDirection: 'row' }}
      >
        <Toolbar
          disableGutters={false}
          style={{ width: '100%', backgroundColor: '#fff' }}
        >
          <img
            src={canopyTrees}
            style={{ height: '60px', margin: '0 18px 0 16px' }}
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
