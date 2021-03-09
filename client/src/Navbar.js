import { Link } from 'react-router-dom'

const NavBar = ()=>{
    return (
        <div style={{display:'flex'}}>
            <Link to='/'>
              <div>
                  Home
              </div> 
            </Link>
            <Link to='/hostpitals'>
                Hostpitals
            </Link>

        </div>
    )
}

export default NavBar