import React from 'react';

import Card from 'react-bootstrap/Card';

const Post = ({ post }) => {
  return (
    <Card className="w-100 my-2">
      <Card.Body>
        <Card.Title>
          {post.author}
          <small className="text-muted ml-2 pl-2 border-left">
            {post.time_created}
          </small>
        </Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
