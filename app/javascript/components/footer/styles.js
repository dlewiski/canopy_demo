const styles = (theme) => ({
  footerRoot: {
    alignSelf: 'flex-end',
    width: '100vw',
    backgroundColor: theme.palette.green.dark,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    padding: '20px 30px',
  },
  listTitle: {
    color: theme.palette.common.white,
    fontWeight: 500,
    fontSize: '16px',
  },
  text: {
    color: theme.palette.common.white,
    fontSize: '12px',
    fontWeight: 500,
  },
  [theme.breakpoints.up('md')]: {
    footerRoot: {
      alignSelf: 'flex-end',
      width: '100vw',
      backgroundColor: theme.palette.green.dark,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      justifyItems: 'center',
      padding: '20px 30px',
    },
    listTitle: {
      color: theme.palette.common.white,
      fontWeight: 500,
      fontSize: '24px',
    },
    text: {
      color: theme.palette.common.white,
      fontSize: '16px',
      fontWeight: 500,
    },
  },
});

export default styles;
