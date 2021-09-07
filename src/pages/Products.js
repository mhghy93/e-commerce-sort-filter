import React, { Fragment, useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
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

  return (
    <Fragment>
      <Container>
        <div className="mt-5 d-flex justify-content-end">
          <Form.Group controlId="formGridState">
            <Form.Select onClick={sortPrice} defaultValue="Sort By">
              <option>Sort By</option>
              <option value="priceLowToHigh">Price - Low to High</option>
              <option value="priceHighToLow">Price - High to Low</option>
            </Form.Select>
          </Form.Group>
        </div>
        <Row className="mt-5">
          {laptopProducts.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Products;
