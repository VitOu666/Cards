import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { MyProvider } from './Context/MyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MyProvider>
  </React.StrictMode>,
)
