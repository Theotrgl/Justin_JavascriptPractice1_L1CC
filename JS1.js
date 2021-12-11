function canGiveBloodA(a,b){
    if (a=="A+" && b=="A+" || b=="AB+"){
        return console.log("True");
        }else if (a=="A-" && b=="A+" || b=="A-" || b=="AB+" || b=="AB-"){
            return console.log("True");
        }else {
            return console.log("False")
        }
}

function canGiveBloodB(a,b){
    if (a=="B+" && b=="AB+" || b=="B+"){
        return console.log("True");
        }else if (a=="B-" && b=="AB+" || b=="AB-" || b=="B+" || b=="B-"){
            return console.log("True");
        }else {
            return console.log("False")
        }
}
    
function canGiveBloodAB(a,b){
    if (a=="AB+" && b=="AB+"){
        return console.log("True");
        }else if (a=="AB-" && b=="AB+" || b=="AB-"){
            return console.log("True");
        }else {
            return console.log("False")
        }
}

function canGiveBloodO(a,b){
    if (a=="O+" && b=="AB+" || b=="A+" || b=="B+" || b=="O+"){
        return console.log("True");
        }else if (a=="O-" && b=="AB+" || b=="A+" || b=="B+" || b=="O+" || b=="AB-" || b=="A-" || b=="B-" || b=="O-"){
            return console.log("True");
        }else {
            return console.log("False");
        }   
}

