const Notification = ({message}) => {
  const notificationStyle = {
    color: 'green',
    fontSize: 20,
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  // Conditional rendering if message === null
  if (!message) {
    return null
  }
  return <div style={notificationStyle}>{message}</div>
}

export default Notification