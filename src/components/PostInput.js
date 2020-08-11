import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PostInput = () => {
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    const data = { author, body };
    setAuthor('');
    setBody('');
    const url = 'http://localhost:3000/api/posts';
    await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
      .then((res) => res.json(res))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Col>
        <Row>
          <Card className="w-100 mt-2 mb-4">
            <Card.Body>
              <Card.Title>new post</Card.Title>
              <Card.Text as="div">
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-100 mb-2"
                    type="text"
                    placeholder="what's your name?"
                  />
                  <Form.Control
                    onChange={(e) => setBody(e.target.value)}
                    className="mb-2"
                    type="text"
                    placeholder="say something. . ."
                  />
                  <Button size="sm" variant="secondary" type="submit">
                    submit
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </>
  );
};

export default PostInput;
