import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/layout';
import { Hero } from './components/hero';
import { ContactUs } from './components/contactUs';
import { Team } from './components/team';
import { Faq } from './components/faq';
import { TNC } from './components/tnc';
import { AboutUs } from './components/aboutCab';
import { SCards } from './components/ourServices';


function App() {
    return (
      <Router>
      <Layout>
          <Routes>
              {/* Define the route for the home page */}
              <Route path="/" element={<Hero />} />
              {/* Define the route for the ContactUs page */}
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/team" element={<Team />} />
              <Route path="/Faqs" element={<Faq />} />
              <Route path="/tnc" element={<TNC />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/OurServices" element={<SCards />} />
              
          </Routes>
      </Layout>
  </Router>
    );
}

export default App;
