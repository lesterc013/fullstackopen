const Country = ({ countryName, handleShow }) => {
  return (
    <div>
      {countryName} <button onClick={() => handleShow(countryName)} >show</button>
    </div>
  ) 
}

export default Country