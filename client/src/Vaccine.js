import { Link } from "react-router-dom"
import { Card , Button} from "semantic-ui-react"

const Vaccine = (props)=>{
    const {bugId, id, name, maker, effectiveness} = props
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
             <Button color='red'>Delete</Button>
             <Link to={`/bugs/${bugId}/vaccines/${id}/edit`}>
                <Button >Update</Button>
             </Link>
           </div>
        </Card.Content>
      </Card>
    )
}
export default Vaccine