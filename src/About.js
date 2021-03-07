import React from 'react'
 class About extends React.Component{
     constructor(){
         super();
        /* this.state={
            name:'krishna',
            age:23
        } */
     }
     componentDidMount(){
        console.warn("props",this.props.company)
        console.warn("did mount")
     }
     componentDidUpdate(){
         console.warn("props is updated",this.props.company)
        //  console.warn("age is updated")
        // alert("age is updated")
     }
     render(){
         return(<div>
             <h1>About us page</h1>
             <h2>{this.props.company}</h2>
             {/* <h2>My name is {this.state.name}</h2>
             <h2>My age is {this.state.age}</h2>
             <button onClick={()=>{this.setState({age:22})}}>Update</button> */}
         </div>)
     }
 }

 export default About;