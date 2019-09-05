import  React, {Component}    from 'react';
import  {getUsers, saveUser}  from '../services/userService';
import { Button,
         Col, 
         Container ,
         Form, 
         FormGroup, 
         FormControl, 
         FormLabel  }        from 'react-bootstrap';
import uuid                  from 'uuid';

class User extends Component {
    constructor(props){
       super(props);
         this.state={
               user : {id:'', name:'', email:'',  password:''},
               data : []
          } 
    } 
 

async componentDidMount(){
     try{
          const { data } =  await getUsers();
          this.setState({data});
          con
     }catch(ex){
         if(ex.response  && ex.response.status >= 400 && ex.response.status <= 500 ){
            console.log('An Expected Error Has Occoured....', ex.message);
         }  
     }
}   


  handleChange=(e)=>{
      this.setState({user : {...this.state.user ,[e.target.name]:e.target.value}});
  }

  handleSubmit= async (e)=>{
    e.preventDefault();
    
    try{
           await this.setState({user:{...this.state.user , id: uuid()}});
           console.log('resp.......:',this.state.user);
           const {data} = await saveUser(this.state.user);
           console.log('resp.......:', data); 

          }catch(ex){
          if(ex.response  && ex.response.status >= 200 && ex.response.status < 400 ){
              console.log('An Expected Error Has Occoured....', ex.message);
          }  
    }

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

// const mapStateToProps =  (state) =>{
//   return{
//         state
//   } 
// }

// const mapDispatchToProps =  (dispatch) =>{
//    return{
//          actions  : bindActionCreators(add_user, dispatch),
//         //editUser   : () => dispatch(),
//         //deleteUser : () => dispatch(),
//         //fetchUser  : () => dispatch(),
//         //fetchUsers : () => dispatch(),
//    } 
// }
 
//export default connect(mapDispatchToProps, mapStateToProps)(User);
export default User; 