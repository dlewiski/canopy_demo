const styles = (theme) => ({
  productPageRoot: {
    paddingTop: '30px',
    width: '100%',
  },
  productContainer: {
    display: 'grid',
    padding: '20px 0',
    gridTemplateAreas: `
    'title title . .'
    'score score image image'
    'cost percentFunded percentFunded percentFunded'
    'buttons buttons buttons buttons'`,
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  productButtonContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridArea: 'buttons',
    gridGap: '0 10px',
    marginTop: '16px',
  },
  productButton: {
    color: '#fff',
    height: '30px',
    textTransform: 'none',
    borderRadius: '10px',
  },
  productTitle: {
    gridArea: 'title',
    fontWeight: 500,
    width: '200px',
  },
  esgAndLifecycleContainer: {
    gridArea: 'score',
    display: 'flex',
  },
  esgButton: {
    color: '#fff',
    height: '40px',
    minWidth: 'auto',
    width: '40px',
    textTransform: 'none',
    borderRadius: '10px',
    lineHeight: 1.25,
    padding: '4px',
    fontSize: '10px',
    margin: 'auto',
  },
  carbonLifecycleTextContainer: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    margin: 'auto auto auto 8px',
    gridGap: '6px 0',
  },
  carbonLifecycleText: {
    fontSize: '10px',
    justifyContent: 'center',
  },
  carbonLifecycleImg: {
    width: '100px',
  },
  productImg: {
    width: '90px',
    height: '75px',
    gridArea: 'image',
    justifySelf: 'flex-end',
    alignSelf: 'center',
  },
  costContainer: {
    gridArea: 'cost',
    marginTop: '16px',
  },
  costText: {
    fontSize: '10px',
  },
  costPrice: {
    fontWeight: 700,
  },
  progressContainer: {
    gridArea: 'percentFunded',
    alignSelf: 'center',
    display: 'flex',
  },
  progressBarOuter: {
    height: '20px',
    width: '150px',
    backgroundColor: theme.palette.grey[300],
    borderRadius: '10px',
  },
  progressBarInner: {
    borderRadius: '10px',
    textAlign: 'center',
    color: '#fff',
    width: 0,
    backgroundColor: theme.palette.blue.dark,
  },
  totalDollars: {
    fontSize: '12px',
    marginLeft: '8px',
  },
  negativeReturnContainer: {
    gridArea: 'percentFunded',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    color: theme.palette.error.dark,
  },
  downTriangle: {
    transform: 'rotate(90deg)',
  },
  negativeReturnText: {
    paddingTop: '4px',
  },
  [theme.breakpoints.up('md')]: {
    productContainer: {
      gridTemplateAreas: `
      'buttons title . . image'
      'buttons score cost percentFunded image'`,
    },
    productButtonContainer: {
      gridTemplateRows: '1fr 1fr 1fr',
      gridTemplateColumns: 'none',
      gridGap: '15px 0',
    },
    productButton: {
      height: '30px',
      width: '75%',
      justifySelf: 'center',
      fontSize: '16px',
    },
    productTitle: {
      fontSize: '24px',
      width: '300px',
    },
    esgButton: {
      height: '60px',
      width: '60px',
      lineHeight: 1.25,
      padding: '4px',
      fontSize: '16px',
      margin: 'auto 8px auto 16px',
    },
    carbonLifecycleText: {
      fontSize: '16px',
    },
    carbonLifecycleImg: {
      width: '200px',
    },
    negativeReturnContainer: {
      minWidth: '188px',
    },
    productImg: {
      width: '275px',
      height: '150px',
    },
    // negativeReturnContainer: {
    //   width: '285px',
    // },
  },
});

export default styles;
