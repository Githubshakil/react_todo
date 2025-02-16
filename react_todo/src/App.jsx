import { useState } from "react"

function App() {

  let [tasks, setTasks] = useState([])
  let [text, setText] = useState('')
  let [isUpdate, setIsUpdate] = useState(false)
  let [index, setIndex] = useState(null)
  
  let handleAddTodo = () => {
    console.log('add todo',text)
    setTasks([...tasks,text])
    setText('')
    
  }

  let handleInputChange = (e) => {
    setText(e.target.value)
  }

  let handleDelete = (index) => {
    let newTasks = [...tasks]
    newTasks.splice(index,1)
    setTasks(newTasks)
    console.log(newTasks,tasks)
  }


  let handleEdit = (item,index) => {
    setIsUpdate(true)
    setText(item)
    setIndex(index)
    
  }

  let handleUpdate = () => {
    let newTasks = [...tasks] 
    newTasks[index] = text
    setTasks(newTasks)
  }



  return (
    <>
      <h1>ToDo</h1>
      <input value={text} onChange={handleInputChange} placeholder="Write your task" />
      {isUpdate
      ?
        <button onClick={handleUpdate}>Update</button>

      :
      
      <button onClick={handleAddTodo}>Add</button>
      
      }
      <ul>
        {tasks.map((item, index) => (
          <li>{item} <button onClick={()=>handleEdit(item,index)}>Edit</button> <button onClick={()=>handleDelete()}>Delete</button></li>
        ))}
       
      </ul>
    </>
  )
}

export default App
