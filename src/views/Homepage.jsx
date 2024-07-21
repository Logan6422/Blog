import React from 'react';
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function Homepage() {
  return (
    <section className="hp-container flex flex-col items-center h-screen w-full">
      <Header/>
      <Body/>
      <Footer/>
    </section>
  );
}
