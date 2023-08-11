import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Login.css"

const Login = (props) => {

    return (
        <div className="login-container">
            <span className="iconStyle" style={{'fontSize': '10%'}}><AccountCircleIcon /></span>
            <span className="textStyle">Log in</span>
        </div>
    );
}

export default Login;
