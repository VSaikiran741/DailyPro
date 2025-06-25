import React, { useState } from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handlePublish = async () => {
    if (!title || !description) {
      alert("Please fill in both fields");
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/post', {
        title,
        description
      });

      alert("✅ Post published!");
      navigate('/Feed');
    } catch (error) {
      if (error.response) {
        alert("❌ " + error.response.data.error);
      } else {
        alert("❌ Server error");
      }
      console.error("Axios error:", error);
    }
  };

  return (
    <div className='post-container'>
      <h2 className="post-heading">📝 Create a New Post</h2>

      <label className="post-label">Title</label>
      <div className="post-input-wrapper">
        <input
          type="text"
          placeholder='Enter a creative title...'
          className="post-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <label className="post-label">Description</label>
      <div className="post-textarea-wrapper">
        <textarea
          placeholder="Write your thoughts here..."
          className="post-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <button className="post-button" onClick={handlePublish}>📤 Publish Post</button>
    </div>
  );
};

export default Post;
