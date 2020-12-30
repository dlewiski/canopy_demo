import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
 return (
   <AppBar position="fixed">
     <Toolbar>
     <IconButton edge="start" aria-label="menu">
        <MenuIcon />
      </IconButton>
       <Typography variant="h5">Canopy</Typography>
     </Toolbar>
   </AppBar>
 );
}

export default Navbar