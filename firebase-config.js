// IMPORTANTE: NO BORRES TUS API KEYS, SOLO COPIA LA ESTRUCTURA

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// 1. Agregamos esta línea para importar la Autenticación
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyDc2vnoZwiA2ccfumgSpnxqH_SOe6oxYRQ",
  authDomain: "asistencia-qr-gaag.firebaseapp.com",
  projectId: "asistencia-qr-gaag",
  storageBucket: "asistencia-qr-gaag.firebasestorage.app",
  messagingSenderId: "626883708378",
  appId: "1:626883708378:web:df30339be08ce08f6dece3"
};
// ---------------------------------------

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 2. Inicializamos la autenticación
const auth = getAuth(app); 

// 3. Exportamos 'auth' para que login.html pueda usarlo
export { db, auth, collection, addDoc, serverTimestamp };

