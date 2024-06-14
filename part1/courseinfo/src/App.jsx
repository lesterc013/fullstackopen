const Header = ({course}) => {
  console.log("Header component works")
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  console.log("New Content works");
  return (
    <>
      <Part partName={parts[0].name} exercises={parts[0].exercises}/>
      <Part partName={parts[1].name} exercises={parts[1].exercises}/>
      <Part partName={parts[2].name} exercises={parts[2].exercises}/>
    </>
  )
}

const Part = (props) => {
  console.log("Part component works")
  return (
    <p>{props.partName} {props.exercises}</p>
  )
}

const Total = (props) => {
  console.log("Total component works")
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}
 
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>

      <Content parts={parts} />

      <Total 
        exercises1={parts[0].exercises} 
        exercises2={parts[1].exercises} 
        exercises3={parts[0].exercises} 
      />
    </div>
  )
}

export default App