import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Link, Box } from '@mui/material';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin(); 
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: 400,
          padding: 3,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nome de Usuário"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
            Esqueci minha senha
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
