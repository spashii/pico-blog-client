import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Posts } from '../components';

const Home = () => {
  return (
    <Row className="justify-content-md-center">
      <Col md lg="8" xl="6" className="mx-4">
        <Row>
          <Posts />
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
