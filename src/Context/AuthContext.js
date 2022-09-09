import React, {useState} from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token, expirationTime ) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;
    

    const calculateDuration = (expirationTime) => {
        console.log(expirationTime);
        let expirationTimeIn = new Date(expirationTime).getTime();
        let currTime = new Date().getTime();
        let time = expirationTimeIn - currTime;
        console.log('expire', time);
        return time;
    }
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }
    const loginHandler = (token, expirationTime) => {
        console.log("logib", token);
        setToken(token);
        localStorage.setItem('token', token);
        let expirationDuration = calculateDuration(expirationTime);
        setTimeout(logoutHandler, expirationDuration);

    }
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children} </AuthContext.Provider>;
};

export default AuthContext;