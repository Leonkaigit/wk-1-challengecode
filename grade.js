function testGrade(points) {
    // input of points is evaluated to determine appropriate grade
        

        if( points >= 0 && points < 40) {
            return 'E';
        }

        else if (points >= 40 && points < 50) {
            return 'D';
        }
        else if (points >= 50 && points < 60) {
            return 'C';
        }
        else if (points >= 60 && points < 80) {
            return 'B';
        }
        else if (points >= 80 && points <= 100) {
            return 'A';
        }
        else if (points < 0 || points > 100) {
            return 'No grade awarded!';
        }
            
        }
        const Input =prompt("Enter Points awarded."); // prompts input of points
        const points = parseInt(Input);// converts user input within a string into an integer
        const grade = testGrade(points);//invokes the testGrade function
        console.log(grade);       
    

