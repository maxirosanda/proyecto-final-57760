import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDlp7-_zsd7K2xPxL7hWXmONYSoCL6E-Yg",
  authDomain: "cursosabados57760.firebaseapp.com",
  projectId: "cursosabados57760",
  storageBucket: "cursosabados57760.appspot.com",
  messagingSenderId: "978779098986",
  appId: "1:978779098986:web:2c5098c12893bb519c5f13"
}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


