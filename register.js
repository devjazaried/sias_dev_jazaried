import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"; //Untuk Authentikasi & create email dan password
import { getFirestore, setDoc, addDoc, doc, collection, updateDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"; // menambah library untuk Firestore

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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Submit BUtton
const submit = document.getElementById('submit');
submit.addEventListener("click",function(event) {
    event.preventDefault()

    // Input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //create variabel yang akan diinsert ke firestore
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var emaildb = document.getElementById('emaildb').value;

  //Program untuk mendaftarkan email & password
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    alert("Registrasi Akun Berhasil..")
    window.location.href = "index.html" //berfungsi melempar program ke file html lain setelah berhasil creating account
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  //Program untuk mendaftarkan data users
  addDoc(collection(db, "Users"), {
      firstname: firstname,
      lastname: lastname,
      email: emaildb
  });
})
