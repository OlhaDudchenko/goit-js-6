const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },    
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// 317,5+234,5+230+241=1023
// Пиши код ниже этой строки
const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return (total + (player.playtime/player.gamesPlayed))},0);

console.log(totalAveragePlaytimePerGame );