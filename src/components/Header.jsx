import { Link } from 'react-router-dom';

export default function Header(){
    return(
    <div className="hp-header text-secondary w-full max-w-4xl px-4">
        <h1 className="hp-header-title text-4xl flex justify-center pt-20 pb-5">
            BLOG TITULO
        </h1>
        <ul className="hp-navbar flex justify-center space-x-5 text-terciary">
            <li className="hp-navbar-item cursor-pointer hover:underline"><Link to="/">Home</Link></li>
            <li className="hp-navbar-item cursor-pointer hover:underline"><Link to="/ViewBlog">Posts</Link></li>
            <li className="hp-navbar-item cursor-pointer hover:underline"><Link to="/Login">Add Post</Link></li>
            <li className="hp-navbar-item cursor-pointer hover:underline"><Link to="/AboutMe">About me</Link></li>
        </ul>
    </div>
    );
}