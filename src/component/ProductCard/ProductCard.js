import React from 'react';
import { Card, CardContent, CardMedia, Typography, Rating } from '@mui/material';
import styles from './ProductCard.module.css'; // Import the CSS module

const ProductCard = ({ product }) => {
  return (
    <Card className={styles.card}>
      <CardMedia className={styles.cardMedia}>
        <img src={product.image} alt={product.title} className={styles.cardImage} />
      </CardMedia>
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        {/* <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography> */}
        <Typography variant="subtitle1">Price: ${product.price}</Typography>
        <Rating name="product-rating" value={product.rating.rate} precision={0.5} readOnly />
        <Typography variant="body2" color="textSecondary">
          ({product.rating.count} ratings)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;


