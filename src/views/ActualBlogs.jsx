import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ActualBlogs() {
    return (
        <section className="hp-container flex flex-col items-center h-screen w-full min-h-screen">
            <Header />
            <section className="flex flex-grow items-center justify-center w-full">
                <ul className="blog-item-container flex flex-col text-secondary gap-2">
                    <li className="blog-item cursor-pointer hover:underline">Blog de Prueba 1</li>
                    <li className="blog-item cursor-pointer hover:underline">Blog de Prueba 2</li>
                    <li className="blog-item cursor-pointer hover:underline">Blog de Prueba 3</li>
                    <li className="blog-item cursor-pointer hover:underline">Blog de Prueba 4</li>
                </ul>
            </section>
            <Footer />
        </section>
    );
}
