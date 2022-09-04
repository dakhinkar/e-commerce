import styles from './Login.module.css';
import React, { useState } from 'react';
const Login = () => {
    const [isSignUpPage, setSignUp] = useState(true);

    const signUpHandler = (event) => {
        event.preventDefault();
        setSignUp(!isSignUpPage);
    }
    return (
        <div className={styles.container}>
            <h2>{isSignUpPage ? "Sign Up" : "Login"} Page</h2>
            <div >
                <label htmlFor="username">Email: </label>
                <input id="username" type="email" name="username" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <div
                style={{ display: `${isSignUpPage ? '' : 'none'}` }}
            >
                <label htmlFor="password">Re-Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <div className={styles.action} >
                <button className={styles.loginHover} >{isSignUpPage ? "Sign Up" : "Login"}</button>
                <button className={styles.forgotHover}
                    style={{ display: `${!isSignUpPage ? '' : 'none'}` }}
                >Forgot password</button>
            </div>
            <div onClick={signUpHandler}>
                <a href="" >  Go to {isSignUpPage ? "Login" : "Sign Up"} page </a>
            </div>
        </div>
    );

}
export default Login;