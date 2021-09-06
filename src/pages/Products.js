import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductListItem from '../components/ProductListItem';

import { products } from '../data/product';

const Products = () => {
  return (
    <Fragment>
      <Container>
        <Row className="mt-5">
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Products;
