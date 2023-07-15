import Home from './components/Home';
import Fooder from './components/Fooder.js';
import Header from './components/Header.js';
import { Route, Routes } from 'react-router';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import './js/meyawo'


function App() {
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/testimonial' element={<Testimonial/>}></Route>
      </Routes>
      <Fooder/>
    </div>
    
  );
}

export default App;
