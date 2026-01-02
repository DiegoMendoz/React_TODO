import React, { useContext } from 'react';
import useLocalStorage from '../Hook/uselocalstorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [todoToDelete, setTodoToDelete] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [todoToEdit, setTodoToEdit] = React.useState(null);

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const safeTodos = Array.isArray(todos) ? todos : [];

  const completedTodos = safeTodos.filter(todo => todo.completed).length;
  const totalTodos = safeTodos.length;

  const searchedTodos = safeTodos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleTodoCompleted = (text) => {
    saveTodos(
      safeTodos.map(todo =>
        todo.text === text
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (text) => {
    saveTodos(safeTodos.filter(todo => todo.text !== text));
  };

  const addTodo = (text) => {
    const newTodos = [...safeTodos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const editTodo = (oldText, newText) => {
    saveTodos(
      safeTodos.map(todo =>
        todo.text === oldText
          ? { ...todo, text: newText }
          : todo
      )
    );
  };


  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleTodoCompleted,
        deleteTodo,
        isPopupOpen,
        setPopupOpen,
        todoToDelete,
        setTodoToDelete,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
        editTodo,
        editModal,
        setEditModal,
        todoToEdit,
        setTodoToEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos debe usarse dentro de <TodoProvider>');
  }
  return context;
}

export { TodoContext, TodoProvider, useTodos };
