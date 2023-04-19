import React  from 'react';
import './App.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Subscription from './Subscription';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*import WatchScreen from './WatchScreen';*/


  const App = () => {
  return (
    <>
   
    <div className='app_container'>
      <Router>
      <Sidebar />
      <Container fluid className="app_main">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/subscription' >
          <Subscription />
          </Route>
      </Switch>
      </Container>
      </Router>
    </div>
    </>  
  );
  }


export default App;
