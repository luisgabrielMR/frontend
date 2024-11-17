import { Box, Button, TextField, MenuItem, Autocomplete, InputAdornment } from "@mui/material";
import React from 'react';
import InputMask from 'react-input-mask';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import ReplyIcon from '@mui/icons-material/Reply';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';

export default function EditProfessional() {
    const students = ['Karen Stackoski', 'Fulano da Silva']

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div>
            <div 
                className='headerProfessionalsEdit' 
                style={{ display: 'flex', alignItems: 'center', flexGrow: 1, padding: '1rem' }}>
                <Typography 
                    variant="h5" 
                    gutterBottom>
                        Agendamento com Profissional
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
                    sx={{ marginLeft:'1rem' }}>
                        Salvar
                </Button>
            </div>
            <Box id='scheduleForm'>
                <Autocomplete
                    disablePortal
                    options={students}
                    sx={{ width: 600, display:"flex", margin:'1rem'}}
                    renderInput={(params) => <TextField {...params}
                    label="Aluno"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}/>}>
                </Autocomplete>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
                    <DatePicker
                        label="Selecione a data"
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        inputFormat="dd/MM/yyyy" // Define o formato de digitação
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider> */}
            </Box>
        </div>
    );
}