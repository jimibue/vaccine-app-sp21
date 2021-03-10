import { useParams } from 'react-router-dom'

const UpdateFormBug = () => {
    const { id } = useParams()
    return(
        <div>
            <h1>UpdateFormBug</h1>
            <h1>bug id: {id}</h1>
        </div>
    )
}

export default UpdateFormBug