import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Viruses from './Viruses';
import Hostpitals from './Hostpitals';
import Virus from './Virus';
import NavBar from './Navbar';


function App() {
  return (
    <>
     <NavBar />
       <Switch>
        <Route exact path='/' component={Viruses} />
        <Route exact path='/hostpitals' component={Hostpitals} />
        <Route exact path='/viruses/:id' component={Virus} />
       </Switch>
    </>

  );
}

export default App;
