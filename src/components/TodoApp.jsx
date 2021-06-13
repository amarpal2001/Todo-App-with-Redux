import React, {useState} from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo, removeTodo} from './actions/index';


const TodoApp = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.todoReducer.list)
  const [input, setInput] = useState()

    return (
      <>
        <div className="container">
          <h4>Todo-list</h4>
          <div className="add-element">
            <input className="input" type="text" placeholder=" ✍️ Enter Todo" 
            value={input}  
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            />

            <button className="add m-2" 
            onClick={() => dispatch(addTodo(input), setInput(""))}
            >Add</button>


            <div className="delete_item">
               {
                 list.map((elem) => {
                   return (
                   <div className="move_item" key={elem.id}>
                    <h5 className="all_data">
                      {elem.data}
                      </h5>
                    <i className="fa fa-trash-alt mt-1" title="delete" onClick={() => dispatch(deleteTodo(elem.id), setInput(""))}></i>
                    
                  </div>
                   )
                 })
               }
             
            </div>  
            <button className="btn btn-danger" id="btn"
            onClick={() => dispatch(removeTodo())}
            >Remove All</button>
            
          </div>
        </div>
      </>
    )
}

export default TodoApp;