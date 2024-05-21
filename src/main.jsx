import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ResultsProvider } from './context/ResultsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResultsProvider>
      <App />
    </ResultsProvider>
  </React.StrictMode>,
)
