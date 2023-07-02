/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { Wrapper } from "./Login.styles";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { useState } from "react";
// import { ref, set, update } from "firebase/database";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // if (true) => signUp (false) => signIn
  const [register, setRegister] = useState(false);

  // Sign Up function
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then(({user}) => {
      // console.log(user)
      // set(ref(database, 'users/' + user.uid),{
      //   email: emailRef.current.value
      // })
    })
    .catch((err) => console.error(err))
  }
  
  // Sign In function
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then(({user}) => {
      // const date = new Date();
      // update(ref(database, 'users/' + user.uid),{
      //   last_login: date
      // })
    })
    .catch((err) => console.error(err))
  }

  // Sing In with google
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try{
      await signInWithPopup(auth, googleProvider)
    }
    catch (err) {
      console.error(err);
    }
  }
  
  return (
    <Wrapper>
      <div className="container" >
        <form className="login-form">
          <h2>{register ? "Sign Up" : "Sign In"}</h2>
          <input ref={emailRef} type="text" placeholder="Email" required />
          <input ref={passwordRef} type="password" placeholder="Password" required />
          <div className="toSignUp">
            <span>{register ? "Already have account" : "New to Mercato?"} </span>
            <span onClick={() => setRegister(prev => !prev)}>{register ? "Sign In Now" : "Sign Up Now"}</span>
          </div>
          <button type="submit" onClick={register ? signUp : signIn}>{register ? "Sign Up": "Sign In"}</button>
          <div className="break">
            <span>or</span>
          </div>
          <button className="signInWithGoogle" onClick={signInWithGoogle}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
            <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Login;
