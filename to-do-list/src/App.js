import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import TOdolist from './TOdolist';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        {/* <TOdolist></TOdolist> */}
        <Route exact path="/" element={<TOdolist></TOdolist>}/>

        <Route path="*" element={<div>404 page not found</div>} />

      </Routes>
     </BrowserRouter>

      </>    
  );
}

export default App;
