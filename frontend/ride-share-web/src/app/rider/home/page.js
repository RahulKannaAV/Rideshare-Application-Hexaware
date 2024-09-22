'use client'
import { useState } from 'react';
import CustomTabPanel from '../../components/RiderHomeTab';
import RiderRidesTable from '../../components/RiderRidesTable';
import { Box } from '@mui/material';
import {Tab, Tabs} from '@mui/material';
import '../../styles/login.css' 
 
const LocationPickerExample = function() {

    const [value, setValue] = useState(0);
    console.log(value);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="Rider Home Page Tabs">
            <Tab label="Search/Post Rides"  />
            <Tab label="Upcoming Rides"  />
            <Tab label="Previous Rides"  />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} children={<>Hello</>} />
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} children={<RiderRidesTable />} />
      </Box>
    );
}


export default LocationPickerExample;