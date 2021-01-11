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
  },
  text: {
    color: theme.palette.common.white,
    fontSize: '16px',
    fontWeight: 500,
  },
  // iconRoot: {
  //   minWidth: '30px',
  // },
});

export default styles;
