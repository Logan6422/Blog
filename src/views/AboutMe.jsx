import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body"
import angel from '../assets/angel.jpg';

export default function AboutMe(){
    return(
        <section className="hp-container flex flex-col items-center h-screen w-full min-h-screen">
             <Header/>
             <Body body_text="Informasao" blog_title="About Me" img_src={angel}/>
             <Footer/>
        </section>
    );
}