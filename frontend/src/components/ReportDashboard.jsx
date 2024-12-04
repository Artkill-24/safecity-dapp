// frontend/src/components/ReportDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
 Container, Typography, Box, TextField, Button, Select,
 MenuItem, Card, CardContent
} from '@mui/material';
import LocationMap from './LocationMap';

const ReportDashboard = () => {
 const navigate = useNavigate();
 const [report, setReport] = useState({
   description: '',
   category: 'MAINTENANCE',
   location: null
 });

 const categories = [
   'MAINTENANCE',
   'INFRASTRUCTURE',
   'SAFETY',
   'CLEANLINESS'
 ];

 const handleSubmit = (e) => {
   e.preventDefault();
   navigate('/admin');
 };

 return (
   <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
       <Typography variant="h4">Submit Report</Typography>
       <Button variant="outlined" onClick={() => navigate('/admin')}>
         Back
       </Button>
     </Box>

     <Card>
       <CardContent>
         <Box component="form" onSubmit={handleSubmit}>
           <TextField
             fullWidth
             multiline
             rows={4}
             label="Description"
             value={report.description}
             onChange={(e) => setReport({...report, description: e.target.value})}
             required
           />

           <Select
             fullWidth
             value={report.category}
             onChange={(e) => setReport({...report, category: e.target.value})}
             sx={{ mt: 2, mb: 2 }}
           >
             {categories.map(cat => (
               <MenuItem key={cat} value={cat}>{cat}</MenuItem>
             ))}
           </Select>

           <LocationMap
             position={report.location}
             onLocationSelect={(loc) => setReport({...report, location: loc})}
           />

           <Button
             type="submit"
             variant="contained"
             fullWidth
             sx={{ mt: 2 }}
           >
             Submit
           </Button>
         </Box>
       </CardContent>
     </Card>
   </Container>
 );
};

export default ReportDashboard;

// frontend/src/components/Settings.jsx
import React from 'react';
import {
 Container, Typography, List, ListItem, 
 ListItemIcon, ListItemText, Switch
} from '@mui/material';
import {
 Notifications, Security, Language, ColorLens
} from '@mui/icons-material';

const Settings = () => {
 return (
   <Container>
     <Typography variant="h4" gutterBottom>
       Settings
     </Typography>
     
     <List>
       <ListItem>
         <ListItemIcon><Notifications /></ListItemIcon>
         <ListItemText 
           primary="Notifications" 
           secondary="Manage notifications"
         />
         <Switch />
       </ListItem>

       <ListItem>
         <ListItemIcon><ColorLens /></ListItemIcon>
         <ListItemText 
           primary="Theme" 
           secondary="Toggle dark mode"
         />
         <Switch />
       </ListItem>

       <ListItem>
         <ListItemIcon><Language /></ListItemIcon>
         <ListItemText 
           primary="Language" 
           secondary="Choose language"
         />
       </ListItem>
     </List>
   </Container>
 );
};

export default Settings;