import React, { useState, Fragment, useEffect } from 'react'
import { Table } from 'react-bootstrap'
function Users() {
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            data.json().then(result=>{
                console.warn("result",result)
                setUser(result.data)
            })
        })
    },[])
    return (
        <Fragment> {/* to remove add div just add div in <> & </> */}
            <h1>Users Listing</h1>
            {/* <Button variant="primary">primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">warning</Button>
            <Button variant="danger">danger</Button>
            <Button variant="link">link</Button>
            <Button variant="light">light</Button> */}
            {
                /* user.length===5?<div>yes</div>:<div>no</div>
                 user.map((item,i)=>
                    <div key={i}>{item.name}, Age : {item.age}</div>
                ) */
            }
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Employee name</th>
                        <th>Employee Salary</th>
                        <th>Employee Age</th>
                    </tr>
                    {
                        user.map((item,index)=>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_salary}</td>
                                <td>{item.employee_age}</td>
                            </tr>
                        )
                    }
                </thead>
            </Table>
        </Fragment >
    )
}

export default Users;
