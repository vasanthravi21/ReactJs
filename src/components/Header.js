import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { Container } from '@mui/system';
import { IconButton } from '@mui/material';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import { useNavigate } from 'react-router-dom'; 

export default function Header(props) {

    const [currentTheme,setCurrentTheme] = useState(true)

    const navigate = useNavigate()

    const theme = useContext(ThemeContext)

    console.log(theme)

    const themeHandle = () => { 
        setCurrentTheme(!currentTheme)
        props.getTheme(currentTheme)
    }

    const handleSignIn = () => { 
        navigate('/login')
    }

    const handleSignUp = () => { 
        navigate('/register')
    }
    return (
        <div className='Nav' style={theme}>
            <Container maxWidth={false} sx={{display:'flex' , justifyContent:'space-between' , alignItems:"center",textAlign:"center"}}>
                <div >
                    <h1>Hello world</h1>
                </div>
                <div>
                    <Button variant='container' onClick={handleSignIn}>SignIn</Button>
                    <Button variant='outlined' onClick={handleSignUp} >SignUp</Button>
                    <IconButton onClick={themeHandle}>
                        {currentTheme ? <NightsStayIcon sx={theme} /> : <WbSunnyIcon sx={theme} />} 
                    </IconButton>
                </div>
            </Container>
        </div>
    )
}
