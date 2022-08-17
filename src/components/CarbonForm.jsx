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

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = await fetch(`https://klimaat.app/api/v1/calculate?start=SP79EG&end=WC2N 5DU&transport_mode=driving&key=${process.env.REACT_APP_TOKEN}`, {
      // method : 'GET',
      // mode: 'no-cors',
  })
      const response = await data.json()
      console.log(response)
  }


  return <div  style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '80%', margin: 'auto', margin: '20px' }}>
    <TextField id="outlined-basic" label="Team Name" name="teamName" variant="outlined" onChange={handleInput}/>
    <TextField
          id="outlined-select-currency"
          select
          name="transportType"
          label="Travel Type"
          value={formData.transportType}
          onChange={handleInput}
          helperText="Please select your currency"
        >
          {travel.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField id="outlined-basic" label="Post Code Start" variant="outlined" onChange={handleInput} name="postCodeStart"/>
        <TextField id="outlined-basic" name="postCodeEnd" label="Post Code End" variant="outlined" onChange={handleInput}/>
        <Button onClick={handleClick} variant="contained">Submit</Button>
  </div>;
}
