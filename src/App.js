import './App.css';
import Alert from './components/Alert';
import Navbar from './Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React ,{ useState} from 'react'


import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
/* Alert mesasge code */
const [alert, setAlert] = useState("") 
const showAlert=(message, type)=>{
 setAlert(
   {
     msg:message,
     type:type
   }
 )
 setTimeout(() => {
  setAlert("")
}, 1500);
}

  const [mode, setmode] = useState("light")
  const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor='#123d58';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Dark Mode"
      // setTimeout(() => {
      //   document.title="TextUtils- is amazing"
      // },2000);
      // setTimeout(() => {
      //   document.title="Downlaod it now"
      // },1000);
  
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("Lightmode has been enabled","success");
      document.title="TextUtils-Light Mode"
    }
   }

    
  return (
    <>
    {/* <Navbar title="Textutils2" aboutText="About TextUtils"/> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} msg="hello" type="danger"/>
    <div className='container'>   {/* places in the center */ }
        
          <Routes>
          <Route path="/" element={<About/>}/>
            {/* <Route path="/" element={<Textform heading="Enter text to analyze"  />}/> */}
          </Routes>
          
    {/* <About/> */}
    <Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
    </div>
    </>
  );
}

export default App;

