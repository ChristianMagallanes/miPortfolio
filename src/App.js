import React from 'react';  
import './App.css'; 
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { AboutMe } from "./components/AbutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

function App() {
  
  return (
    <div className='Body'>
      
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
     
    </div>
  );
}

export default App;
