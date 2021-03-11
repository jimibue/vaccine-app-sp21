import axios from "axios"
import { Link } from "react-router-dom"
import { Card , Button} from "semantic-ui-react"

// THINK ABOUT DELETE

// what is api call for delete method and route
// DELETE	/api/bugs/:bug_id/vaccines/:id

// how do a remove an object from an array and return a new array => filter

const Vaccine = (props)=>{
    const {bugId, id, name, maker, effectiveness, deleteVaccine} = props

    const deleteVaccineClickHandler = async ()=>{
      try{
      // axios call to delete
      let res = await axios.delete(`/api/bugs/${bugId}/vaccines/${id}`)  
      console.log(res)
      // than call to update UI
      deleteVaccine(id)
      } catch(err){
        alert('err')
      }
    }
    return (
        <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{effectiveness}% effective</Card.Meta>
          <Card.Description>
            Made by {maker}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
           <div >
             <Button onClick={deleteVaccineClickHandler} color='red'>Delete</Button>
             <Link to={`/bugs/${bugId}/vaccines/${id}/edit`}>
                <Button >Update</Button>
             </Link>
           </div>
        </Card.Content>
      </Card>
    )
}
export default Vaccine