import React from 'react';
import { User } from '../model/Model'
interface AppState{
  user: User
}



export class App extends React.Component<{},{}>{



  render(){
    return(
      <div>App from class works!!</div>
    )
  }
}

