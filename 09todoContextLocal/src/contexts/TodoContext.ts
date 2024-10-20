import { createContext, useContext } from "react";

// Define the shape of a todo item
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

// Define the context value types
interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, "id">) => void; // Omit id for adding a new todo
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, updatedTodo: Omit<Todo, "id">) => void; // Omit id for updating
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
  updateTodo: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
