import React, { useEffect, useState } from 'react';
import './View.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const View = () => {
  const { id } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(true);
      }
    };

    fetchPost();
  }, [id]);

  if (error) {
    return (
      <div className="view-container">
        <div className="view-box">
          <p style={{ textAlign: 'center', color: 'red' }}>
            ❌ Post not found or server error.
          </p>
          <Link to="/Feed"><button className="q">Back</button></Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="view-container">
        <div className="view-box">
          <p style={{ textAlign: 'center' }}>⏳ Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="view-container">
      <div className="view-box">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p><i>{new Date(post.createdAt).toLocaleString()}</i></p>
        <Link to="/Feed">
          <button className="q">🔙 Back to Feed</button>
        </Link>
      </div>
    </div>
  );
};

export default View;
