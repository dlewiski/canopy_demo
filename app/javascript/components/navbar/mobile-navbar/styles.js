const styles = (theme) => ({
  navLink: {
    color: theme.palette.primary.contrastText,
  },
  homeNavText: {
    whiteSpace: 'nowrap',
    color: 'inherit',
    fontFamily: theme.typography.fontFamily,
    '&:hover': {
      color: theme.palette.green.dark,
    },
  },
  activeTab: {
    color: theme.palette.green.dark,
  },
  menuIcon: {
    marginLeft: 'auto',
    color: theme.palette.green.dark,
    height: '100%',
    width: '65px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export default styles;
