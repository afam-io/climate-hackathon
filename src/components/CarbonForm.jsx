import React, {useState} from 'react';
import { Button, MenuItem, TextField } from '@mui/material'

export default function CarbonForm() {

  const[formData, setFormData] = useState({})

  const travel = [
    {
      value: 'Car',
      label: 'Car',
    },
    {
      value: 'Bike',
      label: 'Bike',
    },
    {
      value: 'Walk',
      label: 'Walk',
    },
    {
      value: 'E-bike',
      label: 'E-bike',
    },
  ];

  const teamnames = [
    {
      value: 'Team 1',
      label: 'Team 1',
    },
    {
      value: 'Team 2',
      label: 'Team 2',
    },
    {
      value: 'Team 3',
      label: 'Team 3',
    },
  ];

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData)
  }


  return <div  style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '80%', margin: 'auto', margin: '20px' }}>
        <TextField style={{ padding: '20px'}}
          id="outlined-select-currency"
          select
          name="teamName"
          label="Team Name"
          value={formData.teamName}
          onChange={handleInput}
          helperText="Please select your team name"
        >
          {teamnames.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    <TextField
          style={{ padding: '20px'}}
          id="outlined-select-currency"
          select
          name="transportType"
          label="Travel Type"
          value={formData.transportType}
          onChange={handleInput}
          helperText="Please select your transport type"
        >
          {travel.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={{ padding: '20px'}} id="outlined-basic" label="Post Code Start" variant="outlined" onChange={handleInput} name="postCodeStart"/>
        <TextField style={{ padding: '20px'}} id="outlined-basic" name="postCodeEnd" label="Post Code End" variant="outlined" onChange={handleInput}/>
        <Button style={{ padding: '20px'}} onClick={handleClick} variant="contained">Submit</Button>
  </div>;
}
