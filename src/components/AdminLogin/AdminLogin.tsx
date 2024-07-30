import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Container, Title, Paper } from '@mantine/core';
import { useAdminStore } from '../../store/store';
import { SERVER_ENDPOINT } from '../../constants/api';
import axios from 'axios';
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, login } = useAdminStore();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${SERVER_ENDPOINT}/admin/login`, {
        username,
        password,
      });
      console.log(response)
      if (response.status === 200) {
        const { token } = response.data;
        // Save the token to local storage or context
        localStorage.setItem('adminToken', token);
        login();
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials');
    }
  };
  useEffect(() => {
    if(isAuthenticated){
        navigate('/update')
    }
  }, [isAuthenticated, navigate])

  return (
    <Container size={420} my={40}>
      <Title align="center">Admin Login</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleLogin}>
          <TextInput
            label="Username"
            placeholder="admin"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
            label="Password"
            placeholder="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button fullWidth mt="xl" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
