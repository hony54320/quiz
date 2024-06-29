import inquirer from 'inquirer';
// Define questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Rome", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H", "W", "H2O", "O2"],
        correctAnswer: "H2O"
    }
];
// Initialize variables
let score = 0;
// Function to start the quiz
async function startQuiz() {
    console.log("Welcome to the Quiz System!\n");
    for (let i = 0; i < questions.length; i++) {
        const questionObj = questions[i];
        const { question, options, correctAnswer } = questionObj;
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: question,
                choices: options
            }
        ]);
        const userAnswer = answers.answer;
        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            score++;
        }
        else {
            console.log(`Incorrect. The correct answer is: ${correctAnswer}`);
        }
    }
    // Display final score
    console.log("\nQuiz complete! Your final score is: " + score + " out of " + questions.length);
    console.log("Thank you for playing!");
}
// Start the quiz
startQuiz();
