import React from 'react'

export default function Quiz(props) {
  const btnElements = props.incorrect.map((btnText) => (
    <button key={btnText}>{btnText}</button>
  ))

  console.log(props)

  return (
    <div>
      <p>{props.question}</p>
      {btnElements}
    </div>
  )
}

//   React.useEffect(() => {
//     const allAnswers = props.incorrect
//     allAnswers.push(props.correct)
// allAnswers.sort(() => Math.random() - 0.5)
// setBtn(allAnswers)
// setBtn((prevBtn) =>
//   prevBtn.map((but) => {
//     return
//   })
// )
//   }, [xyz])

//   const [btn, setBtn] = React.useState([])

// useEffect instead of function , run only once []
