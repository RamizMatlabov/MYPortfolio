import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Проверка наличия обязательных переменных окружения
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error('Firebase configuration is missing. Please check your .env.local file.');
}

// Инициализация Firebase
let app;
let db;

try {
  console.log('Initializing Firebase with config:', {
    apiKey: firebaseConfig.apiKey ? '***' + firebaseConfig.apiKey.slice(-4) : 'MISSING',
    projectId: firebaseConfig.projectId || 'MISSING',
    authDomain: firebaseConfig.authDomain || 'MISSING'
  });
  
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  
  console.log('Firebase initialized successfully!');
} catch (error) {
  console.error('Error initializing Firebase:', error);
  console.error('Firebase config:', firebaseConfig);
}

export { db };
export default app;

