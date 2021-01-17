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
    margin: '0 20px 0 10px',
    color: theme.palette.green.dark,
    height: '100%',
    width: '46px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export default styles;
