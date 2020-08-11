import React from 'react';

import Card from 'react-bootstrap/Card';
import formatRelative from 'date-fns/formatRelative'

const Post = ({ post }) => {
  // const fuzzyTime = (date) => {
  //   const delta = Math.round((+new Date() - date) / 1000);
  //   console.log(delta)
  //   const minute = 60,
  //     hour = minute * 60,
  //     day = hour * 24,
  //     week = day * 7;

  //   let fuzzy;

  //   if (delta < 30) {
  //     fuzzy = 'just then';
  //   } else if (delta < minute) {
  //     fuzzy = delta + ' seconds ago';
  //   } else if (delta < 2 * minute) {
  //     fuzzy = 'a minute ago';
  //   } else if (delta < hour) {
  //     fuzzy = Math.floor(delta / minute) + ' minutes ago';
  //   } else if (Math.floor(delta / hour) == 1) {
  //     fuzzy = '1 hour ago';
  //   } else if (delta < day) {
  //     fuzzy = Math.floor(delta / hour) + ' hours ago';
  //   } else if (delta < day * 2) {
  //     fuzzy = 'yesterday';
  //   }

  //   return fuzzy;
  // };

  return (
    <Card className="w-100 my-2">
      <Card.Body>
        <Card.Title>
          {post.author}
          <small className="text-muted ml-2 pl-2 border-left">
            {
              // fuzzyTime(new Date(post.time_created))
              formatRelative(new Date(post.time_created), new Date())
            }
          </small>
        </Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
