import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import * as serviceWorker from './serviceWorker'

import 'normalize.css/normalize.css'
import 'reset-css/reset.css'

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
