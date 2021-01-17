import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Button, useTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import carbonLifecylceBarGraph from '../../../images/product-page-images/carbon-lifecylce-bar-graph.png';
import styles from './styles';

const ProductsPage = (props) => {
  const { classes } = props;
  const [products, setProducts] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getProducts = async () => {
      try {
        const productResponse = await axios.get('/api/products', {
          cancelToken: source.token,
        });
        setProducts(productResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();

    return () => {
      source.cancel();
    };
  }, []);
  return (
    <Grid className={classes.productPageRoot}>
      {products.length === 0 ? (
        <Typography>
          There was an error retrieving your products. Pleaset try again later.
        </Typography>
      ) : (
        products.map((product, index) => (
          <Grid key={index} className={classes.productContainer}>
            <Grid className={classes.productButtonContainer}>
              <Button
                variant="contained"
                className={classes.productButton}
                style={{ backgroundColor: theme.palette.green.medium }}
              >
                Invest
              </Button>
              <Button
                variant="contained"
                className={classes.productButton}
                style={{ backgroundColor: theme.palette.blue.medium }}
              >
                Sell
              </Button>
              <Button
                variant="contained"
                className={classes.productButton}
                style={{ backgroundColor: theme.palette.grey[400] }}
              >
                Details
              </Button>
            </Grid>
            <Typography className={classes.productTitle}>
              {product.attributes.name}
            </Typography>
            <Grid className={classes.esgAndLifecycleContainer}>
              <Button
                variant="contained"
                className={classes.esgButton}
                style={{ backgroundColor: theme.palette.green.medium }}
              >
                ESG
                <br />
                Score
              </Button>
              <Grid className={classes.carbonLifecycleTextContainer}>
                <Typography className={classes.carbonLifecycleText}>
                  Carbon
                </Typography>
                <Typography className={classes.carbonLifecycleText}>
                  Lifecycle
                </Typography>
              </Grid>
              <img
                src={carbonLifecylceBarGraph}
                className={classes.carbonLifecycleImg}
              />
            </Grid>
            <img
              src={product.attributes.image_url}
              className={classes.productImg}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default withStyles(styles)(ProductsPage);
