importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "ΒΑΛΕ_ΕΔΩ_ΤΟ_API_KEY_ΣΟΥ", 
  authDomain: "wake-cup-18303.firebaseapp.com",
  projectId: "wake-cup-18303",
  storageBucket: "wake-cup-18303.appspot.com",
  messagingSenderId: "618296104693",
  appId: "ΒΑΛΕ_ΕΔΩ_ΤΟ_APP_ID_ΣΟΥ"
});

const messaging = firebase.messaging();
