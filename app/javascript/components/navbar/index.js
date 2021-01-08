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
        <Toolbar disableGutters={false} style={{ width: '100%' }}>
          <IconButton
            aria-label="menu"
            style={{
              // backgroundColor: '#000051',
              color: theme.palette.primary.contrastText,
              padding: '5px',
              // borderRadius: 0,
              // height: '100px',
              // width: '100px',
              // marginRight: '40px',
            }}
          >
            <MenuIcon style={{ fontSize: 40 }} />
          </IconButton>
          <Link component={NavLink} to="/">
            <Typography
              variant="h6"
              color="textPrimary"
              style={{
                whiteSpace: 'nowrap',
                color: theme.palette.primary.contrastText,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Canopy Investments
            </Typography>
          </Link>
          <NavTabs />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
