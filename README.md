# wk-1-challengecode
=Complete all the challenges.

**Grade.js**
In this file, the solution involved the use of 'if' and 'else if' statements to make sure the program loops through the set conditions given in the code to display the appropriate grade. The test results are within 0 to 100 points. A is awarded to points between 80 - 100 points, B is 60 - 79 points, C is 50 - 59, D is 40 - 49 and E is anything below 40 to 0. 

The program also has a limitation to marks only between 0 and 100. If anything out of that range is put, no grade is awarded. The program also prompts the user to enter the points awarded to process and give out the rightful grade.

Function testGrade(points) evaluates the points input to display the right grade for the User.
          -const Input =prompt("Enter Points awarded.") prompts input of points
          -const points = parseInt(Input); converts user input within a string into an integer
          -const grade = testGrade(points);invokes the testGrade function

**Speed-detector.js**
For this file, a system is set in place to ensure safe driving through the analysis of data from a speedometer. The speed limit of vehicles in the region is 70km/s and is defined within the program. In addition, there is a demerit point system set in the program: for every 5km/s above the speed limit, a driver is awarded 1 demerit point. Once 10 or more demerit points are awarded the driver is issued an arrest warrant for reckless driving.

The following are the functions available;
-function detectVelocity(speed) 
  displays 'Ok' if the vehicle is within the allowed speed limit
-function overVelocityLimit(speed)
This function will handle the operations after the speed limit is exceeded. The gap between the exceeded value and the speed kimit is calculated to determine if a demerit point should be awarded. The total demerit points are also compared to the max limit allowed before being arrested.

**netpay.js**
For this file, for a certain Demographic data within a country with any sort of employment, gross pay is deducted by a few variables based on the range the individual receives to give the net pay. These deductions involve Payee tex,nhif deductions,nssf deductions, house levy deductions, benefits added which result in the net pay to each individual.
These functions describe;
-function calculateTax(salary){
caculates the payee tax to be deducted from the basic salary as per range given
-function calculateNhif(salary) 
Calculate the Nhif deductions as per Basic salary
-function calculateNssf(salary) 
calculates nssf deductions
-function calculateNssf(salary) 
calculates nssf deductions
-function calculateNetSalary(salary) 
equating constant variables to the functions evaluating their respective values once input. Leads to the overall net salalry value once invoked.
