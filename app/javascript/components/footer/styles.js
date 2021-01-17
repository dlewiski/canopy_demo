const styles = (theme) => ({
  footerRoot: {
    alignSelf: 'flex-end',
    width: '100vw',
    backgroundColor: theme.palette.green.dark,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    justifyItems: 'center',
    padding: '40px 30px 0',
    gridGap: '10px',
    marginTop: 'auto',
  },
  footerColumnRoot: {
    width: '145px',
  },
  listTitle: {
    color: theme.palette.common.white,
    fontWeight: 500,
    fontSize: '20px',
  },
  text: {
    color: theme.palette.common.white,
    fontSize: '14px',
    fontWeight: 500,
  },
  [theme.breakpoints.up('md')]: {
    footerRoot: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr',
      gridGap: 0,
      padding: '20px 30px',
    },
    footerColumnRoot: {
      width: 'auto',
    },
    listTitle: {
      fontSize: '24px',
    },
    text: {
      fontSize: '16px',
    },
  },
});

export default styles;
