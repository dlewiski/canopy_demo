const styles = (theme) => ({
  navTabRoot: {
    padding: '130px 0 100px',
    width: '100vw',
    height: 'calc(100vh - 208px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.grey.dark,
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
