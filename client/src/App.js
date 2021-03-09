import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Bugs from './Bugs';
import Hospitals from './Hospitals';
import Bug from './Bug';
import NavBar from './Navbar';
import { Container } from 'semantic-ui-react';
import Doctors from './Doctors';


function App() {
  return (
    <>
     <NavBar />
     <Container>
       <Switch>
        <Route exact path='/' component={Bugs} />
        <Route exact path='/hospitals' component={Hospitals} />
        <Route exact path='/doctors' component={Doctors} />
        <Route exact path='/bugs/:id' component={Bug} />
       </Switch>
      </Container>
    </>

  );
}

export default App;
