import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Bugs from './Bugs';
import Hospitals from './Hospitals';
import Bug from './Bug';
import NavBar from './Navbar';
import { Container } from 'semantic-ui-react';
import Doctors from './Doctors';
import UpdateFormBug from './UpdateBugForm';
import NewFormBug from './NewBugForm';
import UpdateVaccineForm from './UpdateVaccineForm';


function App() {
  return (
    <>
     <NavBar />
     <Container>
       <Switch>
        <Route exact path='/' component={Bugs} />
        <Route exact path='/hospitals' component={Hospitals} />
        <Route exact path='/doctors' component={Doctors} />
        <Route exact path='/bugs/new' component={NewFormBug} />
        <Route exact path='/bugs/:id' component={Bug} />
        <Route exact path='/bugs/:id/edit' component={UpdateFormBug} />
        <Route exact path='/bugs/:bugId/vaccines/:id/edit' component={UpdateVaccineForm} />
       </Switch>
      </Container>
    </>

  );
}

export default App;
