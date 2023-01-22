import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Background1 from './componentes/Background1'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background1 />
    <App />
  </React.StrictMode>,
)
