<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAkJDVPrQBhJ5FDrjD5CqbottyzvNlZJOE",
    authDomain: "project-5495e.firebaseapp.com",
    databaseURL: "https://project-5495e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-5495e",
    storageBucket: "project-5495e.appspot.com",
    messagingSenderId: "959505404504",
    appId: "1:959505404504:web:f7b196bdde129615a8302d",
    measurementId: "G-S9QH8X3QRD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>