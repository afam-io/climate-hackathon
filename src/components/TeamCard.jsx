import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader } from '@mui/material';
import { red, blue, green } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TeamCard({ name, score, color }) {
  const titleName = name + ' teams carbon spending';
  let colorObj = { bgcolor: blue[500] };
  if (color === 'red') {
    colorObj = { bgcolor: red[500] };
  }
  if (color === 'green') {
    colorObj = { bgcolor: green[500] };
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={colorObj} aria-label='Team'>
            {name.at(0)}
          </Avatar>
        }
        action={<IconButton aria-label='settings'></IconButton>}
        title={titleName}
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'></Typography>
          <Typography variant='h4' color='text.secondary'>
            £{score}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
