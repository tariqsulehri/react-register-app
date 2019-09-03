import React, {Component} from 'react';
import { Button,
         Col, 
         Container ,
         Form, 
         FormGroup, 
         FormControl, 
         FormLabel  } from 'react-bootstrap';
import uuid  from 'uuid';

class User extends Component {
    constructor(props){
       super(props);
         this.state={
               user : {id:'', name:'', email:'',  password:''}
          } 
    } 
 
  handleChange=(e)=>{
      this.setState({user : {...this.state.user ,[e.target.name]:e.target.value}});
  }

  handleSubmit= async (e)=>{
    e.preventDefault();
    await this.setState({user:{...this.state.user , id: uuid()}});
  }

  render() { 
    
    const {name, password ,email} =  this.state;

    return (
            <Container>
                  <h4> Sign In </h4>
                  <Form onSubmit={this.handleSubmit}>
                    <Col>
                        <FormGroup controlId='userName'>
                            <FormLabel>User Name</FormLabel> 
                            <FormControl type='text' placeholder='Enter user name' name='name' value={name} onChange={this.handleChange} /> 
                        </FormGroup>
                    </Col>
                    
                    <Col>
                        <FormGroup controlId='userEmail'>
                            <FormLabel>Email Address</FormLabel> 
                            <FormControl type='email'  placeholder='Enter emaill' name='email' value={email} onChange={this.handleChange} /> 
                        </FormGroup>
                    </Col>  
                    <Col>  
                         <FormGroup controlId='userPassword'>
                            <FormLabel>Password </FormLabel> 
                            <FormControl type='password'  placeholder='****************' name='password' value={password} onChange={this.handleChange} /> 
                        </FormGroup>
                    </Col>
                    <Col>
                         <Button type='submit'>Register</Button>
                    </Col>
                 </Form>
         </Container>
    );
  }
}
 
export default User; 