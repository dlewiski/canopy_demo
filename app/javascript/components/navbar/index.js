import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  useScrollTrigger,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NavTabs from './nav-tabs';

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

const Navbar = () => {
  const theme = useTheme();

  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        style={{ height: '100px', flexDirection: 'row' }}
      >
        <Toolbar disableGutters={true} style={{ width: '100%' }}>
          <IconButton
            aria-label="menu"
            style={{
              backgroundColor: '#000051',
              color: theme.palette.primary.contrastText,
              borderRadius: 0,
              height: '100px',
              width: '100px',
              marginRight: '40px',
            }}
          >
            <MenuIcon style={{ fontSize: 80 }} />
          </IconButton>
          <NavTabs />
          <AccountBoxIcon style={{ fontSize: 80, marginRight: '30px' }} />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
