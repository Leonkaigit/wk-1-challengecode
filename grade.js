function testGrade(points) {
    
        

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
        const Input =prompt("Enter Points awarded.");
        const points = parseInt(Input);
        const grade = testGrade(points);
        console.log(grade);       
    

