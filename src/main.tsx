import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import App from './pages/App'
import Favorite from './pages/Favorite'
import Details from './pages/Details'
import './styles/index.css'

axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <Favorite /> */}
    {/* <Details /> */}
  </React.StrictMode>,
)
