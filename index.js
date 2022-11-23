var import_n = require("readline-sync");

const log = console.log;
log("\nLet us check now how much do you know about Indian Geography");

var username = import_n.question("\Enter Your Name : ");
// log(username)
log("\nWelcome " + username.toUpperCase() + " to the Geography Quiz");

log("\n1-There Are Total Of six Questions...." + "\n2-For Each Correct Answer, You Will Get 10 Points...." + "\n3-For Each Wrong Answer 5 Point Will Be Deducted.....\n")

var questions_list = [

  {
    question: " Which is the capital of Uttar Pradesh?",
    options: ["Mysore", "Kanpur", "Indraprastha", "Lucknow"],
    answer: "Lucknow"
  },

  {
    question: "Which among the following states of India is also known as Dev Bhoomi ",
    options: ["Uttar Pradesh", "Uttarkhand", "Rajasthan", "Kerala"],
    answer: "Uttarkhand"
  },

  {
    question: "Which one is the oldest refinery in India?",
    options: ["Guwahati", "Barauni", "Mangalore", "Digboi"],
    answer: "Digboi"
  },

  {
    question: "Which one is the highest mountain peak in India?",
    options: ["Everest", "Yamnotri", "Nanda Devi", "Kangchenjunga"],
    answer: "Kangchenjunga"
  },


  {
    question: " Which state is the largest producer of rice in India?",
    options: ["West Bengal", "Andhra Pradesh", "Punjab", "Uttar Pradesh"],
    answer: "West Bengal"
  },


  {
    question: " Which one is the oldest mountain range in India?",
    options: ["Himalayas", "Aravalli", "Starupa", "Nilgiri"],
    answer: "Aravalli"
  },

]

var j = 1;
var score = 0;
for (var i = 0;i < questions_list.length; i++) {
  log("\nQuestion Number : " + j++);
  playgame(questions_list[i].question,
    questions_list[i].answer,
    questions_list[i].options);
 

}
 log("Final Score : " + score);
if(score === 60){
  log("you know very well about Indian Geography");
}
else if(score < 60 && score > 40){
  log("Nice!")
}
else{
  log("sorry")
}

function playgame(question, answer, options) {
  var user_ans = import_n.keyInSelect( options, question);
  if (options[user_ans] === answer) {
    score = score + 10;
    log("\nYour Answer Is Correct");
    log("Current Score :" + score);
    log("\n" + "===================================================")
  }
  else {
    score = score - 5;
    log("\nYour Answer Is Wrong");

    log("\nCurrent Score : " + score);
    log("\n" + "==================================================")
  }
}


