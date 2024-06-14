import { useState } from 'react'

const Button = ({ handleClick, buttonName }) => <button onClick={handleClick}>{buttonName}</button>

const Tracker = ({ trackerName, statistic }) => <div>{trackerName} {statistic}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [calculations, setCalculations] = useState({
    all: 0,
    average: 0,
    positive: 0
  })

  const calculate = (good, neutral, bad) => {
    const newAll = good + neutral + bad;
    const newAverage = (good - bad) / newAll;
    const newPositive = (good / newAll) * 100;
    setCalculations({
      all: newAll,
      average: newAverage,
      positive: newPositive
    })
  }

  const handleGood = () => {
    setGood(good + 1);
    const updatedGood = good + 1;
    calculate(updatedGood, neutral, bad);
    return good;
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    const updatedNeutral = neutral + 1;
    calculate(good, updatedNeutral, bad);
    return neutral;
  }

  const handleBad = () => {
    setBad(bad + 1);
    const updatedBad = bad + 1;
    calculate(good, neutral, updatedBad);
    return bad;
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} buttonName="good"/>
      <Button handleClick={handleNeutral} buttonName="neutral"/>
      <Button handleClick={handleBad} buttonName="bad"/>

      <h1>statistics</h1>
      <Tracker trackerName="good" statistic={good} />
      <Tracker trackerName="neutral" statistic={neutral} />
      <Tracker trackerName="bad" statistic={bad} />
      <Tracker trackerName="all" statistic={calculations.all} />
      <Tracker trackerName="average" statistic={calculations.average} />
      <Tracker trackerName="positive" statistic={calculations.positive} />
    </div>
  )
}

export default App