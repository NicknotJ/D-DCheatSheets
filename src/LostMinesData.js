export const startingStats = (job) => {
    let statsArray = [{name: "Strength"},{name: "Dexterity"},
    {name: "Constitution"},{name: "Intelligence"},{name: "Wisdom"},
    {name: "Charisma"}]
    let startingStats;
    if(job === 'cleric'){
      startingStats = [14, 8, 15, 10, 16, 12];
    }
    if(job === 'wizard'){
      startingStats = [10, 15, 14, 16, 12, 8];
    }
    if(job === 'commonerFighter'){
      startingStats = [14, 16, 15, 11, 13, 9];
    }
    if(job === 'nobleFighter'){
      startingStats = [16, 9, 15, 11, 13, 14];
    }
    if(job === 'rogue'){
      startingStats = [8, 16, 12, 13, 10, 16];
    }
    for(let x = 0; x < statsArray.length; x++){
      statsArray[x].value = startingStats[x];
      statsArray[x].modifier = Math.floor((statsArray[x].value - 10 )/ 2);
    }
    return statsArray;
}