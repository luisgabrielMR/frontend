// import * as React from 'react';
import { Box, Button, TextField, MenuItem } from "@mui/material";
import React from 'react';
import InputMask from 'react-input-mask';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from 'react';

export default function NewProfessional() {

    const apaes = [
        {
          value: 'Criciuma',
          label: 'Criciúma',
        },
        {
          value: 'Tubarao',
          label: 'Tubarão',
        },
        {
          value: 'Lauro Muller',
          label: 'Lauro Müller',
        },
        {
          value: 'Icara',
          label: 'Içara',
        },
    ];

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cpf, setCpf] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');
    const [cellphoneNumber, setCellphoneNumber] = useState('');
    const [unityApae, setUnityApae] = useState('');
    const [professionalFunction, setProfessionalFunction] = useState('');

    const isDisabled = name === '' || lastName ==='' || cpf === '' || telephoneNumber === '' || cellphoneNumber === '' || unityApae === '' || professionalFunction === '';

    return (
        <div>
            <div 
                className='headerProfessionalsCreate' 
                style={{ display: 'flex', alignItems: 'center', flexGrow: 1, padding: '1rem' }}>
                <Typography 
                    variant="h5" 
                    gutterBottom>
                        Cadastro de Profissional
                </Typography>
                <Button 
                    id='backProfessional'
                    variant='outlined'
                    size='large'
                    href='../professionals'
                    startIcon={<ReplyIcon />}
                    sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                        Voltar
                </Button>
                <Button 
                    id="savePostProfessional" 
                    variant="contained" 
                    size="large" 
                    href="" 
                    startIcon={<SaveIcon />} 
                    sx={{ marginLeft:'1rem' }}
                    disabled={isDisabled}>
                        Salvar
                </Button>
            </div>
            <Box 
                id='createProfessionalForm'>
                <Box 
                    id='fullName' 
                    sx={{display:'flex', padding:'1rem'}}>
                    <TextField 
                        id='name' 
                        variant='outlined' 
                        label='Nome' 
                        sx={{marginRight:'1rem', width:'200px'}} 
                        onChange={(e) => setName(e.target.value)}>
                    </TextField>
                    <TextField 
                        id='lastName' 
                        variant='outlined' 
                        label='Sobrenome' 
                        sx={{width:'400px'}} 
                        onChange={(e) => setLastName(e.target.value)}>
                    </TextField>
                </Box>
                <Box 
                    id='numberInfo' 
                    sx={{display:'flex', padding:'1rem'}}>
                    <InputMask
                        mask="999.999.999-99"
                        maskChar=""
                        onChange={(e) => setCpf(e.target.value)}
                    >
                        {() => (
                            <TextField
                                id='cpf'
                                variant='outlined'
                                label='CPF'
                                sx={{marginRight:'1rem', width:'150px'}}
                            />
                        )}
                    </InputMask>
                    <InputMask
                        mask="(99) 9999-9999"
                        maskChar=""
                        onChange={(e) => setTelephoneNumber(e.target.value)}
                    >
                        {() => (
                            <TextField
                                id='telephoneNumber'
                                variant='outlined'
                                label='Telefone'
                                sx={{marginRight:'1rem', width:'150px'}}
                            />
                        )}
                    </InputMask>
                    <InputMask
                        mask="(99) 99999-9999"
                        maskChar=""
                        onChange={(e) => setCellphoneNumber(e.target.value)}
                    >
                        {() => (
                            <TextField
                                id='cellphoneNumber'
                                variant='outlined'
                                label='Celular'
                                sx={{width:'155px'}}
                            />
                        )}
                    </InputMask>
                </Box>
                <Typography 
                    sx={{marginLeft:'1rem'}}>
                        Selecione a unidade APAE que o profissional atende
                </Typography>
                <Box 
                    id='profesionalInfo' 
                    sx={{padding:'1rem'}}>
                    <TextField 
                        select id="unityApae" 
                        variant="outlined" 
                        label="Unidade" 
                        sx={{width:'400px', marginRight:'1rem'}} 
                        onChange={(e) => setUnityApae(e.target.value)}>
                            {apaes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                    <TextField 
                        id="professionalFunction" 
                        variant="outlined" 
                        label="Especialidade" 
                        onChange={(e) => setProfessionalFunction(e.target.value)}>
                    </TextField>
                </Box>
            </Box>
        </div>
    );
}