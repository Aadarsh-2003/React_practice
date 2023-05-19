import logo from './logo.svg';
import './App.css';
import Practice from './practice';
import Login from './login';
import Signup from './signup';
import './login.css';
import './signup.css';
import Hooks1 from './hook1';
import { useState } from 'react';

function App() {

  const[isRegister,setIsregister]=useState(true);
  const isLogin=()=>{
        setIsregister(false)
  }
  const isnotLogin=()=>{
    setIsregister(true)
}

  let name='Avi'
  let course='React'
  return (
    <div className="App">

      {isRegister?<Signup isLogin={isLogin} />:(<Login/>)}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Hooks1/> */}
    </div>
  );
}

export default App;
