const styles = (theme) => ({
  navTabRoot: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navLink: {
    color: theme.palette.primary.contrastText,
  },
  tabText: {
    whiteSpace: 'nowrap',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.green.dark,
    },
  },
  activeTab: {
    color: theme.palette.green.dark,
  },
});

export default styles;
