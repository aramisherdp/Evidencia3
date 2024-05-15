// src/firebase-config.ts

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCu5Xv1JKPK417qBqR6lYQj8NiHMrOFRuE",
  authDomain: "evidencia3-f86d.firebaseapp.com",
  projectId: "evidencia3-f86d",
  storageBucket: "evidencia3-f86d.appspot.com",
  messagingSenderId: "51196567114",
  appId: "1:51196567114:web:84a4eb1d0c31871fed5db3",
  measurementId: "G-MSDMKFQ57"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
