import { useParams, useLocation, withRouter, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'

//// need to do axios call to get bug info to prepopulate form (optional)
//// add form UI here
//// add submit handler to form
//// do axios call to update Bug to database
// navigate back to bug show page
const UpdateFormBug = (props) => {
    const history = useHistory()
    const { id, x } = useParams()
    // const { bug, x } = useLocation()
    const [bug, setBug] = useState(null)
    const [name, setName] = useState('')

    // on mount run
    useEffect(() => {
        getBug()
    }, [])

    const getBug = async () => {
        try {
            let res = await axios.get(`/api/bugs/${id}`)
            setBug(res.data.bug)
            setName(res.data.bug.name)
        } catch (error) {
            alert(error)
        }
    }

    console.log(props.location)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            let res = await axios.put(`/api/bugs/${id}`, {name:name})
            history.goBack()
        } catch (error) {
            alert('err')
        }
        console.log({name:name})
    }
    if (!bug) return <p>loading</p>
    return (
        <div>
            <h1>UpdateFormBug</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input 
                      defaultValue={name} 
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      placeholder='Name' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default withRouter(UpdateFormBug)