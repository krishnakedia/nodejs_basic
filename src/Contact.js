
import React,{/* useEffect, */useState} from 'react'
function Contact(props)
{
    const [name, setname]=useState("krishna")
    /*both are same function test() or */ const test =(e)=> /* e means event */
    {
        console.warn("test Function",e.target.value)
        setname(e.target.value)
    }
    /* useEffect(()=>{
       // console.warn("hello from hook")
        console.warn("Check props",props.company)

    },[]) 
    useEffect(()=>{
         console.warn("Check props 2 for update",props.company)
 
     },[props.company])
    // const [age, setAge]=useState(22)

    let data = "Contact us Component" */
    return(
        <div>
            <h1>Contact Us Pages</h1>
            <input type="text" value={name} onChange={test} />
            <button onClick={test}>Click</button>
            {/* 
            <h1>{data}</h1>
            <h1>{props.name}</h1>
            <h2>{age}</h2>
            <button onClick={()=>setAge(23)}>Update age</button> */}
        </div>
    )
}

export default Contact;