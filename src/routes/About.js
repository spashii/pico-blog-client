import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <Row className="justify-content-md-center">
      <Col md lg="8" xl="6" className="mx-4">
        <Row>
          <Card className="w-100 my-2">
            <Card.Body>
              <Card.Title>about</Card.Title>
              <Card.Text as="div">
                pico blog is a 10^-12 blogging platform, so calm
                down 
                <ul>
                  <li><em>stuff to do</em></li>
                  <li>new post route</li>
                  <li>post REST api</li>
                  <li>using them</li>
                  <li>auth and auth</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Row>
  );
};

export default About;
