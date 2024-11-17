import { Button, TextField, FormControl, InputLabel, InputAdornment, IconButton, FilledInput } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Home() {
    // Criação dos estados para login, password e visibilidade da senha
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Condição para desabilitar o botão
    const isDisabled = login === '' || password === '';

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <AppBar sx={{ height: '40%', backgroundColor: '#61c7e7' }}>
                <img src='/apae.png' style={{ width: '250px', height: '250px', display: 'block', margin: '10px auto' }} alt='Logo' />
            </AppBar>
            <Typography variant="h4" gutterBottom sx={{ marginTop: '20%', textAlign: 'center' }}>
                Seja bem-vindo! Faça seu login
            </Typography>
            <TextField
                id="login"
                label="Login"
                variant="filled"
                sx={{ width: '20rem', display: 'flex', margin: '20px auto' }}
                onChange={(e) => setLogin(e.target.value)}
            />
            <FormControl sx={{ width: '20rem', display: 'flex', margin: '10px auto' }} variant="filled">
                <InputLabel htmlFor="password">Senha</InputLabel>
                <FilledInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={showPassword ? 'hide the password' : 'display the password'}
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button
                id="submitLogin"
                variant="contained"
                size="large"
                href="./menu/menu"
                startIcon={<LoginIcon />}
                sx={{ width: '10rem', display: 'flex', margin: '20px auto' }}
                disabled={isDisabled}
            >
                Entrar
            </Button>
        </div>
    );
}
