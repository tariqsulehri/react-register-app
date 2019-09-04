import React, {Component} from 'react';
import Register from  './components/register';

import './App.css';

class App extends Component {
      constructor(props){
        super(props);    
        this.state={

        }
 }


    render(){ 
     // console.log(store.getState());
      return (
        <div>
            Jazz Cricket
            <hr/>
            <Register />
        </div>
      )
    }
  }

export default App;
