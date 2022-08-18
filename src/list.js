import React from'react' ;
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

class List extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/candidate/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data);
        });
    }

    componentDidMount(){
        this.fetchData();
    }
    render(){
        const candData=this.state.data;
        const rows=candData.map((cand)=>
            <tr key={cand.id}>
                <td>{cand.full_name}</td>
                <td>{cand.email}</td>
                <td>{cand.contact}</td>
                <td>{cand.address}</td>
                <td id="p1">{cand.status}</td>
                
                <td>
                        <Button variant="info" className='m-3' onClick = {()=>document.getElementById("p1").innerHTML = "Accepted"} >Accept </Button>{''}
                        <Button variant="danger" onClick = {()=>document.getElementById("p1").innerHTML = "Rejected"} >Reject </Button>{''}
                </td>
            </tr>
        );
     return(
        <div>
        <Table  striped bordered hover size= "sm"  >
            <thead>
             <tr>
                <th>Full name</th>
                <th>Email</th>
                <th>Contact</th>
                <th> Address </th>
                <th>status</th>
                <th>Action</th>
                
             </tr>
            </thead>
            <tbody>
                
            {rows}
                
            </tbody>
        </Table>
        
        <Button href="/add" variant="dark" size="lg">Add Candidate</Button> 
      </div>
    );
  }

}
export default List;