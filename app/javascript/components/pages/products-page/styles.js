const styles = (theme) => ({
  productPageRoot: {
    paddingTop: '30px',
    width: '100%',
  },
  productContainer: {
    display: 'grid',
    padding: '20px 0',
    gridTemplateAreas: `
    'title image'
    'score image'
    'buttons buttons'`,
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
    height: '20px',
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
  },
});

export default styles;
