import React from 'react'
import ReactDOM from 'react-dom'

import Router from './routes/Router'

import 'sweetalert2/src/sweetalert2.scss'

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/test.scss'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  rootEl
)
