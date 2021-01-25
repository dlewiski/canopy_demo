import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Typography,
  List,
  ListItem,
  Button,
  Link,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import ProductMap from '../../../../images/product-page-images/product-map.png';
import styles from './styles';

const ProductDetailPage = (props) => {
  const { classes, history } = props;
  const [product, setProduct] = useState({});
  const [projects, setProjects] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    if (history.location.state) {
      setProduct(history.location.state.productInfo);
      return setProjects(history.location.state.productInfo.projects);
    }

    const source = Axios.CancelToken.source();

    const getProducts = async () => {
      try {
        const productResponse = await Axios.get(`/api/products/${slug}`, {
          cancelToken: source.token,
        });
        setProduct(productResponse.data);
        setProjects(productResponse.data.projects);
        // setIsLoading(false);
      } catch (e) {
        // setError({ message: e.message });
        // setIsLoading(false);
      }
    };
    getProducts();

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <Grid className={classes.productDetailsPageRoot}>
      <Typography variant="h1" className={classes.productTitle}>
        {product.name}
      </Typography>
      <Grid className={classes.openTag}>
        {product.open ? 'Open' : 'Not open'} for Investment
      </Grid>
      <img src={ProductMap} />
      <Grid>
        <Typography>Description</Typography>
        <Typography>{product.description}</Typography>
      </Grid>
      <Grid>
        <Typography>Projects</Typography>
        <List>
          {projects.map((project, index) => (
            <ListItem key={index}>{project.location}</ListItem>
          ))}
        </List>
      </Grid>
      <Link component={RouterLink} to="/products">
        <Button variant="contained" className={classes.backButton}>
          Back to Products
        </Button>
      </Link>
    </Grid>
  );
};

export default withStyles(styles)(ProductDetailPage);
