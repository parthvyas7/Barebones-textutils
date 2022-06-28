import './App.css';
import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [style, setStyle] = useState("light");
  const toggleStyle = ()=> {
    if(style === 'light'){
      setStyle('dark');
      document.body.style.backgroundColor='#363537';
      document.body.style.color='#FAFAFA';
    }
    else{
      setStyle('light');
      document.body.style.backgroundColor='#FFF';
      document.body.style.color='#363537';
    }
  }
  return (
    <>
    {/* <BrowserRouter>
    <Navbar title="TextUtils" style={style} toggleStyle={toggleStyle}/>
      <Routes>
        <Route path="/"element={<Textbox style={style} toggleStyle={toggleStyle}/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter> */}
    <Navbar title="TextUtils" style={style} toggleStyle={toggleStyle}/>
    <Textbox style={style} toggleStyle={toggleStyle}/>
    </>
  );
}

export default App;