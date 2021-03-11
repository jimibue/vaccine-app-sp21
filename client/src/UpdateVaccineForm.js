import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

const UpdateVaccineForm = () => {
    const { bugId, id } = useParams()
    const [ bug, setBug ] = useState(null)
    const [ name, setName] = useState('')
    const [ effectiveness, setEffectiveness] = useState('')
    const [ maker, setMaker] = useState('')
    const history = useHistory()
    // onmount get Vaccine data
    useEffect(() => {
        getVaccine()
    }, [])

    const getVaccine = async () => {
        try {
            let res = await axios.get(`/api/bugs/${bugId}/vaccines/${id}`)
            setBug(res.data)
            //useState the setter are not syncou
            setName(res.data.name)
            setEffectiveness(res.data.effectiveness)
            setMaker(res.data.maker)
        } catch (err) {
            alert(err)
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault() // semanitic UI does this for us
        console.log({maker, name, effectiveness})
        try{
            axios.put(`/api/bugs/${bugId}/vaccines/${id}`,{maker, name, effectiveness})
            // if successfull lets go back ie (navaigate back)
            history.goBack()
            // history.push(`/bugs/${bugId}`)
        }catch(err){
           alert(err)
        }
    }
    // wait for axios to finish call
    if (!bug) {
        return <p>getting Bug</p>
    }
    
    return (
        <div>
            <h1>UpdateVaccineForm</h1>
            <p>bug id: {bugId} </p>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input 
                     value={name}
                     onChange={(e)=> setName(e.target.value)}
                     defaultValue={name} 
                     placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <label>Effectiveness</label>
                    <input 
                     value={effectiveness}
                     onChange={(e)=> setEffectiveness(e.target.value)}
                     defaultValue={effectiveness} 
                     placeholder='Effectiveness' />
                </Form.Field>
                <Form.Field>
                    <label>Maker</label>
                    <input  
                     value={maker}
                     onChange={(e)=> setMaker(e.target.value)}
                    defaultValue={maker} 
                    placeholder='Maker' />
                </Form.Field>

                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default UpdateVaccineForm