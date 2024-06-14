const Header = ({courseName}) => {
  console.log("Header component works")
  return (
    <h1>{courseName}</h1>
  )
}

const Content = ({partsArray}) => {
  console.log("New Content works");
  return (
    <>
      <Part partName={partsArray[0].name} exercises={partsArray[0].exercises}/>
      <Part partName={partsArray[1].name} exercises={partsArray[1].exercises}/>
      <Part partName={partsArray[2].name} exercises={partsArray[2].exercises}/>
    </>
  )
}

const Part = ({partName, exercises}) => {
  console.log("Part component works")
  return (
    <p>{partName} {exercises}</p>
  )
}
 
const Total = ({partsArray}) => {
  console.log("New Total component works")
  return (
    <p>Number of exercises {partsArray[0].exercises + partsArray[1].exercises + partsArray[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header courseName={course.name}/>
      <Content partsArray={course.parts} />
      <Total partsArray={course.parts} />
    </div>
  )
}

export default App