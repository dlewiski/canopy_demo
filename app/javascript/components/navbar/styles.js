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
});

export default styles;
