import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'

const Virus =() => {
    const {id} = useParams()
    let history = useHistory();

    const deleteVirus = async () => {
      let res = await axios.delete(`/api/bugs/${id}`)
      history.push('/')
    }
    return (
        <>
          <h1>Virus has id: {id}
            
          </h1>
          <p  onClick={deleteVirus}>delete</p>
          <p  onClick={()=> history.goBack()}>go back</p>
        </>
    )
}

export default Virus