import {BrowserRouter as Router , Routes , Route} from 'react-router-dom' ;
import Window from './components/Window';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Lastsec from './components/Lastsec';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Header/>
      <main>
      <Routes>
       <Route path ='/' element ={<Window/>} />
       <Route path ='/about' element ={<About/>} />
       <Route path ='/contact' element ={<Contact/>} />
        <Route path='/restaurant/:id' element ={<Details/>}/>
      </Routes>
      
      </main>
      
      <Lastsec/>
    </Router>
  );
}

export default App;
