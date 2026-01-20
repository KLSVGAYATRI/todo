import React from 'react'

const Todolist = ({ todolist, deleteHandler, editHandler }) => {
  return (
    <div>
        {todolist.map((todo, index) =>
             <div key={index}>
               <h5>{todo} &nbsp; <button onClick={() => editHandler(index, prompt("Edit task:", todo))}>Edit</button> &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>
            </div>
            
        )}
    </div>
  )
}

export default Todolist