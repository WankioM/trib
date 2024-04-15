import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';

function SignUpwithGoogle() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    
        <>
          <div>
            <h1>Sign Up</h1>
            {error && <p>{error}</p>}
            <button onClick={handleGoogleSignUp}>Sign up with Google</button>
            <p>Or 
              <NavLink to="/newuser" >sign up with email</NavLink>:</p>
            {/* Your existing email/password sign-up form */}
            {/* Include your existing email/password sign-up form here */}
            <p>
              Already have an account?{' '}
              <NavLink to="/login">Sign in</NavLink>
            </p>
          </div>
        </>
   
  
  );
}

export default SignUpwithGoogle;
