numberOfSubjects = 8;
var calculateSgpa = true;
function reset(){
    document.getElementById("credit_1").value = "4";
    document.getElementById("credit_2").value = "4";
    document.getElementById("credit_3").value = "3";
    document.getElementById("credit_4").value = "3";
    document.getElementById("credit_5").value = "3";
    document.getElementById("credit_6").value = "1";
    document.getElementById("credit_7").value = "1";
    document.getElementById("credit_8").value = "1";

    for(let i=1;i<=numberOfSubjects;i++){
        document.getElementById("marks_" + i).value = "0";
    }
}

function marks_reduce(marks){
    if(marks>100){
        alert("Fool!!! Enter marks between 0 and 100.\nThough only a fool like you could get a 0.");
        calculateSgpa = false;
        return marks%100;
    }
    else if(marks>=90){
        return 10;
    }
    else if(marks>=80){
        return 9;
    }
    else if(marks>=70){
        return 8;
    }
    else if(marks>=60){
        return 7;
    }
    else if(marks>=55){
        return 6;
    }
    else if(marks>=50){
        return 5;
    }
    else if(marks>=40){
        return 4;
    }
    else if(marks>=0){
        return 0;
    }
    else{
        return 0;
    }
}

function calculate(){
    let marks = [];
    let credits = [];
    for(let i=1; i<=numberOfSubjects; i++){
        marks[i-1] = parseInt(marks_reduce(document.getElementById("marks_" + i).value));
    }

    total_credit = 0;
    for(let i=1; i<=numberOfSubjects; i++){
        total_credit += parseInt(document.getElementById("credit_" + i).value);
        credits[i-1] = parseInt(document.getElementById("credit_" + i).value);
    }
    
    
    numerator = 0;
    for(let i=1; i<=numberOfSubjects; i++){
        numerator += credits[i-1]*marks[i-1];
    }

    console.log("total credit " + total_credit);
    console.log("credits array " + credits);
    console.log("marks array " + marks);

    let SGPA = numerator/total_credit;
    console.log("SGPA = " + SGPA);
    if(calculateSgpa){
        if(SGPA >= 9.5){
            document.getElementById("result").innerHTML = "WOW!!! Your SGPA is " + SGPA + ".";
        }
        else if(SGPA >= 8){
            document.getElementById("result").innerHTML = "Good. Your SGPA is " + SGPA + ".";
        }
        else if(SGPA >= 7.5){
            document.getElementById("result").innerHTML = "Your SGPA is " + SGPA + ".";
        }
        else if(SGPA >= 6){
            document.getElementById("result").innerHTML = "Your SGPA is " + SGPA + ".<br>You can do better.";
        }
        else{
            document.getElementById("result").innerHTML = "Your SGPA is " + SGPA + ".<br>You are a failure, disgrace to your family."
        }
        //document.getElementById("result1").innerHTML = "Your SGPA is " + SGPA + ".";
    }
    
}