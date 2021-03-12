import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const AccountPage = (props) => {
  const { classes } = props;

  return (
    <Grid className={classes.accountRoot}>
      <Typography className={classes.title}>Your Account</Typography>
      <Grid>
        <Typography className={classes.cardTitle}>
          Personal information
        </Typography>
        <Grid>
          <Typography className={classes.cardText}>Full Name</Typography>
          <Typography className={classes.cardText}>County</Typography>
          <Typography className={classes.cardText}>Address</Typography>
          <Typography className={classes.cardText}>City</Typography>
          <Typography className={classes.cardText}>State</Typography>
          <Typography className={classes.cardText}>Zip code</Typography>
        </Grid>
      </Grid>
      <Grid>
        <Typography className={classes.cardTitle}>Account settings</Typography>
        <Grid>
          <Typography className={classes.cardText}>
            Statement & Account Documents
          </Typography>
          <Typography className={classes.cardText}>Tax Forms</Typography>
          <Typography className={classes.cardText}>
            Year-End Gain/Loss Reports
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Typography className={classes.cardTitle}>External accounts</Typography>
        <Grid>
          <Typography className={classes.cardText}>
            Chase Checking ***_****0459(Primary)
          </Typography>
          <Typography className={classes.cardText}>
            TD Ameritrade Individual Brokerage ***_****2314
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AccountPage);
