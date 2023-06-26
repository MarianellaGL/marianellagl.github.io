import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const Container = () => {
    return ( 
        <>
        <div>
        <Router>
        <Header />

        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/cv" element={<Hero />}   />
        </Routes>  
        <Footer /> 
  
        </Router>
          </div>
        </>
     );
}
 
export default Container;