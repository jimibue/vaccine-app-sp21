import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import NewVaccineForm from './NewVaccineForm'
import Vaccine from './Vaccine'

const dummyBug = {
  id: 1,
  name: 'Covid'
}

const dummyVaccines = [
  { id: 1, name: 'campell', effectiveness: 90.00, maker: 'J &J' },
  { id: 2, name: 'Tacos', effectiveness: 90.00, maker: 'J &J' },
]

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
      let res = await axios.get(`XX/api/bugs/${id}`)
      setBug(res.data.bug)
      setVaccines(res.data.vaccines)

    } catch (err) {
      alert('error check console')
      setBug(dummyBug)
      setVaccines(dummyVaccines)
    }
  }

  const deleteBug = async () => {
    let res = await axios.delete(`/api/bugs/${id}`)
    history.push('/')
  }
  const renderVaccines = ()=>{
    return vaccines.map(vaccine => <Vaccine key={vaccine.id} bugId={id} {...vaccine}/>)
  }
  return (
    <>
      <Card fluid color='red'>
      <Card.Content>
         <Card.Header style={{display:'flex', justifyContent:'space-between'}}>
           {bug.name} 
           <div >
             <Button color='red' onClick={deleteBug}>Delete</Button>
             <Link to={`/bugs/${id}/edit`}>
                <Button>Update</Button>
             </Link>
           </div>
         </Card.Header>
         </Card.Content>
        </Card>

        <Button color='green' onClick={()=> setShowNewForm(!showNewForm)} >
         {showNewForm ? 'hide form': 'New Vaccine'}
        </Button>
       {showNewForm && <NewVaccineForm />}
      <Card.Group>
        {renderVaccines()}
      </Card.Group>
      <p onClick={() => history.goBack()}>go back</p>
    </>
  )
}

export default Bug