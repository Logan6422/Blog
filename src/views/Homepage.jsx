import React from 'react';
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function Homepage() {
  return (
    <section className="hp-container flex flex-col items-center h-screen w-full min-h-screen">
      <Header/>
      <Body 
          body_text ='Proyecto blabla Proyecto blabla Proyecto blabla Proyecto blabla Proyecto blabla Proyecto blabla V Proyecto blabla Proyecto blablaProyecto blabla Proyecto blabla Proyecto blablaProyecto blablaProyecto blabla' 
          blog_title="Blog NASHEX"
        />
      <Footer/>
    </section>
  );
}
