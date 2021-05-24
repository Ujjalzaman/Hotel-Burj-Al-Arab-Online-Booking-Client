import React, { useContext } from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Nav from '../Header/Nav';
import './Login.css';
import { FaGoogle } from 'react-icons/fa';

import hotel from '../../images/header.png';
import double from '../../images/Double.png';
import family from '../../images/Family.png';
import single from '../../images/Single.png';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const firebaseConfig = {
        apiKey: "AIzaSyDRr0FYC0ZjTOkU7rRk3r8oXKxyEYxx6xU",
        authDomain: "express-rider-f7a31.firebaseapp.com",
        projectId: "express-rider-f7a31",
        storageBucket: "express-rider-f7a31.appspot.com",
        messagingSenderId: "870999331075",
        appId: "1:870999331075:web:ce35636105a78cf9ab1936"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            // ...
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                // console.log(idToken)
            }).catch(function (error) {
                // Handle error
            });
    }
    return (

        <div>
            <Nav/>
            <div className="login-page container">
                <div className="row align-items-center" style={{ height: "100vh" }}>
                    <div className="d-flex justify-content-center">
                    <div className="col-md-6 shadow p-5">
                        <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <div className="text-center p-2">Or</div>
                        <div className="from-group mt-5">
                            <button className="btn btn-brand btn-danger " onClick={handleGoogleSignIn}><FaGoogle/>  Sign In Google</button>
                        </div>
                    </div>
                    </div>
                    {/* <div className="col-md-6 d-none d-md-block align-self-end">
                        <img className="img-fluid" src='' alt="" />
                    </div> */}
                </div>
            </div>
        </div>




    );
};

export default Login;



{/* <div>
<Nav />
<div className="login-page">
    <div class="login">
        <h1>This is Login</h1>
        <button onClick={handleGoogleSignIn}>Google Sign in</button>
    </div>
</div>
</div> */}