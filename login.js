import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// -------------------------Program Default dari Firebase untuk Web START--------------------------- //
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhgBdz4GOeOumUtFvPpaJ5sDo5JCzKJnY",
  authDomain: "dev-jazaried-d23e7.firebaseapp.com",
  projectId: "dev-jazaried-d23e7",
  storageBucket: "dev-jazaried-d23e7.appspot.com",
  messagingSenderId: "747391435751",
  appId: "1:747391435751:web:c5d63d8610709406fa3342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// -------------------------Program Default dari Firebase untuk Web END--------------------------- //

// Initialize Firebase
const auth = getAuth(app);

// Submit BUtton
const submit = document.getElementById('submit');
submit.addEventListener("click",function(event) {
    event.preventDefault()

    // Input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Masuk ke Dashboard")
    window.location.href = "../dashboard/dashboard.html" //berfungsi melempar program ke file html lain setelah berhasil creating account
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})
