//bringing elements from HTML

var start = document.getElementById("start");
var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var answerA = document.getElementById('A');
var answerB = document.getElementById('B');
var answerC = document.getElementById('C');
var answerD = document.getElementById('D');
var time1 = document.getElementById('timer_sec');
var scoreProgress = document.getElementById('scoreContainer');

//questions section 

var questions = [
    
    {question: "Inside which HTML element do we put the JavaScript?", 
    answerA: "Wrong",
    answerB: "Wrong",
    answerC: "Wrong",
    answerD: "Correct",
    correct: "D"
    },

    {question: "Which of the following is the correct syntax to print a page using JavaScript?", 
    answerA: "Correct",
    answerB: "Wrong",
    answerC: "Wrong",
    answerD: "Wrong",
    correct: "A"
    },

    {question: "Which of the following function of String object returns the calling string value converted to upper case?", 
    answerA: "Wrong",
    answerB: "Correct",
    answerC: "Wrong",
    answerD: "Wrong",
    correct: "B"

    },
    {question: "The correct sequence of HTML tags for starting a webpage is: ", 
    answerA: "Wrong",
    answerB: "Wrong",
    answerC: "Wrong",
    answerD: "Correct",
    correct: "D"
    },

    {question: "Which of the following tag is used to define options in a drop-down selection list?", 
    answerA: "Wrong",
    answerB: "Wrong",
    answerC: "Correct",
    answerD: "Wrong",
    correct: "C"
    },
    {question: "Which of the following is the correct syntax to select all paragraph elements in a div element    ", 
    answerA: "Wrong",
    answerB: "Correct",
    answerC: "Wrong",
    answerD: "Wrong",
    correct: "B"
    }
];