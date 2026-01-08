// NOMBRE DEL ARCHIVO: firebase-config.js

// Importar las funciones del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- AQUÍ PEGA TUS DATOS DEL PASO 3 ---
const firebaseConfig = {
  apiKey: "AIzaSyDc2vnoZwiA2ccfumgSpnxqH_SOe6oxYRQ",
  authDomain: "asistencia-qr-gaag.firebaseapp.com",
  projectId: "asistencia-qr-gaag",
  storageBucket: "asistencia-qr-gaag.firebasestorage.app",
  messagingSenderId: "626883708378",
  appId: "1:626883708378:web:df30339be08ce08f6dece3"
};
// ---------------------------------------

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar para usar en otros archivos
export { db, collection, addDoc, serverTimestamp };