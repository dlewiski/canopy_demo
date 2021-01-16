import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Button, useTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const ProductsPage = (props) => {
  const { classes } = props;
  const [products, setProducts] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productResponse = await axios.get('/api/products');
        setProducts(productResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
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
