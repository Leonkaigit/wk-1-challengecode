
function detectVelocity(speed) {
    const velocityLimit = 70;
    if (speed <= 70){
      console.log('Ok');
    }
}

function overVelocityLimit(speed) {
   const limit = 70;
   const gap = (speed - limit);
   const SpeedGapPerDemeritPoint = 5;
   const demeritLimitPassed = 10;
  const demeritPoints = Math.round(gap / SpeedGapPerDemeritPoint);

  if (demeritPoints > demeritLimitPassed) {
    return 'Issue arrest warrant!';
  }
    else  {
      console.log (`${demeritPoints} points`);
    }
   }

   overVelocityLimit(speed);
   

  

  