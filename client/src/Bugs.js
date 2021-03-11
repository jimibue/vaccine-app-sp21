import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Bugs =() => {
    useEffect(()=>{
      getBugs()
    },[])

    const [bugs,setBugs] = useState([])

    const getBugs = async () =>{
       try{
         let res = await axios.get('/api/bugs')
         setBugs(res.data)

       } catch(err){
         alert('error occured look at console')
       }
    }

    const renderBugs =()=>{
      return bugs.map( bug => {
        return(
          <Link to={`/bugs/${bug.id}`}>
            <div>
              {bug.name}
            </div>
          </Link>
        )
      })
    }

    return (
        <>
          <h1 style={{display:'flex', justifyContent:'space-between'}}>
            <span>Bugs</span>
            <Link to='/bugs/new'>
            <Button>New Bug</Button>
            </Link>
          </h1>
          {renderBugs()}
        </>
    )
}

export default Bugs