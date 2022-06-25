import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import Contact from './Contact';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div className="app">
      <div className='brand'>Simple Website</div>
      <nav className='nav'>
        <Link to='/' className='nav-item'>Home</Link>
        <Link to='/profile' className='nav-item'>Profile</Link>
        <Link to='/blog' className='nav-item'>Blog</Link>
        <Link to='/contact' className='nav-item'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetail />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
