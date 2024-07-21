import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './views/Homepage'
import './styles/index.css'
import AboutMe from './views/AboutMe'
import Login from './views/Login'
import ActualBlogs from './views/ActualBlogs'
import ViewBlog from './views/ViewBlog'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/ActualBlogs" element={<ActualBlogs/>}/>
        <Route path='/ViewBlog' element={<ViewBlog/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
