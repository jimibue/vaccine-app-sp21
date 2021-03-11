import { Button, Form } from "semantic-ui-react"
import {useState} from 'react'
import axios from "axios"

const NewVaccineForm = (props) => {
    // what do we need?
    // values in our form - name effectiveness and maker,

    // bug_id

    // what is the path to our rails api (create a vaccine)
    // POST	/api/bugs/:bug_id/vaccines

    // steps? 
    // get bug_id
    // Form UI (setup input state here)
    // handle submit function
    // post data (acutally save vaccine in database) => submit
    // INCORRECT navigate back to bug show page
    // is give our newly vaccine back to BUg.js and have Bug.js add it to vaccines
    const [name, setName] = useState('')
    const [effectiveness, setEffectiveness] = useState('')
    const [maker, setMaker] = useState('')

    const {bugId, addVaccine, setShowNewForm} = props

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log({name, effectiveness, maker})
        try{
          let res = await axios.post(`/api/bugs/${bugId}/vaccines`, {name, effectiveness, maker})
          addVaccine(res.data)
          setShowNewForm(false)
        }
        catch(err){
            alert('err')
        }
    }
    return (
        <div>
            <h1>NewVaccineForm</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input 
                     value={name}
                     onChange={(e)=>setName(e.target.value)}
                     placeholder='Name'
                     />
                </Form.Field>
                <Form.Field>
                    <label>Effectiveness</label>
                    <input
                     value={effectiveness}
                     onChange={(e)=>setEffectiveness(e.target.value)}
                     placeholder='Effectiveness' />
                </Form.Field>
                <Form.Field>
                    <label>Maker</label>
                    <input 
                       value={maker}
                       onChange={(e)=>setMaker(e.target.value)}
                    placeholder='Maker' />
                </Form.Field>
  
                <Button type='submit'>Submit</Button>
            </Form>

        </div>
    )
}

export default NewVaccineForm