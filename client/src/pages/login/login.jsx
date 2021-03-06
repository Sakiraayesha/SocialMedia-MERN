import './login.css';
import { useRef } from 'react';
import {loginCall} from "../../apiCalls";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from "@material-ui/core";
import {Link} from 'react-router-dom';

function Login(){
    const email = useRef();
    const password = useRef();
    const {isFetching, dispatch} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MySocial</h3>
                    <span className="loginDesc">
                        Connect with friends around the world!
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching? (<CircularProgress color="inherit" size="20px" /> ) : ("Log In")}
                        </button>
                        <span className="loginForgot">Forgot password?</span>
                        <Link to="/register" className="loginButtonLink">
                            <button className="loginRegisterButton">
                                {isFetching? (<CircularProgress color="inherit" size="20px" /> ) : ("Create a new account")}
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;