const styles = (theme) => ({
  productDetailsPageRoot: {
    paddingTop: '30px',
    width: '100%',
  },
  productTitle: {
    fontSize: '32px',
    fontWeight: 500,
  },
  backButton: {
    color: '#fff',
    backgroundColor: theme.palette.grey[400],
    height: '30px',
    textTransform: 'none',
    borderRadius: '10px',
  },
  // [theme.breakpoints.up('md')]: {
  //   productContainer: {
  //     gridTemplateAreas: `
  //     'buttons title . . image'
  //     'buttons score cost percentFunded image'`,
  //   },
  // },
});

export default styles;
