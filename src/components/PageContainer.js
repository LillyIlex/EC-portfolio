import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './pages/About';
import Footer from './components/pages/Footer';
import Project from '../components/pages/Project';
import Contact from './components/pages/Contact';
import ProjectGallery from './pages/ProjectGallery';
//import ProjectGallery from '../components/pages/ProjectGallery';
//import projects from './components/pages/projects.json'


function PageContainer() {
  return (

    <Router>
      <div>
       <NavTabs />
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Define a route that will have descendant routes */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<ProjectGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default PageContainer;