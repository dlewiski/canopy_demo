import React from 'react';
// import { NavLink } from 'react-router-dom';
import {
  Grid,
  List,
  ListItem,
  // Link,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const Footer = (props) => {
  const { classes } = props;
  const footerContents = [
    { title: 'Stay connected', listItems: ['E-mail', 'Twitter', 'Facebook'] },
    {
      title: 'Product',
      listItems: ['How it works', 'Solar', 'Wind', 'Performance'],
    },
    { title: 'Company', listItems: ['About us', 'Careers', 'Press'] },
    { title: 'Resources', listItems: ['Help', 'Disclosures'] },
  ];

  const footerColumn = (footerContent) => (
    <Grid key={footerContent.title}>
      <Typography variant="h5" className={classes.listTitle}>
        {footerContent.title}
      </Typography>
      <List>
        {footerContent.listItems.map((listItem, index) => (
          <ListItem key={index} className={classes.text}>
            {listItem}
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  return (
    <Grid className={classes.footerRoot}>
      {footerContents.map((footerContent) => footerColumn(footerContent))}
    </Grid>
  );
};

export default withStyles(styles)(Footer);
