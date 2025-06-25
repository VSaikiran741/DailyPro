import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/posts");
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='feed'>
      <div className="feed-header">
        <h1>📚 Welcome Back!</h1>
        <p className="feed-subtext">Here’s what’s happening today...</p>

        {posts.length === 0 ? (
          <p>No posts yet. Be the first to publish!</p>
        ) : (
          posts.map((post, index) => (
            <div key={post.id} className="post-card">
              <h3>Day {index + 1}: {post.title}</h3>
              <p className='data'>{post.description}</p>
              <p><i>{new Date(post.createdAt).toLocaleString()}</i></p>
              <Link to={`/View/${post.id}`}>
  <button className="view">🚪 View Post</button>
</Link>

              <br />
            </div>
          ))
        )}

        <Link to='/Login'>
          <button className="logout-button">🚪 Log Out</button>
        </Link>
      </div>
    </div>
  );
};

export default Feed;
