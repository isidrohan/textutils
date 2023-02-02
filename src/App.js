import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
import { useState } from 'react';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[BarMode , setBarMode] = useState("light");
  const[text , setText] = useState("Enable Dark Mode ");
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert ({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 2000);

  }
  const togglemode = ()=>{
    if(BarMode==="light"){
      setBarMode('dark');
      document.body.style.background = '#343a40';
      setText("Disable dark Mode ");
      showAlert(" Dark Mode has been Enabled ","success");
    }
    else{
      setBarMode('light');
      document.body.style.background = 'white';
      setText("Enable Dark Mode");
      showAlert(" Dark Mode has been Disabled","success");
    }
  }
  return (
    <>
      {/* <Router> */}
      <NavBar home = "Home" title = "TextUtills" aboutText = "About" mode = {BarMode} togglemode = {togglemode} textMode = {text}></NavBar>
      <Alert alert = {alert}></Alert>
      <div className="container my-3">
      {/* <Routes>
            <Route path="/about" element = {<About></About>} >
            </Route> */}
            {/* <Route path="/" element = {<TextBox showAlert = {showAlert} heading="Write your notes here" mode = {BarMode}></TextBox> }>   */}
            <TextBox showAlert = {showAlert} heading="Write your notes here" mode = {BarMode}></TextBox>
            {/* </Route>
      </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;
