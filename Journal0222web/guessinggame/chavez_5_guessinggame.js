i used maxs javascript to make my own guessing game.

var answer1;
var answer2;
var answer3;
var answer4;
var answer5;
var answer6;
var answer7;
var answer8;
var answer9;
var answer10;
var a1 = false;
var a2 = false;
var a3 = false;
var a4 = false;
var a5 = false;
var a6 = false;
var a7 = false;
var a8 = false;
var a9 = false;
var a10 = false;

window.alert("Hello, and welcome to my quiz game! All of the questions are about me! Press enter to begin! Remember, grammar is important!");

while (!a1) {
var q1 = prompt("Question 1: What is Max's last name?");
    if (q1 == "Bryant") {
        answer1 = alert("You are correct!");
        a1 = true;
    } else {
        answer1 = alert("Sorry, you are not correct, try again.");
    }
}

while (!a2) {
var q2 = prompt("Question 2: What is Max's favorite color?");
    if (q2 == "green") {
        answer2 = alert("You are correct!");
        a2 = true;
    } else {
        answer2 = alert("Sorry, you are not correct, try again.");
    }
}

while (!a3) {
var q3 = prompt("Question 3: What is Max's first dog's name?");
    if (q3 == "Buddy") {
        answer3 = alert("You are correct!");
        a3 = true;
    } else {
        answer3 = alert("Sorry, you are not correct, try again.");
    }
}

while (!a4) {
var q4 = prompt("Question 4: What is Max's Mother's maiden name?");
    if (q4 == "Morgenthaler") {
        answer4 = alert("You are correct!");
        a4 = true;
    } else {
        answer4 = alert("Sorry, you are not correct, try again.");
    }
}

while (!a5) {
var q5 = prompt("Question 5: What is Max's favorite word?");
    if (q5 == "malice") {
        answer5 = alert("You are correct!");
        a5 = true;
    } else {
        answer5 = alert("Sorry, you are not correct, try again.");
    }
}

while (!a6) {
var q6 = prompt("Question 6: What is the name of the brand on Max's backpack?");
    if (q6 == "Solo") {
        answer6 = alert("You are correct!");
        a6 = true;
    } else {
        answer6 = alert("Sorry, you are not correct, try again.");
    }
}

while (!a7) {
var q7 = prompt("Question 7: What is Max's favorite food?");
    if (q7 == "pasta") {
        answer7 = alert("You are correct!");
        a7 = true;
    } else {
        answer7 = alert("Sorry, you are not correct, try again.");
    }
}

while (!a8) {
var q8 = prompt("Question 8: What was the answer to question 5?");
    if (q8 == "malice") {
        answer8 = alert("You are correct!");
        a8 = true;
    } else {
        answer8 = alert("Sorry, you are not correct, try again.");
    }
}

while (!a9) {
var q9 = prompt("Question 9: Who sits right of Max in Computer Science?");
    if (q9 == "Jude") {
        answer9 = alert("You are correct!");
        a9 = true;
    } else {
        answer9 = alert("Sorry, you are not correct, try again.");
    }
}

while (!a10) {
var q10 = prompt("Question 10: What is Max's brother's name?");
    if (q10 == "Alex") {
        answer10 = alert("You are correct!");
        a10 = true;
        window.alert("Congrats! You have won my quiz!!!");
    } else {
        answer10 = alert("Sorry, you are not correct, try again.");
    }
}
