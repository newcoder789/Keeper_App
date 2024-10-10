import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [texts, changeText] = useState([])
  function handleTask(newtext){
    changeText((prevItems)=>[...prevItems, newtext])
  }


  function deleteNote(id){
    changeText((prevItems=>{
      return prevItems.filter((item, index)=>{
        return index!==id;
      })
    })) 
  }
  return (
    <div>
      <Header />
      <CreateArea task={handleTask} />
      {texts.map((text, index)=>{
        return (<Note key={index} title={text.title} content={text.content} id={index} task={deleteNote}/>)
      })}
      <Footer />
    </div>  
  );
}

export default App;
