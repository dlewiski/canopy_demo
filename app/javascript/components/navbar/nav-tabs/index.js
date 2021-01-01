import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Link, Typography } from '@material-ui/core';

const NavTabs = () => {
  const theme = useTheme();
  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'My Portfolio', path: '/my-portfolio' },
    { name: 'Account', path: '/account' },
  ];

  const renderNavTab = (tabInfo, index) => (
    <Grid key={index} style={{ padding: '0 20px' }}>
      <Link component={RouterLink} to={tabInfo.path}>
        <Typography
          variant="h4"
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
      }}
    >
      {tabs.map((tab, index) => renderNavTab(tab, index))}
    </Grid>
  );
};

export default NavTabs;
