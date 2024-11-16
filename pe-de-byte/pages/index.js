import { Button, Input, TextField } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';

export default function Home() {
	// Criação dos estados para login e password
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // Condição para desabilitar o botão
    const isDisabled = login === '' || password === '';

    return (
		<div>
			<AppBar sx={{ height: '40%',  backgroundColor: '#61c7e7' }}>
				<img src='/apae.png' style={{ width: '250px', height: '250px', display: 'block', margin: '10px auto' }} alt='Logo'></img>
			</AppBar>
			<Typography variant="h4" gutterBottom sx={{ marginTop: '20%', textAlign: 'center' }}>
				Seja bem-vindo! Faça seu login
			</Typography>
			<TextField 
				id="login" 
				label="Login" 
				variant="filled" 
				sx={{ width: '20rem', display: 'flex', margin: '20px auto' }}
				onChange={(e) => setLogin(e.target.value)}>
			</TextField>
			<TextField 
				id="password" 
				label="Senha" 
				variant="filled" 
				type="password" 
				sx={{ width: '20rem', display: 'flex', margin: '10px auto' }}
				onChange={(e) => setPassword(e.target.value)}>
			</TextField>
			<Button 
				id="submitLogin" 
				variant="contained" 
				size="large" 
				href="./menu/menu" 
				startIcon={<LoginIcon />} 
				sx={{ width: '10rem', display: 'flex', margin: '20px auto' }}
				disabled={isDisabled}>
					Entrar
			</Button>
		</div>
    );
}