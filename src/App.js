
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Featutres from './Components/Featutres';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Featutres/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
