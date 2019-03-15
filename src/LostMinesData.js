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

//takes in the level, original stats, and job. Checks if stats are changed
export const levelUpStats = (stats, job) => {
  console.log('levelUpStats ran for a ', job);
  console.log('Initial stats are:', stats);
  if(job === 'rogue'){
    stats[1].value = stats[1].value + 1;
    stats[1].modifier = stats[1].modifier + 1;
    return stats;
  }
  if(job === 'cleric'){
    stats[4].value = stats[4].value + 1;
    stats[4].modifier = stats[4].modifier + 1;
    return stats;
  }
  if(job === 'nobleFighter'){
    stats[0].value = stats[0].value + 1;
    stats[0].modifier = stats[0].modifier + 1;
    return stats;
  }
  if(job === 'commonerFighter'){
    stats[1].value = stats[1].value + 1;
    stats[1].modifier = stats[1].modifier + 1;
    return stats;
  }
  if(job === 'wizard'){
    stats[3].value = stats[3].value + 1;
    stats[3].modifier = stats[3].modifier + 1;
    return stats;
  }
  return stats;
}