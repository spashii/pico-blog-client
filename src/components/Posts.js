import React, {useState, useEffect} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Post } from '.';

import loadingGif from '../public/loading.gif'

const Posts = () => {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // const url = "http://localhost:3000/api/posts"
    const url = 'https://pico-flask.herokuapp.com/api/posts';
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  return (
    <Col>
    {!isLoaded ? (<img height={30} src={loadingGif} alt='loadingGif'/>): 
      posts.map((post) => (
        <Row className="justify-content-center" key={post._id}>
          <Post post={post} />
        </Row>
      ))}
    </Col>
  );
};

export default Posts;
