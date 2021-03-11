import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
const NewFormBug = () => {
    const [name, setName] = useState('')
    const history = useHistory()

    const handleSubmit = async()=>{
        try{
          axios.post(`/api/bugs`,{name})
          history.push('/bugs')
        }catch(err){
          alert('error')
        }
    }
    return(
        <div>
            <h1>NewFormBug</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input 
                     value={name}
                     onChange={(e)=> setName(e.target.value)}
                     defaultValue={name} 
                     placeholder='Name' />
                </Form.Field>

                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default NewFormBug