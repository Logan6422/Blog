import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function ViewBlog(){
    return(
        <section className="hp-container flex flex-col items-center h-screen w-full min-h-screen">
            <Header/>
            <Body/>
            <Footer/>
        </section>
    );
}