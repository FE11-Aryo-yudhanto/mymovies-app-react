import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Favorite from './pages/Favorite'
import Details from './pages/Details'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Favorite /> */}
    <Details />
  </React.StrictMode>,
)
