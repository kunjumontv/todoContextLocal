import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

/* 
Sure! This code is written in JavaScript using the React library. Let me break it down for you:

1. **`import` Statements**: This code imports two functions, `createContext` and `useContext`, from the React library. 
These functions are used to work with React's context system.

2. **`createContext`**: This function creates a new context object in React. 
A context in React is like a global state that can be accessed by any component in your application.

3. **`TodoContext`**: This line creates a new context object using the `createContext` function. It's named `TodoContext`,
 and it's initialized with an empty object `{}`.

4. **`Todo` Component**: This is a functional component named `Todo`. It uses the `useContext` hook from React. 
This hook allows components to consume values from a context. In this case, it's consuming the `TodoContext`.

5. **`Todoprovider` Constant**: This line creates a constant named `Todoprovider`, which is set to `TodoContext.Provider`.
 This `Provider` component is used to wrap around other components and provide them access to the context's values.

In simple terms, this code sets up a context called `TodoContext` which can hold some data. 
The `Todo` component can access this data using the `useContext` hook. 
And `Todoprovider` is just an alias for the `Provider` component of `TodoContext`, 
which can be used to wrap other components and provide them with access to the data stored in the `TodoContext`.
*/
