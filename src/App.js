import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { createContext, useState } from 'react';
import { Container } from '@mui/system';
import { Route, Routes } from "react-router-dom"
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/Signup';


const theme = {
  dark: {
    color: 'white',
    background : '#66B2FF'
  },
  lite: {
    color: 'black',
    background : 'white'
  }
}



export const ThemeContext = createContext(theme)


function App() {

  const [currentTheme, setCurrentTheme] = useState(theme.lite)

  const s = {
    '😊' : '😃'
  }
  console.log(s['😊'])

  const getTheme = (value) => {
    console.log('app', value)
    
    if (value) {
      setCurrentTheme(theme.dark)
    } else { 
      setCurrentTheme(theme.lite)
    }

  }

  return (
  
    <ThemeContext.Provider value={currentTheme}>
      <Container maxWidth={false} className="App" style={{width:'100%',height:'100vh'}} sx={currentTheme}>
        <Header getTheme={getTheme} />  
        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

        
        </Routes>

      </Container>
      </ThemeContext.Provider>

  );
}

export default App;
