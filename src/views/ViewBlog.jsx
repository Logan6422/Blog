import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

export default function ViewBlog() {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    assets: [],
  });

  useEffect(() => {
    // Reemplaza 'blogId' con el ID del blog que deseas obtener
    const blogId = '669d650f41cd4d8e5c19c119'; // puedes pasar esto como prop si es dinámico
    fetch(`/api/blogs/${blogId}`)
      .then(response => response.json())
      .then(data => {
        setBlog(data);
      })
      .catch(error => {
        console.error('Error fetching the blog:', error);
      });
  }, []);

  return (
    <section className="hp-container flex flex-col items-center h-screen w-full min-h-screen">
      <Header />
      <Body 
        body_text={blog.content} 
        blog_title={blog.title} 
        img_src={blog.assets.length > 0 ? blog.assets[0].url : ''} 
      />
      <Footer />
    </section>
  );
}
