import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginComponent from "../components/LoginComponent"

export default function Login(){
    return(
        <section className="hp-container flex flex-col items-center h-screen w-full min-h-screen">
            <Header/>
            <LoginComponent/>
            <Footer/>
        </section>  
    );
}