import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'

const Bugs =() => {
    const {id} = useParams()
    let history = useHistory();

    const deleteBug = async () => {
      let res = await axios.delete(`/api/bugs/${id}`)
      history.push('/')
    }
    return (
        <>
          <h1>Bug has id: {id}
            
          </h1>
          <p  onClick={deleteBug}>delete</p>
          <p  onClick={()=> history.goBack()}>go back</p>
        </>
    )
}

export default Bugs