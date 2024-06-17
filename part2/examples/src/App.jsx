import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
    const [notes, setNotes] = useState(props.notes);
    const [newNote, setNewNote] = useState("a new note...");

	// The event is when form is submitted
	// The target is the form
    const addNote = (event) => {
        event.preventDefault();
        console.log("button clicked", event.target);
    };

	// The event is when input element changes i.e. typed a value
	// The target is the input element
	// Starting to see the relationship between the on<Specific Action> attribute and the prop being passed to the event handlers -- being passed is the event, which the event handler can then use to manipulate things
    const handleNoteChange = (event) => {
		console.log(event.target)
        console.log(event.target.value);
        setNewNote(event.target.value);
    };

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </ul>
            <form onSubmit={addNote}>
                <input 
					value={newNote} 
					onChange={handleNoteChange} 
				/>
                <button type="submit">save</button>
            </form>
        </div>
    );
};

export default App;
