import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import {FavoritsContextProvider} from './store/favorits-context'

ReactDOM.render(
  <FavoritsContextProvider>
    <App />
  </FavoritsContextProvider>
  ,
  document.getElementById('root')
)
