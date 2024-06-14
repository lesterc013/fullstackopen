import { useState } from 'react'

const Button = ({ handleClick, buttonName }) => <button onClick={handleClick}>{buttonName}</button>

const Tracker = ({ trackerName, statistic }) => <div>{trackerName} {statistic}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

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
    </div>
  )
}

export default App