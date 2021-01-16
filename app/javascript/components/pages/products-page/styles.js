const styles = (theme) => ({
  productPageRoot: {
    paddingTop: '30px',
    width: '100%',
  },
  productContainer: {
    display: 'grid',
    padding: '15px 0',
    gridTemplateAreas: `'buttons title image'
    'buttons score image'`,
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  productButtonContainer: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridArea: 'buttons',
    gridGap: '10px 0',
    marginRight: '20px',
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
  productImg: {
    width: '100px',
    height: '75px',
    gridArea: 'image',
    justifySelf: 'flex-end',
  },
});

export default styles;
