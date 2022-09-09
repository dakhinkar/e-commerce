import styles from './Login.module.css';
import React, { useState, useRef } from 'react';
import AuthContext from '../../Context/AuthContext';
import { useContext, } from 'react';
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';
const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const emailInputRef = useRef();
    const passInputRef = useRef();
    const authCxt = useContext(AuthContext);

    const history = useNavigate()
    const switchModeHandler = (event) => {
        event.preventDefault();
        setIsLogin(!isLogin);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPass = passInputRef.current.value;

        // Add Validation
        setLoading(true);
        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAl9dVd6KM6HcfK6la66T2S6ulyNItl7v0';
        }
        fetch(url,
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        email: enteredEmail,
                        password: enteredPass,
                        returnSecureToken: true
                    }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                setLoading(false);
                if (res.ok) {
                    return res.json();

                } else {
                    return res.json().then((data) => {
                        // show an error modal
                        let errorMessage = 'Authentication Failed!';
                        if (data && data.error && data.error.message) {
                            errorMessage = data.error.message;
                        }
                        throw new Error(errorMessage);
                    });
                }
            }).then(data => {
                let expire = data.expiresIn;
                let expirationTime = new Date(new Date().getTime() + (+expire * 1000));
                authCxt.login(data.idToken, expirationTime.toISOString());
                history('/');
                // console.log(data);
            }).catch((err) => {
                alert(err);
            });


    }
    return (
        <div className={styles.container}>
            <h2>{!isLogin ? "Sign Up" : "Login"}</h2>
            <form onSubmit={submitHandler}>
                <div >
                    <label htmlFor="username">Email: </label>
                    <input
                        id="username"
                        type="email"
                        name="username"
                        ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={passInputRef} />
                </div>
                <div
                    style={{ display: `${!isLogin ? '' : 'none'}` }}
                >
                    <label
                        htmlFor="password">
                        Re-Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password" />
                </div>
                <div className={styles.action} >
                    {!isLoading && <button
                        className={styles.loginHover}
                        onClick={submitHandler} >
                        {!isLogin ? "Sign Up" : "Login"}
                    </button>}
                    {
                        isLoading && <p>Sending Request...</p>
                    }
                    <button
                        className={styles.forgotHover}
                        style={{ display: `${isLogin ? '' : 'none'}` }} disabled>
                        Forgot password
                    </button>
                </div>
                <div
                    onClick={switchModeHandler}>
                    <a href='/'>  Go to {!isLogin ? "Login" : "Sign Up"} page </a>
                </div>

            </form>
        </div>
    );

}
export default Login;