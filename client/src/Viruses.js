import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const dummyData = [
  {id:1, name:'vir 1'},
  {id:2, name:'vir 2'},
]
const Viruses =() => {
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
          <Link to={`/viruses/${bug.id}`}>
            <div>
              {bug.name}
            </div>
          </Link>
        )
      })
    }

    return (
        <>
          <h1>Bugs</h1>
          {renderBugs()}
        </>
    )
}

export default Viruses