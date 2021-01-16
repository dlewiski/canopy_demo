import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Link, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const MobileNavMenu = (props) => {
  const { classes, closeMenu } = props;
  const tabs = [
    { name: 'Products', path: '/products' },
    { name: 'My Portfolio', path: '/my-portfolio' },
    { name: 'Account', path: '/account' },
  ];

  const renderNavTab = (tabInfo, index) => (
    <Grid key={index} style={{ padding: '20px 20px' }}>
      <Link
        component={NavLink}
        to={tabInfo.path}
        underline="none"
        className={classes.navLink}
        activeClassName={classes.activeTab}
        onClick={() => closeMenu()}
      >
        <Typography variant="h6" className={classes.tabText}>
          {tabInfo.name}
        </Typography>
      </Link>
    </Grid>
  );

  return (
    <Grid className={classes.navTabRoot}>
      {tabs.map((tab, index) => renderNavTab(tab, index))}
    </Grid>
  );
};

export default withStyles(styles)(MobileNavMenu);
