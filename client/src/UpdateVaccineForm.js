import {useParams} from 'react-router-dom'

const UpdateVaccineForm = () => {
    const {bugId, id} = useParams()
    return(
        <div>
            <h1>UpdateVaccineForm</h1>
            <p>bug id: {bugId} </p>
            <p>vaccine id: {sadfid}</p>
        </div>
    )
}

export default UpdateVaccineForm