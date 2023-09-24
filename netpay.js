
function calculateTax(salary){
//caculates the payee tax to be deducted from the basic salary as per range given
    if( salary >= 0 && salary <= 24000) {
     payee = salary * 0.1;
        return payee;
    }
    else if (salary > 24000 && salary >= 32333) {
     payee = salary * 0.25;
     return payee;
    }
    else if (salary > 32,333 && salary >= 500000) {
        payee = salary * 0.25;
        return payee;
    }
    else if (salary > 500000 && salary > 800000) {
        payee = salary * 0.325;
        return payee;
    }
    else if (salary > 800000) {
        payee = salary * 0.35;
        return payee;
    }
    else{
        return "Tax unidentified/evaded!";
    }
}

function calculateNhif(salary) {//Calculate the Nhif deductions as per Basic salary
    if (salary >= 0 && salary < 6000) {
        nhif = 150;
        return  nhif;
    }
    else if (salary >= 6000 && salary < 8000) {
        nhif = 300;
        return nhif;
    }
    else if (salary >= 8000 && salary < 12000) {
        nhif = 400;
        return nhif;
    }
    else if (salary >= 12000 && salary < 15000) {
        nhif = 500;
        return nhif;
    }
    else if (salary >= 15000 && salary < 20000) {
        nhif = 600;
        return nhif;
    }
    else if (salary >= 20000 && salary < 25000) {
        nhif = 750;
        return nhif;
    }
    else if (salary >= 25000 && salary < 30000) {
        nhif = 850;
        return nhif;
    }
    else if (salary >= 30000 && salary < 35000) {
        nhif = 900;
        return nhif;
    }
    else if (salary >= 35000 && salary < 40000) {
        nhif = 950;
        return nhif;
    }
    else if (salary >= 40000 && salary < 45000) {
        nhif = 1000;
        return nhif;
    }
    else if (salary >= 45000 && salary < 50000) {
        nhif = 1100;
        return nhif;
    }
    else if (salary >= 50000 && salary < 60000) {
        nhif = 1200;
        return nhif;
    }
    else if (salary >= 60000 && salary < 70000) {
        nhif = 1300;
        return nhif;
    }
    else if (salary >= 70000 && salary < 80000) {
        nhif = 1400;
        return nhif;
    }
    else if (salary >= 80000 && salary < 90000) {
        nhif = 1500;
        return nhif;
    }
    else if (salary >= 90000 && salary < 100000) {
        nhif = 1600;
        return nhif;
    }
    else if (salary > 100000) {
        nhif = 1700;
        return nhif;
    }
    else{
        return "Nhif not contributed."
    }
}

function calculateNssf(salary) {// calculates nssf deductions
    nssf = salary * 0.06;
    return nssf;

}
function calculateHouseLevy(salary) {// calculates house levy
    houselevy = salary * 0.015;
    return houselevy;
}

function calculateNetSalary(salary) {
    const payee = calculateTax(salary);
    const nhif = calculateNhif(salary);
    const nssf = calculateNssf(salary);
    const houselevy = calculateHouseLevy(salary);

    netsalary = salary -(payee + nhif + nssf + houselevy);//removes deductions from basic/gross pay to get the net salary

    return netsalary;
}
calculateNetSalary(salary);//invoke the function that contains the net salary