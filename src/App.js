// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [style, setstyle] = useState('light')
  const [alert, setAlert] = useState(null)

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }


  const toggle = () => {
    if (style === 'light') {
      setstyle('dark')
      document.body.style.backgroundColor = 'black'
      showalert('Dark mode is enabled ', 'success')
    }
    else {
      setstyle('light')
      document.body.style.backgroundColor = 'white'
      showalert('Light mode is enabled', 'success')

    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar style={style} toggle={toggle} title= 'Textutils'  />
        <Alert alert={alert} />
        {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/"> */}
            <div className="container">
              <Textform heading="converter" showAlert={showalert} style={style} />
            </div>
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
