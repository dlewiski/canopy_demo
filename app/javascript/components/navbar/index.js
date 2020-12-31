import React from 'react';
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Typography, useScrollTrigger } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";

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
 return (
   <ElevationScroll>
     <AppBar position="fixed">
       <Toolbar>
         <IconButton edge="start" aria-label="menu">
           <MenuIcon fontSize="large" />
         </IconButton>
         <Typography variant="h4">Canopy</Typography>
       </Toolbar>
     </AppBar>
   </ElevationScroll>
 );
};

export default Navbar;