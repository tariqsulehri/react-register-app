import React, {Component} from 'react';
import User from  '../src/components/user';

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
            <User />
        </div>
      )
    }
  }

export default App;
