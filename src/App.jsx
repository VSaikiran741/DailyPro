import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './comp/Login';
import Register from './comp/Register';
import Post from './comp/Post';
import Feed from './comp/Feed';
import View from './View'; // ✅ Corrected from 'Veiw'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Feed" element={<Feed />} />
          <Route path="/View/:id" element={<View />} /> {/* ✅ Corrected route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
