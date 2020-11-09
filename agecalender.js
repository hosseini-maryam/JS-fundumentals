function ageCalculator(name, yearsOfBirth, currentYear) {
    if (typeof name === 'string') {
        if (typeof yearsOfBirth === "number") {
            if (typeof currentYear === "number") {
                var res = currentYear - yearsOfBirth;
            }
            else {
                return "currentYear is not valid"
            }
        }
        else {
           return "yearsofBirth is not valid"
        }
    }
    else {
        return "name is not valid"
    }
    if (currentYear >= yearsOfBirth){
        return "your age is: " +res+ "years old";
            }
    else {
        return "you inserted the wrond data"
            }
}


console.log(ageCalculator("bahar",1991,2020));