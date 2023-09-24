
function detectVelocity(speed) {
  //displays 'Ok' if the vehicle is within the allowed speed limit
    const velocityLimit = 70;
    if (speed <= 70){
      console.log('Ok');
    }
}

function overVelocityLimit(speed) {
  //once the speed limit is exceeded, these operations take place
   const limit = 70;
   const gap = (speed - limit);
   const SpeedGapPerDemeritPoint = 5;
   const demeritLimitPassed = 10;
  const demeritPoints = Math.round(gap / SpeedGapPerDemeritPoint);// rounds off the Demerit points to the nearest whole number

  if (demeritPoints > demeritLimitPassed) {
    return 'Issue arrest warrant!'; //A set limit for the demerit points was declared;if exceeded the driver should be arrested
  }
    else  {
      console.log (`${demeritPoints} points`);//informs the driver of the number of demerit points accumulated
    }
   }

   overVelocityLimit(speed);
   

  

  