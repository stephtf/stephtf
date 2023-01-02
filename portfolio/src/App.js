import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyStory from './components/MyStory';
import Projects from './components/Projects';
import Project1 from './components/project-components/Project1';
import Project2 from './components/project-components/Project2';
import Project3 from './components/project-components/Project3';
import Project4 from './components/project-components/Project4';
import Header from './components/header-footer/header-components/Header';
import Footer from './components/header-footer/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router> 
      <Header />
        <div className='body-container'>
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route path='/my-story' element={<MyStory />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project-1' element={<Project1 />} />
          <Route path='/project-2' element={<Project2 />} />
          <Route path='/project-3' element={<Project3 />} />
          <Route path='/project-4' element={<Project4 />} />
        </Routes> 
        </div>
      <Footer />
    </Router>
  );
}

export default App;
