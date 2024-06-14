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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>

      <Content 
        part1={part1.name} exercises1={part1.exercises} 
        part2={part2.name} exercises2={part2.exercises} 
        part3={part3.name} exercises3={part3.exercises} 
      />

      <Total 
        exercises1={part1.exercises} 
        exercises2={part2.exercises} 
        exercises3={part3.exercises} 
      />
    </div>
  )
}

export default App