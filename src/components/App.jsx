import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arStore,setArStore]=useState([]);
  function addItem(inputText){
    if(!(inputText[0]=='' && inputText[1]==''))
    setArStore((preValue)=>([...preValue,inputText]));
  
  }
  function deleted(id){
    setArStore((preValue)=>{return preValue.filter((item,index)=>{
      return index!=id;
    })})
  }
  return (
    <>
    <div>
      <Header />
      <CreateArea arAddItem={addItem}/>
      
    </div>
    {arStore.map((toDoItem,index)=>(<Note
    
    key={index}
    id={index}
    title={toDoItem[0]}
    content={toDoItem[1]}
    onDelete={deleted}
    
    />))}
    </>
  );
}

export default App;
