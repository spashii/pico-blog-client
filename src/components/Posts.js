import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Post } from '.';

const Posts = () => {
  const posts = [
    {
      id: 0,
      author: 'sameer',
      body: 'this is my post',
      time_created: '5 minutes ago',
    },
    {
      id: 1,
      author: 'rahi',
      body: 'shitpost',
      time_created: '1 hour ago',
    },
    {
      id: 2,
      author: 'samr',
      body:
        'hello this aslkdflaksdfjlkah asdlkjal asdkjf aksjie t rtjo laksdjflkj jaldskf lja jadklfj alksdjf laksdj flkaj sdlf a fjlakdjf lakjd lfkaj slkaj lksjdlkf lkajsflajsj3fha sdflahsdf la klkajddlf i roi4rou oerfg9 fg  rowiur riuweiu ksfj is my post',
      time_created: '2 days ago',
    },
    {
      id: 3,
      author: 'hulaj',
      body: 'never settle',
      time_created: 'a week ago',
    },
  ];

  return (
    <Col>
      {posts.map((post) => (
        <Row className="justify-content-center" key={post.id}>
          <Post post={post} />
        </Row>
      ))}
    </Col>
  );
};

export default Posts;
