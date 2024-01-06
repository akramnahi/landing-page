import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/hero';
import Analytics from './component/Analytics';
import Testimonial from './component/Testimonial';
import Services from './component/Services';
import Footer from './component/Footer';



const App = () => {
  return (
    <>  
      <Navbar />
      <Hero />
      <Analytics />
      <Testimonial />
      <Services />
      <Footer />
    </>  
  );
}

export default App;