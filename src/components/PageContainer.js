import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from '../components/NavTabs';
import Home from '../components/pages/Home';
import Header from '../components/pages/Header';
import Footer from '../components/pages/Footer';
import Project from '../components/pages/Project';
import Contact from '../components/pages/Contact';
import ProjectGallery from '../components/pages/ProjectGallery';
//import projects from './components/pages/projects.json'


function PageContainer() {
  return (

    <Router>
      <div>
        <Header />
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path='/' element={<Home />} />
          <Route path='Project' element={<Project />} />
          {/* <Route path='ProjectGallery' element={<ProjectGallery />} /> */}
          {/* Define a route that will have descendant routes */}
          <Route path='contact/*' element={<Contact />} />
          <Route path='ProjectGallery/*' element={<ProjectGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default PageContainer;