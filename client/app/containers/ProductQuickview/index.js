/**
 *
 * ProductQuickView Modal
 *
 */

import React from 'react';
import { Modal, ModalBody, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ProductQuickView.scss';
import actions from '../../actions';

class ProductQuickView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      selectedImage: 0
    };
  }

  handleQuantityChange = (type) => {
    const { quantity } = this.state;
    if (type === 'increment') {
      this.setState({ quantity: quantity + 1 });
    } else if (type === 'decrement' && quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  };

  renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }
    
    return stars;
  };

  render() {
    const { isOpen, toggle, product } = this.props;
    const { quantity, selectedImage } = this.state;

    if (!product) return null;

    // Product images (main image + additional images if available)
    const productImages = product.images || [product.image];

    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className="product-quick-view-modal"
        size="lg"
      >
        <div className="modal-header-custom">
          <button className="close-button" onClick={toggle}>
            ×
          </button>
        </div>
        <ModalBody>
          <Row>
            {/* Product Images */}
            <Col md="6" className="product-images-section">
              <div className="main-image">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="img-fluid"
                />
              </div>
              {productImages.length > 1 && (
                <div className="thumbnail-images">
                  {productImages.map((img, index) => (
                    <div
                      key={index}
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => this.setState({ selectedImage: index })}
                    >
                      <img src={img} alt={`${product.name} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </Col>

            {/* Product Details */}
            <Col md="6" className="product-details-section">
              {/* Category */}
              {product.category && (
                <div className="product-category">
                  <Link to={`/shop/${product.category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {product.category}
                  </Link>
                </div>
              )}

              {/* Product Name */}
              <h2 className="product-title">{product.name}</h2>

              {/* Rating */}
              <div className="product-rating-section">
                <div className="stars">
                  {this.renderStars(product.rating)}
                </div>
                <span className="reviews">({product.reviews} Reviews)</span>
              </div>

              {/* Price */}
              <div className="product-pricing">
                <span className="current-price">${product.price.toFixed(2)}</span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                    <span className="discount-badge">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>

              {/* Availability */}
              <div className="product-availability">
                <span className={product.inStock !== false ? 'in-stock' : 'out-of-stock'}>
                  {product.inStock !== false ? '✓ In Stock' : '✗ Out of Stock'}
                </span>
              </div>

              {/* Description */}
              <div className="product-description">
                <h4>Description:</h4>
                <p>
                  {product.description || 
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'}
                </p>
              </div>

              {/* Features/Highlights */}
              {product.features && product.features.length > 0 && (
                <div className="product-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="quantity-section">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => this.handleQuantityChange('decrement')}
                  >
                    −
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="qty-input"
                  />
                  <button
                    className="qty-btn"
                    onClick={() => this.handleQuantityChange('increment')}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="product-actions">
                <Button
                  color="primary"
                  className="btn-add-to-cart"
                  disabled={product.inStock === false}
                >
                  Add to Cart
                </Button>
                <Button
                  color="outline-secondary"
                  className="btn-add-to-wishlist"
                >
                  ♡ Add to Wishlist
                </Button>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  }
}

export default ProductQuickView;