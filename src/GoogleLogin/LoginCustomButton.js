import React from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';

const LoginCustomButton = () => {

 const login = useGoogleLogin({
    onSuccess: async respose => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${respose.access_token}`
          }
        })

        console.log(res.data)
      } catch (err) {
        console.log(err)

      }

    }
  }); 

  return (
    <div>
      <button onClick={login}>
          <i className="fa-brands fa-google"></i>
          Continue with google
        </button>
    </div>
  )
}

export default LoginCustomButton