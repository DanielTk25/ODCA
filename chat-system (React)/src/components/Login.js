import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import "firebase/app"

import { auth } from '../firebase';
import firebase from 'firebase/app'

const Login = () => {
  
  alert("Welcome to the Online Doctor Consultation App chats. This is the place wherein you can reply to your patients and even have video call with them!");
 
  return(

    <div id="login-page">
         <div id = "login-card">
             <h2>Welcome to the ODCA Chats</h2>
             <p>The place where you'll meet your Patients!</p>

                 <div
                   className="login-button google"
                   onClick = {() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                   >
                       <GoogleOutlined/> Continue with Google

                   </div>

                 <br /> <br />

                 

         </div>
    </div>
  );

}


export default Login