import React from 'react';
import { Typography } from '@mui/material';
import heroImage from "../../assets/hero-image.jpg"; // Import the hero image
import styles from './Hero.module.css'; // Import the CSS module

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      {/* Display the hero image */}
      <img
        src={heroImage}
        alt="Hero"
        className={styles.heroImage}
      />
      <div className={styles.heroText}>
        <Typography variant="h3">Welcome to My Shopping App</Typography>
        <Typography variant="subtitle1">
          Discover a wide range of amazing products.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;



