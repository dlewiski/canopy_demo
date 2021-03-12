import React from 'react';
import { Grid, Typography, Link, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import SolarWindImg from '../../../images/homepage/solar-wind-hompage.jpeg';
import MoneyTreeImg from '../../../images/homepage/money-tree-homepage.jpeg';
import styles from './styles';

const Homepage = (props) => {
  const { classes } = props;

  return (
    <Grid className={classes.homepageRoot}>
      <Grid className={classes.titleSection}>
        <Typography className={classes.title} variant="h1">
          Invest in Tangible Energy Projects
        </Typography>
        <Typography className={classes.subTitle}>
          Canopy Investments is a platform for everyday Americans to invest and
          own sustainable energy projects. Every project is vetted by our team
          of engineers and experts. We source projects that both provide a
          return on your investment and positively impact the environment.
        </Typography>
      </Grid>
      <Grid className={classes.cardSection}>
        <Grid className={classes.card}>
          <Typography className={classes.cardTitle}>Positive Impact</Typography>
          <img src={SolarWindImg} className={classes.cardImg}></img>
          <Typography className={classes.cardText}>
            The projects we source provide sustainable energy - replacing fossil
            fuels and reducing emissions.
          </Typography>
          <Grid className={classes.linkContainer}>
            <Link className={classes.cardLink}>Learn more</Link>
          </Grid>
        </Grid>
        <Grid className={classes.card}>
          <Typography className={classes.cardTitle}>
            Positive Returns
          </Typography>
          <img
            src={MoneyTreeImg}
            className={classes.cardImg}
            style={{ objectFit: 'cover' }}
          ></img>
          <Typography className={classes.cardText}>
            A positive environmental impact does not mean poor returns. Our
            projects provide positive long-term returns.
          </Typography>
          <Grid className={classes.linkContainer}>
            <Link className={classes.cardLink}>Learn more</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.videoSection}>
        <iframe
          className={classes.video}
          src="https://www.youtube.com/embed/aXCjeTzwnOs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Grid>
      <Grid className={classes.subscribeSection}>
        <Typography className={classes.subscribeText}>
          Stay in the know
        </Typography>
        <Button
          className={classes.subscribeButton}
          variant="contained"
          color="primary"
        >
          Subscribe
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Homepage);
