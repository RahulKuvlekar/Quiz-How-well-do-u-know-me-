console.log("------------ RAHUL KUVLEKAR -------------");
// console.log(234343);
var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Your Name Please ? ");
console.log("\n\n");

console.log("Welcome " + userName + ", Have Great Day Ahead \n\n")



console.log("Welcome to How much Do you Know Rahul ???  \n");
//function to play quetsions
function play(question,answer)
{   //if press y-> give true,n-->False 
    var userAns=readlineSync.keyInYN("Question :: " + question);
    if(userAns === answer)
    {
        console.log("Answer :: You Right !!!!! ");
        score+=1;
    }    
    else{
        console.log("Answer :: Sorry,Better Luck next Time !!! ")
        score-=1;
    }

    console.log("SCORE :: " + score);
    console.log(" -------------- *** -------------- ");
}


// questions 
var questionBank=[
    {
        question : "Is Rahul Fav Game ? Cricket ? ",
        answer : false
    },
    {
        question : "Is Rahul 6ft Tall ??? ",
        answer : true
    },
    {
        question : "Is RAHUL a Gym Lover and Fitness freak ? ",
        answer : true
    },
    {
        question :" Is Rahul Fav Food item ? Biryani ? ",
        answer : false
    },
    {
        question : "Is RAHUL's a Good Human Being   ? ",
        answer : true
    }];

for(var i=0;i<questionBank.length;i++)
{   
    //console.log(questionBank[i]);
    play(questionBank[i].question,questionBank[i].answer);
}    

console.log("FINAL SCORE :: " + score);
console.log("\n\n--------- The End ----------")