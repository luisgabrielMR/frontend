import { Button, Input, TextField } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

// pages/index.js
export default function Home() {
    return (
		<div>
			<AppBar sx={{ height: '40%' }}>
				<img src='/apae.png' style={{ width: '250px', height: '250px', display: 'block', margin: '10px auto' }} alt='Logo'></img>
			</AppBar>
			<Typography variant="h4" gutterBottom sx={{ marginTop: '20%', textAlign: 'center' }}>
				Seja bem-vindo! Faça seu login
			</Typography>
			<TextField id="login" label="Login" variant="filled" sx={{ width: '20rem', display: 'flex', margin: '20px auto' }}></TextField>
			<TextField id="password" label="Senha" variant="filled" type="password" sx={{ width: '20rem', display: 'flex', margin: '10px auto' }}></TextField>
			<Button id="submitLogin" variant="contained" size="large" startIcon={<LoginIcon />} sx={{ width: '10rem', display: 'flex', margin: '20px auto' }}>Entrar</Button>
		</div>
    );
  }
  