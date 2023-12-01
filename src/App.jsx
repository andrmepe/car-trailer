import MainPage from "./page/MainPage";
import ErrorPage from "./page/ErrorPage";
import Contact from "./page/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./page/Gallery";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div>
     <Navbar scrollToSection={scrollToSection}/>
     <Gallery/>
     <MainPage/>
     <Contact/>
     <Footer/>
    
    </div>
  )
}

export default App
