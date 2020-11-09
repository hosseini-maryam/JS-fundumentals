import react
function bmi(m,k){
    var c= (m/(h**2));
        if (c<18.5) {
            return "underweight";
        }
        else if (c<25){
            return "fit";
            }
        else{
            return "faaaaat";
            }
console.log(bmi(160,57));
}

