import React from 'react';
import { Grid, Typography, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const ProductDetailPage = (props) => {
  const { classes } = props;

  return (
    <Grid className={classes.productPageRoot}>
    Product details page baby!!!
    </Grid>
  );
};

export default withStyles(styles)(ProductDetailPage);
