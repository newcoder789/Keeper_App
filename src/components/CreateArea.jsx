import React, {useState} from "react";

function CreateArea(props) {
  const [note, changeNote] = useState({
    title:"",
    content:""
  })
  
  function handleEvent(event) {
    const { name, value } = event.target;

    changeNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    event.preventDefault();
    props.task(note);
    changeNote({
      title: "",
      content: ""
    }); 
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleEvent}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleEvent} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
