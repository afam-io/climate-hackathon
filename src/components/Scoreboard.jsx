import React from 'react';

import TeamCard from './TeamCard';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Scoreboard() {
  const teamScores = [
    { name: 'Red', score: 15, color: 'red' },
    { name: 'Blue', score: 1500, color: 'blue' },
    { name: 'Green', score: 1000, color: 'green' },
  ];
  return teamScores.map((x) => (
    <TeamCard name={x.name} score={x.score} color={x.color} />
  ));

  // <TeamCard name={teamScores[0].name} score={teamScores[0].score} />;
}
