/**
 *
 * Homepage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';
import ProductQuickView from '../../containers/ProductQuickview';
import './Homepage.scss';

class Homepage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isQuickViewOpen: false,
      selectedProduct: null
    };
  }

  toggleQuickView = (product = null) => {
    this.setState(prevState => ({
      isQuickViewOpen: !prevState.isQuickViewOpen,
      selectedProduct: product
    }));
  };

  handleQuickViewClick = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    this.toggleQuickView(product);
  };

  render() {
    const { isQuickViewOpen, selectedProduct } = this.state;

    // Sample categories data - replace with your actual data
    const categories = [
      {
        id: 1,
        name: 'Women Fashion',
        image:
          'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600',
        productCount: 100,
        link: '/shop/women-fashion'
      },
      {
        id: 2,
        name: 'Cameras',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
        productCount: 100,
        link: '/shop/cameras'
      },
      {
        id: 3,
        name: 'Footwear',
        image:
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600',
        productCount: 100,
        link: '/shop/footwear'
      },
      {
        id: 4,
        name: 'Beauty Products',
        image:
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600',
        productCount: 100,
        link: '/shop/beauty'
      },
      {
        id: 5,
        name: 'Cosmetics',
        image:
          'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
        productCount: 100,
        link: '/shop/cosmetics'
      },
      {
        id: 6,
        name: 'Shoes',
        image:
          'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600',
        productCount: 100,
        link: '/shop/shoes'
      },
      {
        id: 7,
        name: 'Photography',
        image:
          'https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
        productCount: 100,
        link: '/shop/photography'
      },
      {
        id: 8,
        name: 'Clothing',
        image:
          'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600',
        productCount: 100,
        link: '/shop/clothing'
      },
      {
        id: 9,
        name: 'DSLR Cameras',
        image:
          'https://images.unsplash.com/photo-1606986601547-a4d886b671b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRzbHIlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D',
        productCount: 100,
        link: '/shop/dslr'
      },
      {
        id: 10,
        name: 'Skincare',
        image:
          'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600',
        productCount: 100,
        link: '/shop/skincare'
      },
      {
        id: 11,
        name: 'Apparel',
        image:
          'https://images.unsplash.com/photo-1521334884684-d80222895322?w=600',
        productCount: 100,
        link: '/shop/apparel'
      },
      {
        id: 12,
        name: 'Sports Shoes',
        image:
          'https://images.unsplash.com/photo-1606986601547-a4d886b671b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRzbHIlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D',
        productCount: 100,
        link: '/shop/sports-shoes'
      }
    ];

    // Sample features data
    const features = [
      { icon: '✓', title: 'Quality Product', color: '#ffc107' },
      { icon: '🚚', title: 'Free Shipping', color: '#ffc107' },
      { icon: '↺', title: '14-Day Return', color: '#ffc107' },
      { icon: '📞', title: '24/7 Support', color: '#ffc107' }
    ];

    // Sample featured products data - replace with your actual data
    const featuredProducts = [
      {
        id: 1,
        name: 'Professional DSLR Camera',
        category: 'Photography',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
        images: [
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
          'https://images.unsplash.com/photo-1606980663577-e45b0e6a5e23?w=600',
          'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600'
        ],
        price: 123.0,
        originalPrice: 149.0,
        rating: 5,
        reviews: 99,
        inStock: true,
        description:
          'Professional-grade DSLR camera with 24.2MP sensor, 4K video recording, and advanced autofocus system. Perfect for photography enthusiasts and professionals.',
        features: [
          '24.2 Megapixel CMOS Sensor',
          '4K Ultra HD Video Recording',
          'Advanced 45-Point Autofocus',
          'Built-in WiFi and Bluetooth',
          'Weather-Sealed Body'
        ],
        link: '/product/camera'
      },
      {
        id: 2,
        name: 'Blue Sweatshirt',
        category: 'Clothing',
        image:
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600',
        images: [
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600',
          'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600'
        ],
        price: 123.0,
        originalPrice: 159.0,
        rating: 4.5,
        reviews: 99,
        inStock: true,
        description:
          'Premium quality cotton blend sweatshirt with a comfortable fit. Features ribbed cuffs and hem for a classic look. Perfect for casual everyday wear.',
        features: [
          '80% Cotton, 20% Polyester Blend',
          'Soft Fleece Interior',
          'Ribbed Cuffs and Hem',
          'Machine Washable',
          'Available in Multiple Sizes'
        ],
        link: '/product/sweatshirt'
      },
      {
        id: 3,
        name: 'Elegant Table Lamp',
        category: 'Home Decor',
        image:
          'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
        images: [
          'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
          'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600'
        ],
        price: 123.0,
        originalPrice: 150.0,
        rating: 3.5,
        reviews: 99,
        inStock: true,
        description:
          'Classic ceramic table lamp with elegant pleated shade. Adds a warm, sophisticated touch to any room. Perfect for bedside tables or living room accents.',
        features: [
          'Premium Ceramic Base',
          'Pleated Fabric Shade',
          'Adjustable Brightness',
          'E26 Standard Bulb Base',
          'Stable Weighted Bottom'
        ],
        link: '/product/lamp'
      },
      {
        id: 4,
        name: 'Nike Air Sneakers',
        category: 'Footwear',
        image:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
        images: [
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
          'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600'
        ],
        price: 123.0,
        originalPrice: 180.0,
        rating: 4,
        reviews: 99,
        inStock: true,
        description:
          'High-performance athletic sneakers with superior cushioning and support. Features breathable mesh upper and durable rubber outsole for all-day comfort.',
        features: [
          'Air Cushioning Technology',
          'Breathable Mesh Upper',
          'Durable Rubber Outsole',
          'Lightweight Design',
          'Enhanced Ankle Support'
        ],
        link: '/product/sneakers'
      },
      {
        id: 5,
        name: 'Wireless Headphones',
        category: 'Electronics',
        image:
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
        images: [
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
          'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600'
        ],
        price: 89.0,
        originalPrice: 120.0,
        rating: 4.6,
        reviews: 140,
        inStock: true,
        description:
          'Premium wireless headphones with active noise cancellation and superior sound quality. Up to 30 hours of battery life for uninterrupted listening.',
        features: [
          'Active Noise Cancellation',
          '30-Hour Battery Life',
          'Bluetooth 5.0 Connectivity',
          'Premium Sound Quality',
          'Foldable Design with Case'
        ],
        link: '/product/headphones'
      },
      {
        id: 6,
        name: 'Classic Wrist Watch',
        category: 'Accessories',
        image:
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
        images: [
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
          'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600'
        ],
        price: 199.0,
        originalPrice: 249.0,
        rating: 4.7,
        reviews: 210,
        inStock: true,
        description:
          'Timeless mechanical wristwatch with precision movement and scratch-resistant sapphire crystal. Features genuine leather strap and water resistance up to 50m.',
        features: [
          'Automatic Mechanical Movement',
          'Sapphire Crystal Glass',
          'Genuine Leather Strap',
          '50m Water Resistance',
          'Luminous Hands and Markers'
        ],
        link: '/product/watch'
      },
      {
        id: 7,
        name: 'Leather Backpack',
        category: 'Bags',
        image:
          'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600',
        images: [
          'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600'
        ],
        price: 149.0,
        originalPrice: 199.0,
        rating: 4.4,
        reviews: 80,
        inStock: true,
        description:
          'Premium full-grain leather backpack with spacious compartments and padded laptop sleeve. Perfect for daily commute or travel with style and functionality.',
        features: [
          'Full-Grain Leather Construction',
          'Padded Laptop Compartment (15")',
          'Multiple Organizational Pockets',
          'Adjustable Padded Straps',
          'YKK Zippers'
        ],
        link: '/product/backpack'
      },
      {
        id: 8,
        name: 'Skincare Serum Kit',
        category: 'Beauty',
        image:
          'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600',
        images: [
          'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600',
          'https://images.unsplash.com/photo-1556228578-dd6a763fd616?w=600'
        ],
        price: 59.0,
        originalPrice: 89.0,
        rating: 4.8,
        reviews: 175,
        inStock: false,
        description:
          'Complete skincare serum collection with vitamin C, hyaluronic acid, and retinol. Targets fine lines, hydration, and brightening for radiant, youthful skin.',
        features: [
          'Vitamin C Brightening Serum',
          'Hyaluronic Acid Hydration',
          'Retinol Anti-Aging Formula',
          'Dermatologist Tested',
          'Cruelty-Free and Vegan'
        ],
        link: '/product/skincare-serum'
      }
    ];

    const renderStars = rating => {
      const stars = [];
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;

      for (let i = 0; i < fullStars; i++) {
        stars.push(
          <span key={i} className='star filled'>
            ★
          </span>
        );
      }

      if (hasHalfStar) {
        stars.push(
          <span key='half' className='star half'>
            ★
          </span>
        );
      }

      const emptyStars = 5 - Math.ceil(rating);
      for (let i = 0; i < emptyStars; i++) {
        stars.push(
          <span key={`empty-${i}`} className='star empty'>
            ★
          </span>
        );
      }

      return stars;
    };

    return (
      <div className='homepage'>
        {/* Hero Banner Section */}
        <section className='hero-section mb-5'>
          <Container fluid>
            <Row className='flex-row'>
              <Col xs='12' lg='6' className='order-lg-2 mb-3 px-3 px-md-2'>
                <div className='home-carousel'>
                  <CarouselSlider
                    swipeable={true}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    slides={banners}
                    responsive={responsiveOneItemCarousel}
                  >
                    {banners.map((item, index) => (
                      <div key={index} className='banner-item'>
                        <img src={item.imageUrl} alt={item.title} />
                      </div>
                    ))}
                  </CarouselSlider>
                </div>
              </Col>
              <Col xs='12' lg='3' className='order-lg-1 mb-3 px-3 px-md-2'>
                <div className='d-flex flex-column h-100 justify-content-between'>
                  <div className='side-banner mb-3'>
                    <img src='/images/banners/banner-2.jpg' alt='Banner' />
                  </div>
                  <div className='side-banner'>
                    <img src='/images/banners/banner-5.jpg' alt='Banner' />
                  </div>
                </div>
              </Col>
              <Col xs='12' lg='3' className='order-lg-3 mb-3 px-3 px-md-2'>
                <div className='d-flex flex-column h-100 justify-content-between'>
                  <div className='side-banner mb-3'>
                    <img src='/images/banners/banner-2.jpg' alt='Banner' />
                  </div>
                  <div className='side-banner'>
                    <img src='/images/banners/banner-6.jpg' alt='Banner' />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Categories Section */}
        <section className='categories-section mb-5'>
          <Container>
            <div className='section-header mb-4'>
              <h2 className='section-title'>CATEGORIES</h2>
            </div>
            <Row>
              {categories.map(category => (
                <Col
                  key={category.id}
                  xs='6'
                  sm='6'
                  md='4'
                  lg='3'
                  className='mb-4'
                >
                  <Link to={category.link} className='category-card'>
                    <div className='category-image'>
                      <img src={category.image} alt={category.name} />
                    </div>
                    <div className='category-info'>
                      <h3 className='category-name'>{category.name}</h3>
                      <p className='category-count'>
                        {category.productCount} Products
                      </p>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Features Section */}
        <section className='features-section mb-5'>
          <Container>
            <Row>
              {features.map((feature, index) => (
                <Col key={index} xs='12' sm='6' md='3' className='mb-3'>
                  <div className='feature-card'>
                    <div
                      className='feature-icon'
                      style={{ color: feature.color }}
                    >
                      {feature.icon}
                    </div>
                    <h4 className='feature-title'>{feature.title}</h4>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Featured Products Section */}
        <section className='featured-products-section mb-5'>
          <Container>
            <div className='section-header mb-4'>
              <h2 className='section-title'>FEATURED PRODUCTS</h2>
            </div>
            <Row>
              {featuredProducts.map(product => (
                <Col
                  key={product.id}
                  xs='12'
                  sm='6'
                  md='4'
                  lg='3'
                  className='mb-4'
                >
                  <Link to={product.link} className='product-card'>
                    <div className='product-image'>
                      <img src={product.image} alt={product.name} />
                      <div className='product-overlay'>
                        <button
                          className='btn-quick-view'
                          onClick={e => this.handleQuickViewClick(e, product)}
                        >
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className='product-info'>
                      <h3 className='product-name'>{product.name}</h3>
                      <div className='product-price'>
                        <span className='current-price'>
                          ${product.price.toFixed(2)}
                        </span>
                        <span className='original-price'>
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className='product-rating'>
                        <div className='stars'>
                          {renderStars(product.rating)}
                        </div>
                        <span className='reviews'>({product.reviews})</span>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Product Quick View Modal */}
        <ProductQuickView
          isOpen={isQuickViewOpen}
          toggle={() => this.toggleQuickView()}
          product={selectedProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
