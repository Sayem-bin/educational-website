
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Not from './Components/Not/Not';
import Branches from './Components/Branches/Branches';
import Courses from './Components/Courses/Courses';



function App() {

  return (
    <div className='App'>
      <Router >
        <Header>
        </Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/branches">
            <Branches></Branches>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="*">
            <Not></Not>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>

  );
}

export default App;
