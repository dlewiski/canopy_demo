import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

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
    <Grid>
      <Typography>Hello ProductsPage</Typography>
      {products.map((product, index) => (
        <Grid key={index} style={{ display: 'flex', margin: '40px 0' }}>
          <Typography>{product.attributes.name}</Typography>
          <img src={product.attributes.image_url} style={{ width: '350px' }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsPage;
