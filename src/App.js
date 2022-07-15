import logo from "./logo.svg";
import "./App.css";
//import { BrowserRouter ,Route} from 'react-router/dom';
import Land from './components/index/Land';
import News from './components/Home/News';
import Games from './components/Games';
import Contact from './components/Contact';
import Footer from './components/Footer/footer';
// import { BrowserRouter as Router, Switch, 
//  Route, Redirect,} from "react-router-dom";

function App() {


  return (

    <div className="App">

      {/* <Router>
        <switch>
          <Route exact path='/' component={Land}/>
          <Route path='/news' component={News}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/games' component={Games}/> */}
      {/* <Redirect to ='./'/> */}
      {/* </switch>
      </Router>  */}

      <Land />
      <Contact />
      <Footer />

      {/* <News />
      <Games />    */}


    </div>
  );
}

export default App;