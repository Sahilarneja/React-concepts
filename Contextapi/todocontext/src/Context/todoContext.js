import { createContext, useContext } from "react";


// The createContext function from React is used to create a context named todoContext. 
// This context comes with a default value, an object, which includes an array of todos, 
// and several functions (addTodo, updateTodo, deleteTodo, toggleComplete).
export const todoContext=createContext({
    todos:[
        {
            id:1,
            todo: "Todo msg",
            completed:false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (todo)=>{},
    toggleComplete: (id)=>{}
})

// The useTodo function is a custom hook that simplifies the process of accessing the 
// todoContext within functional components. It uses the useContext hook from React.

export const useTodo=()=>{
    return useContext(todoContext);
}

export const TodoProvider=todoContext.Provider

// This exports the Provider component of the todoContext. When you use this provider in 
// your component hierarchy, it makes the context and its values available to the 
// components that are descendants of it.