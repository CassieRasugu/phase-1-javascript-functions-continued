// code your solution here
function saturdayFun(activity = "roller-skate"){
    return "This Saturday I will go and ${activity}";
}
function mondayWork(activity = "go to the office"){
    return "This Monday i will go ${activity}";
}
function wrapAdjective(flair = "*")
return function(adjective = "special") {
    return "you are ${flair}${adjective}${flair}!";
}
console.log(encouragingPromptFunction(" A consitant hardworking amazing Lady"));
