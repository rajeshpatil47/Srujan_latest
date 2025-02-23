
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBIOjJBd45eJg3B6iV15vJucbtRLlytpH0",
    authDomain: "medicene-9b4be.firebaseapp.com",
    databaseURL: "https://medicene-9b4be-default-rtdb.firebaseio.com",
    projectId: "medicene-9b4be",
    storageBucket: "medicene-9b4be.appspot.com",
    messagingSenderId: "496474678855",
    appId: "1:496474678855:web:5f4d54d360b7b908307362",
    measurementId: "G-J8YZRZDMQW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

async function registerUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("You have successfully registered");
        toggleForm();
    } catch (error) {
        alert(error.message);
    }
}

async function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "form.html";
    } catch (error) {
        alert(error.message);
    }
}

function toggleForm() {
    const isLogin = document.getElementById("submitBtn").innerText === "Login";
    document.getElementById("formTitle").innerText = isLogin ? "Register" : "Login";
    document.getElementById("submitBtn").innerText = isLogin ? "Register" : "Login";
    document.getElementById("toggleText").innerText = isLogin ? "Already have an account? Login" : "Don't have an account? Register";
    document.getElementById("submitBtn").setAttribute("onclick", isLogin ? "registerUser()" : "loginUser()");
}

window.registerUser = registerUser;
window.loginUser = loginUser;
window.toggleForm = toggleForm;
