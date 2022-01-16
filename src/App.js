import React, {Component} from 'react';
import useFirebase from  './useFirebase'
import useFirebaseG from  './useFBgoogle'
import useFirebaseF from './useFBfacebook'
import './App.css';

function App(){
  const {handleSignInTwitter} = useFirebase();
  const {handleSignInGoogle} = useFirebaseG();
  const {handleSignInFacebook} = useFirebaseF();
  return (
<div>
    <button onClick = {handleSignInGoogle}> Sign in with Google</button>
    <button onClick = {handleSignInTwitter}> Sign in with Twitter</button>
    <button onClick = {handleSignInFacebook}> Sign in with Facebook</button>
    </div>
  )
}



export default App;
