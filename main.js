(function(){
    buildQuiz = () =>{
      // store output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // store list of possible answers
          const answers = [];
  
          // and for each available answer
          for(letter in currentQuestion.answers){
  
            //HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      //combine output into one string of HTML and display on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      //answer containers
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
        question: "What is javaScript",
        answers : {
            a: "I dont know what that is?",
            b: "Coffee Writing",
            c: "Programming Language For The Web",
        },
        rightAnswer: "c"
    },
    {
        question: "What is javaScript Casing Called?",
        answers: {
          a: "Camel Casing",
          b: "HumpBack Casing",
          c: "What Even Is That"
        },
        correctAnswer: "a"
      },
      {
        question: "Can javaScript Be Used In Server Side Coding?",
        answers: {
          a: "Yes",
          b: "No",
          c: "Only Sometimes"
        },
        correctAnswer: "a"
      },
      {
        question: "Is javaScript Object-Oriented?",
        answers: {
          a: "Yes",
          b: "No",
          c: "Only Sometimes"
        },
        correctAnswer: "a"
      },
      {
        question: "Is javaScript Class-Based?",
        answers: {
          a: "Yes",
          b: "No",
          c: "Only Sometimes"
        },
        correctAnswer: "b"
      },
      {
        question: "What Does The Math.random Method Do?",
        answers: {
          a: "return a random number between 0-1",
          b: "Gives You A Random Math Fact",
          c: "I Dont Like Math"
        },
        correctAnswer: "a"
      },
      {
        question: "What IS ES6?",
        answers: {
          a: "A Movie",
          b: "ECMAScript 6",
          c: "A Class"
        },
        correctAnswer: "b"
      },
    ]
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();