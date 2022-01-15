import React, {Component} from 'react';
import useFirebase from  './useFirebase'
import './App.css';

function App(){
  const {handleSignIn} = useFirebase();
  return (

    <button onClick = {handleSignIn}> Sign in with Twitter</button>
  )
}



export default App;
