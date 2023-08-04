import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer.jsx"
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { useEffect, useState } from 'react';
import Likes from './components/Likes/Likes';
import Header from './components/Header/Header';

function App() {

  const [isLoggedOut, setIsLoggedOut] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUsername] = useState("");
  const [showHeader, setShowHeader] = useState(true)
  const [global, setGlobal] = useState(true)
  const [heading, setHeading] = useState("Events")

  useEffect(() => {
    if (isLoggedIn) {
      setGlobal(false)
    }
    else {
      setGlobal(true)
    }
  }, [isLoggedIn])

  useEffect(() => {
    if (!global) {
      setHeading("Your Events")
    } else {
      setHeading("Events")
    }
  }, [global])

  return (
    <>
      <BrowserRouter>
        {showHeader && <Header isLoggedOut={isLoggedOut} isLoggedIn={isLoggedIn} setIsLoggedOut={setIsLoggedOut} setIsLoggedIn={setIsLoggedIn} userName={userName} />}
        <Routes>
          <Route path='/' element={<Home heading={heading} />} />
          <Route path='/login' element={<Login setShowHeader={setShowHeader} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
          <Route path='/signup' element={<SignUp setShowHeader={setShowHeader} />} />
          <Route path='/likes' element={<Likes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
