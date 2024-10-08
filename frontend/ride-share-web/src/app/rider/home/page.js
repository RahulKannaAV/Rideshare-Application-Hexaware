'use client'
import { useState } from 'react';
import CustomTabPanel from '../../components/RiderHomeTab';
import RiderRidesTable from '../../components/RiderRidesTable';
import RiderUpcomingRidesTable from '../../components/RiderUpcomingRides';
import SearchRide from '../../components/SearchRide';
import { Box } from '@mui/material';
import CreateRide from '../../components/CreateRides';
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
            <Tab label="Search Ride"  />
            <Tab label="Upcoming Rides"  />
            <Tab label="Previous Rides"  />
            <Tab label="Post/Create Ride"  />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} children={<SearchRide />} />
        <CustomTabPanel value={value} index={1} children={<RiderUpcomingRidesTable />} />
        <CustomTabPanel value={value} index={2} children={<RiderRidesTable />} />
        <CustomTabPanel value={value} index={3} children={<CreateRide />} />
      </Box>
    );
}


export default LocationPickerExample;