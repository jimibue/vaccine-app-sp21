import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import NewVaccineForm from './NewVaccineForm'
import Vaccine from './Vaccine'


const Bug = () => {
  const { id } = useParams()
  let history = useHistory();

  const [bug, setBug] = useState({})
  const [showNewForm, setShowNewForm] = useState(false)
  const [vaccines, setVaccines] = useState([])

  // onMount  useEffect(()=>{},[])
  useEffect(() => {
    getBug()
  }, [])

  const getBug = async () => {
    try {
      let res = await axios.get(`/api/bugs/${id}`)
      setBug(res.data.bug)
      setVaccines(res.data.vaccines)

    } catch (err) {
      alert('error check console')
    }
  }

  const deleteBug = async () => {
    let res = await axios.delete(`/api/bugs/${id}`)
    history.push('/')
  }

  const deleteVaccine = (idOfVaccineThatWasDeleted) =>{
      const filterVaccines = vaccines.filter(v => v.id != idOfVaccineThatWasDeleted)
      setVaccines(filterVaccines)
  }
  const renderVaccines = ()=>{
    return vaccines.map(vaccine => <Vaccine deleteVaccine={deleteVaccine} key={vaccine.id} bugId={id} {...vaccine}/>)
  }

  const addVaccine =(vaccine)=>{
    // add something to an array and return a new array ...
    const newVaccines = [vaccine, ...vaccines]
    setVaccines(newVaccines)
  }
  return (
    <>
     <Button onClick={() => history.goBack()}>go back</Button>
      <Card fluid color='red'>
      <Card.Content>
         <Card.Header style={{display:'flex', justifyContent:'space-between'}}>
           {bug.name} 
           <div >
             <Button color='red' onClick={deleteBug}>Delete</Button>
             <Link  to={{ pathname:`/bugs/${id}/edit`, bug: bug,  x:'yo' }}>
                <Button>Update</Button>
             </Link>
             {/* <Link  to={`/bugs/${id}/edit`}>
                <Button>Update</Button>
             </Link> */}
           </div>
         </Card.Header>
         </Card.Content>
        </Card>

        <Button style={{marginBottom:'20px'}} color='green' onClick={()=> setShowNewForm(!showNewForm)} >
         {showNewForm ? 'hide form': 'New Vaccine'}
        </Button>
       {showNewForm && <NewVaccineForm setShowNewForm={setShowNewForm} addVaccine={addVaccine} bugId={id} />}
      <Card.Group>
        {renderVaccines()}
      </Card.Group>
     
    </>
  )
}

export default Bug