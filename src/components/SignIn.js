import React from "react";
import { Button } from "@material-ui/core";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { auth } from "../firebase";
import '../Signin.css';

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{backgroundImage: "url(/image/chat.png)", height:'625px'}} className="signin" >
            <div className="sin">
            <img className={"imges2"} src="/image/chat.jpg" alt="" />
            <Button onClick={signInWithGoogle}>
                <img className={"imges"} src="/image/sign in.png" alt="" />
            </Button>
            </div>
        </div>
    )
}

export default SignIn;