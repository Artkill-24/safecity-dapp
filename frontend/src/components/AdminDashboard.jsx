// frontend/src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import {
 Box, AppBar, Toolbar, Typography, IconButton, Drawer, List,
 ListItem, ListItemIcon, ListItemText, Container, Grid, Card, 
 CardContent
} from '@mui/material';
import { Dashboard, Report, Settings, ExitToApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
 const navigate = useNavigate();
 const [reports] = useState([
   {
     id: 1,
     description: "Broken streetlight",
     category: "INFRASTRUCTURE",
     status: "PENDING"
   }
 ]);

 const handleLogout = () => {
   navigate('/login');
 };

 return (
   <Box sx={{ display: 'flex' }}>
     <AppBar position="fixed">
       <Toolbar>
         <Typography variant="h6" sx={{ flexGrow: 1 }}>
           SafeCity Admin
         </Typography>
         <IconButton color="inherit" onClick={handleLogout}>
           <ExitToApp />
         </IconButton>
       </Toolbar>
     </AppBar>

     <Drawer variant="permanent" sx={{ width: 240 }}>
       <List>
         <ListItem button>
           <ListItemIcon><Dashboard /></ListItemIcon>
           <ListItemText primary="Dashboard" />
         </ListItem>
         <ListItem button>
           <ListItemIcon><Report /></ListItemIcon>
           <ListItemText primary="Reports" />
         </ListItem>
       </List>
     </Drawer>

     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Toolbar />
       <Container>
         <Grid container spacing={3}>
           <Grid item xs={12} md={4}>
             <Card>
               <CardContent>
                 <Typography color="textSecondary">
                   Total Reports
                 </Typography>
                 <Typography variant="h5">
                   {reports.length}
                 </Typography>
               </CardContent>
             </Card>
           </Grid>
         </Grid>
       </Container>
     </Box>
   </Box>
 );
};

export default AdminDashboard;

// frontend/src/components/Login.jsx
import React, { useState } from 'react';
import {
 Container, Card, CardContent, TextField,
 Button, Typography, Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const navigate = useNavigate();
 const [credentials, setCredentials] = useState({
   email: '',
   password: ''
 });

 const handleSubmit = (e) => {
   e.preventDefault();
   navigate('/admin');
 };

 return (
   <Container maxWidth="sm">
     <Box sx={{ marginTop: 8 }}>
       <Card>
         <CardContent>
           <Typography variant="h5" gutterBottom>
             Login
           </Typography>
           <form onSubmit={handleSubmit}>
             <TextField
               fullWidth
               label="Email"
               margin="normal"
               value={credentials.email}
               onChange={(e) => setCredentials({
                 ...credentials, 
                 email: e.target.value
               })}
             />
             <TextField
               fullWidth
               type="password"
               label="Password"
               margin="normal"
               value={credentials.password}
               onChange={(e) => setCredentials({
                 ...credentials,
                 password: e.target.value
               })}
             />
             <Button
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 3 }}
             >
               Login
             </Button>
           </form>
         </CardContent>
       </Card>
     </Box>
   </Container>
 );
};

export default Login;