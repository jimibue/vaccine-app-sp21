import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Viruses from './Viruses';
import Hostpitals from './Hostpitals';
import Virus from './Virus';
import NavBar from './Navbar';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <>
     <NavBar />
     <Container>
       <Switch>
        <Route exact path='/' component={Viruses} />
        <Route exact path='/hostpitals' component={Hostpitals} />
        <Route exact path='/viruses/:id' component={Virus} />
       </Switch>
      </Container>
    </>

  );
}

export default App;
