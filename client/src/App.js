import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Viruses from './Viruses';
import Hospitals from './Hospitals';
import Virus from './Virus';
import NavBar from './Navbar';
import { Container } from 'semantic-ui-react';
import Doctors from './Doctors';


function App() {
  return (
    <>
     <NavBar />
     <Container>
       <Switch>
        <Route exact path='/' component={Viruses} />
        <Route exact path='/hospitals' component={Hospitals} />
        <Route exact path='/doctors' component={Doctors} />
        <Route exact path='/viruses/:id' component={Virus} />
       </Switch>
      </Container>
    </>

  );
}

export default App;
