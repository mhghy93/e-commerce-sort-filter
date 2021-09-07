import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ProductListItem = ({ product }) => {
  return (
    <Col className="mb-5" lg={4}>
      <Card className="shadow bg-white rounded h-100">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {product.category}
          </Card.Subtitle>
          <Card.Text className="text-muted">₹{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductListItem;
