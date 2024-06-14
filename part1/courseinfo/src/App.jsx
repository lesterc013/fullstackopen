const Header = ({course}) => {
  console.log("Header component works")
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  console.log("Content component works")
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  )
}

const Part = (props) => {
  console.log("Part component works")
  return (
    <p>{props.part} {props.exercises}</p>
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

      <Content 
        part1={parts[0].name} exercises1={parts[0].exercises} 
        part2={parts[1].name} exercises2={parts[1].exercises} 
        part3={parts[2].name} exercises3={parts[2].exercises} 
      />

      <Total 
        exercises1={parts[0].exercises} 
        exercises2={parts[1].exercises} 
        exercises3={parts[2].exercises} 
      />
    </div>
  )
}

export default App