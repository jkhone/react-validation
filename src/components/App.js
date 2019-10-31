import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './Form'
import Submit from './Submitted'
import '../styles/styles.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Form}></Route>
        <Route path = '/submitted' component = {Submit}></Route>
      </div>
    </Router>
  )
}

export default App
