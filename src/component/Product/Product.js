import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../../config/config';
import Hero from '../Hero/Hero';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceFilter, setSelectedPriceFilter] = useState('');
  const [selectedRatingFilter, setSelectedRatingFilter] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const queryParams = [];
        if (selectedCategory) {
          queryParams.push(`category=${setSelectedCategory}`);
        }
        if (selectedPriceFilter) {
          queryParams.push(`priceSort=${selectedPriceFilter}`);
        }
        if (selectedRatingFilter) {
          queryParams.push(`ratingSort=${selectedRatingFilter}`);
        }

        const queryString = queryParams.join('&');
        const response = await axios.get(`${API_ENDPOINTS.products}${queryString ? `?${queryString}` : ''}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [selectedCategory, selectedPriceFilter, selectedRatingFilter]);

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <Hero />
      </div>
      
      
      <Container>
        <div style={{ marginBottom: '30px' }}>
          {/* Category Dropdown */}
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>

          {/* Price Filter Dropdown */}
          <select value={selectedPriceFilter} onChange={(e) => setSelectedPriceFilter(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
          </select>

          {/* Rating Filter Dropdown */}
          <select value={selectedRatingFilter} onChange={(e) => setSelectedRatingFilter(e.target.value)}>
            <option value="">Sort by Rating</option>
            <option value="rating-desc">Rating High to Low</option>
            <option value="rating-asc">Rating Low to High</option>
          </select>
        </div>
      
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Link to={`/product-details/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ProductCard product={product} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductPage;







