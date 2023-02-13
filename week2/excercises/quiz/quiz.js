// My quiz questions and answers
const quizArray = [
    {question: "Who was the first queen to ever be eliminated from Rupaul's Drag Race?" , answer: "Porkchop."},
    {question: "Who was the first queen to never have to lip sync for their life on their season of Rupaul's Drag Race?" , answer: "Nina Flowers."},
    {question: "Which winner of Rupaul's Drag Race was recently named the Queen of All Queens?" , answer: "Jinx Monsoon."},
    {question: "Who is the only queen to be eliminated from RuPaul's Drag Race for breaking the rules?" , answer: "Willam"}

]
console.log(quizArray)

// Length of the question set
const quizArrayLength = quizArray.length;
console.log(quizArrayLength);

// Random question prompt selection
const questionIndex = Math.floor(Math.random() * quizArrayLength);
const answer = window.prompt(quizArray[questionIndex].question);

// Answer alert display
window.alert("You answered " + answer + ". The correct answer was " + quizArray[questionIndex].answer);