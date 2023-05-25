import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp }from './Counterapp'
import './CounterApp.module.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <CounterApp/>
    </React.StrictMode>
)