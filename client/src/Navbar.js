import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Menu>
            <Link to='/'>
                <Menu.Item>
                    Viruses
                </Menu.Item>
            </Link>
            <Link to='/hospitals'>
                <Menu.Item>
                    Hospitals
              </Menu.Item>
            </Link>
            <Link to='/doctors'>
                <Menu.Item>
                    Doctors
              </Menu.Item>
            </Link>

        </Menu>
    )
}

export default NavBar