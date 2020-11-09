function whichschool(age){
    if (age<13){
        return "elementry school";
    }
    else if (age>13 && age<18){
        return "high school";
    }
    else{
        return "LHL";
    }
}
console.log(whichschool(29));