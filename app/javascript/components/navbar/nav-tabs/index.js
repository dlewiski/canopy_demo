import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Link, Typography } from '@material-ui/core';

const NavTabs = () => {
  const theme = useTheme();
  const tabs = [
    { name: 'Products', path: '/products' },
    { name: 'My Portfolio', path: '/my-portfolio' },
    { name: 'Account', path: '/account' },
  ];

  const renderNavTab = (tabInfo, index) => (
    <Grid key={index} style={{ padding: '0 20px' }}>
      <Link component={NavLink} to={tabInfo.path} underline="none">
        <Typography
          variant="h6"
          style={{
            color: theme.palette.primary.contrastText,
          }}
        >
          {tabInfo.name}
        </Typography>
      </Link>
    </Grid>
  );

  return (
    <Grid
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      {tabs.map((tab, index) => renderNavTab(tab, index))}
    </Grid>
  );
};

export default NavTabs;
