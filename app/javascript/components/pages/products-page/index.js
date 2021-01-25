import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Button, useTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import carbonLifecylceBarGraph from '../../../images/product-page-images/carbon-lifecylce-bar-graph.png';
import styles from './styles';

const ProductsPage = (props) => {
  const { classes, history } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getProducts = async () => {
      try {
        const productResponse = await axios.get('/api/products', {
          cancelToken: source.token,
        });
        setProducts(productResponse.data);
        setIsLoading(false);
      } catch (e) {
        setError({ message: e.message });
        setIsLoading(false);
      }
    };
    getProducts();

    return () => {
      source.cancel();
    };
  }, []);

  const setProgressBarStyle = (percent) => {
    const newStyle = {
      opacity: 1,
      width: `${percent}%`,
    };
    return newStyle;
  };

  const handleDetailsButton = (event, productInfo) => {
    history.push({
      pathname: `/products/detail/${productInfo.slug}`,
      state: { productInfo },
    });
  };

  if (isLoading) {
    return (
      <Grid className={classes.productPageRoot}>
        <Typography>LOADING</Typography>
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid className={classes.productPageRoot}>
        <Typography>
          There was an error retrieving your products. Please try again later.
        </Typography>
      </Grid>
    );
  }

  return (
    products.length > 0 && (
      <Grid className={classes.productPageRoot}>
        {products.map((product, index) => (
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
                Watchlist
              </Button>
              <Button
                variant="contained"
                className={classes.productButton}
                style={{ backgroundColor: theme.palette.grey[400] }}
                onClick={(event) => handleDetailsButton(event, product)}
              >
                Details
              </Button>
            </Grid>
            <Typography className={classes.productTitle}>
              {product.name}
            </Typography>
            <Grid className={classes.esgAndLifecycleContainer}>
              <Button
                variant="contained"
                disabled={true}
                className={classes.esgButton}
                style={{
                  backgroundColor: theme.palette.green.medium,
                  color: '#fff',
                }}
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
            <img src={product.image_url} className={classes.productImg} />
            <Grid className={classes.costContainer}>
              <Typography className={classes.costText}>Cost basis</Typography>
              <Typography className={classes.costPrice}>
                $ {product.cost_basis}
              </Typography>
              <Typography className={classes.costText}>
                As of close at 4pm ET
              </Typography>
            </Grid>
            {product.percent_change > 0 ? (
              <Grid className={classes.progressContainer}>
                <Grid className={classes.progressBarOuter}>
                  <Grid
                    className={classes.progressBarInner}
                    style={setProgressBarStyle(product.percent_change)}
                  >
                    {product.percent_change}%
                  </Grid>
                </Grid>
                <Typography className={classes.totalDollars}>
                  ${product.total_dollars}
                </Typography>
              </Grid>
            ) : (
              <Grid className={classes.negativeReturnContainer}>
                <PlayArrowIcon
                  fontSize="large"
                  className={classes.downTriangle}
                />
                <Typography className={classes.negativeReturnText}>
                  {(product.percent_change * product.cost_basis * 0.01).toFixed(
                    2,
                  )}{' '}
                  ({product.percent_change}%)
                </Typography>
              </Grid>
            )}
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default withStyles(styles)(ProductsPage);
