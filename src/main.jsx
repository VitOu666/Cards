import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { WordsProvider } from '../src/Context/WordsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WordsProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </WordsProvider>
  </React.StrictMode>,
)
