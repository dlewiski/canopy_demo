const styles = (theme) => ({
  homepageRoot: {
    paddingTop: '30px',
    width: '100%',
  },
  titleSection: {
    marginBottom: '48px',
  },
  title: {
    fontSize: '40px',
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: '24px',
  },
  subTitle: {
    fontSize: '18px',
    textAlign: 'center',
  },
  cardSection: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridGap: '32px',
    justifyContent: 'center',
    marginBottom: '48px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '24px',
  },
  cardImg: {
    width: '100%',
    height: '65vw',
  },
  cardText: {
    textAlign: 'center',
    margin: '16px 0',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardLink: {
    textDecoration: 'underline',
    textAlign: 'center',
    fontSize: '18px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  videoSection: {
    display: 'flex',
    justifyContent: 'center',
  },
  video: {
    width: '75vw',
    height: '42vw',
  },
  subscribeSection: {
    padding: '80px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscribeText: {
    fontSize: '18px',
    fontWeight: 500,
    color: theme.palette.green.dark,
    marginBottom: '24px',
  },
  subscribeButton: {
    backgroundColor: theme.palette.green.dark,
    color: '#ffffff',
    textTransform: 'none',
    fontSize: '20px',
    width: '200px',
  },

  [theme.breakpoints.up('md')]: {
    titleSection: {
      margin: '48px 0',
    },
    cardSection: {
      gridTemplateRows: '1fr',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '120px',
      justifyContent: 'center',
      margin: '128px 0 164px',
    },
    card: {
      alignSelf: 'start',
      justifyContent: 'space-between',
    },
    cardImg: {
      width: '100%',
      height: '30vw',
    },
    videoSection: {
      marginBottom: '64px',
    },
  },
});

export default styles;
