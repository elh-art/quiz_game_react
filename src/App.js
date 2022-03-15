import React from 'react'
import './App.css'
import Quiz from './Quiz'

export default function App() {
  const [allQuiz, setAllQuiz] = React.useState([])

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then((res) => res.json())
      .then((data) => setAllQuiz(data.results))
  }, [])

  function generateButtons() {
    for (let i = 0; i < allQuiz.length; i++) {
      const allAnswers = allQuiz[i].incorrect_answers
      allAnswers.push(allQuiz[i].correct_answer)
      allAnswers.sort(() => Math.random() - 0.5)
    }
  }

  generateButtons()
  // console.log(allQuiz)

  const quizElements = allQuiz.map((everyQuiz) => (
    <Quiz
      key={everyQuiz.question}
      question={everyQuiz.question}
      correct={everyQuiz.correct_answer}
      incorrect={everyQuiz.incorrect_answers}
    />
  ))

  return (
    <div className="App">
      <main className="App-main">{quizElements}</main>
    </div>
  )
}

// async function getQuiz() {
//   const res = await fetch(
//     'https://opentdb.com/api.php?amount=5&type=multiple'
//   )
//   const data = await res.json()
//   setAllQuiz(data.results)
// }
// getQuiz()

// React.useEffect(() => {
//   function generateButtons() {
//     for (let i = 0; i < allQuiz.length; i++) {
//       const allAnswers = allQuiz[i].incorrect_answers
//       allAnswers.push(allQuiz[i].correct_answer)
//       allAnswers.sort(() => Math.random() - 0.5)
//       return allAnswers
//       // console.log(allAnswers)
//     }
//   }
//   setButtons(generateButtons())
// }, [allQuiz])

// console.log(buttons)

// function generateButtons() {
//   const allAnswers = props.incorrect
//   allAnswers.push(props.correct)
//   allAnswers.sort(() => Math.random() - 0.5)
//   //   setBtn(prevBtn => prevBtn.map(but => {
//   //           return
//   //       }))
//   console.log(allAnswers)
// }

// generateButtons()

// function generateQuiz() {
//   return {
//     category: '',
//     correct_answer: '',
//     difficulty: '',
//     incorrect_answers: [],
//     question: '',
//     type: '',
//     btn: [],
//   }
// }

// console.log(allAnswers)

// setAllQuiz((prevState) => ({
//   ...prevState,
//   allQuiz[i].incorrect_answers: allAnswers,
// }))

// setAllQuiz(
//   allAnswers.reduce(
//     (obj, data) => ({ ...obj, [data[i].all_answers]: [data] }),
//     {}
//   )
// )

// setAllQuiz((prevQuiz) => {
//   return { ...prevQuiz, incorrect_answers: allAnswers }
// })

// const [buttons, setButtons] = React.useState([])
