import React, { Fragment, useState } from 'react';
import { Container, Row, Form, Col } from 'react-bootstrap';
import ProductListItem from '../components/ProductListItem';

import { products } from '../data/product';

const Products = () => {
  const [laptopProducts, setLaptopProducts] = useState(products);

  function sortPriceLowToHigh() {
    return [...laptopProducts].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  }

  function sortPriceHighToLow() {
    return [...laptopProducts].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
  }

  function sortDefault() {
    return [...laptopProducts].sort(
      (a, b) => parseFloat(a.id) - parseFloat(b.id)
    );
  }

  const sortPrice = (e) => {
    if (e.target.value === 'priceLowToHigh') {
      setLaptopProducts(sortPriceLowToHigh());
    } else if (e.target.value === 'priceHighToLow') {
      setLaptopProducts(sortPriceHighToLow());
    } else {
      setLaptopProducts(sortDefault());
    }
  };

  const filterProduct = (e) => {
    if (e.target.value !== 'All') {
      if (e.target.checked) {
        let filteredProduct = products.filter((product) => {
          return product.category === e.target.value;
        });
        setLaptopProducts(filteredProduct);
        document.getElementById('defaultSort').selected = true;
      } else {
        setLaptopProducts(products);
        document.getElementById('defaultSort').selected = true;
      }
    } else {
      setLaptopProducts(products);
      document.getElementById('defaultSort').selected = true;
    }
  };

  return (
    <Fragment>
      <Container>
        {/* Sort Products */}
        <div className="mt-5 d-flex justify-content-end">
          <Form.Group controlId="formGridState">
            <Form.Select onChange={sortPrice} defaultValue="Sort By">
              <option id="defaultSort">Sort By</option>
              <option value="priceLowToHigh">Price - Low to High</option>
              <option value="priceHighToLow">Price - High to Low</option>
            </Form.Select>
          </Form.Group>
        </div>
        {/* Sort Products End */}

        {/* Products and filter */}
        <Row>
          <Col lg={2} sm={2}>
            {/* Filter Products */}
            <div className="mt-5">
              <h5 className="font-weght-bold">Laptop Category</h5>
              <Form.Check
                type="radio"
                id="all"
                label="All"
                name="category"
                value="All"
                onChange={filterProduct}
              />
              <Form.Check
                type="radio"
                id="gamingLaptop"
                label="Gaming Laptop"
                value="Gaming Laptop"
                name="category"
                onChange={filterProduct}
              />
              <Form.Check
                type="radio"
                id="thinAndLightLaptop"
                label="Thin and Light Laptop"
                value="Thin and Light Laptop"
                name="category"
                onChange={filterProduct}
              />
              <Form.Check
                type="radio"
                id="businessLaptop"
                label="Business Laptop"
                value="Business Laptop"
                name="category"
                onChange={filterProduct}
              />
            </div>
            {/* Filter Products End */}
          </Col>
          <Col lg={10} sm={10}>
            {/* Products */}
            <Row className="mt-5">
              {laptopProducts.map((product) => (
                <ProductListItem key={product.id} product={product} />
              ))}
            </Row>
            {/* Products End */}
          </Col>
        </Row>
        {/* Products and filter end */}
      </Container>
    </Fragment>
  );
};

export default Products;
