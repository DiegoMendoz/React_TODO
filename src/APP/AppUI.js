import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateToButton } from '../components/CreateToButtom';
import reactLogo from '../assets/react512.png';
import {TodosLoading} from '../TodosLoading/index.js';
import {TodosError} from '../TodosError/index.js';
import { TodosEmpty } from '../TodosEmpty/index.js';
import { TodoContext } from '../TodoContext/index.js';
import React from 'react';
import { useContext } from 'react';
import Modal from '../Modal';
import { CreateForm } from '../components/CreateForm.js';
import { EditTodo } from '../components/editTodo.js';



function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    toggleTodoCompleted,
    deleteTodo,
    isPopupOpen,
    setPopupOpen,
    todoToDelete,
    setTodoToDelete,
    openModal,
    setOpenModal,
    editModal,
    setEditModal,
    todoToEdit,
    setTodoToEdit,
  } = useContext(TodoContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002455] via-[#002455] to-[#050E3C] py-2 px-2 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ===== PANEL IZQUIERDO ===== */}
          <div className="p-8 rounded-2xl shadow-lg border-8 border-[#050E3C] bg-gradient-to-br from-[#0A1A5E] to-[#050E3C] max-h-screen lg:max-h-[587px] overflow-hidden">
            <div className="flex flex-col items-center space-y-8 lg:sticky lg:top-12">

              <img
                src={reactLogo}
                alt="React"
                className="w-32 h-32 object-contain rounded-full shadow"
              />

              <h1 className="text-center text-white uppercase tracking-[0.3em] text-3xl">
                Mis Tareas
              </h1>

              <div className="w-full max-w-md">
                <TodoSearch
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
                <CreateToButton>
                  Generar nueva tarea
                </CreateToButton>
                {/* Modal para crear nueva tarea */}
                {openModal && ( <Modal>
                  <CreateForm />
                  </Modal>)}

              </div>

            </div>
          </div>

          {/* ===== PANEL DERECHO ===== */}
          <div className="space-y-8">

            <TodoCounter
              completedTodos={completedTodos}
              totalTodos={totalTodos}
            />

            {/* CONTENEDOR CON SCROLL */}
            <div className="max-h-[460px] overflow-y-auto pr-2">

              {loading && <TodosLoading />}

              {error && <TodosError />}

              {!loading && !error && searchedTodos.length === 0 && (
                <div className="text-center py-16 bg-[#050E3C] rounded-sm border-8 border-[#050E3C] shadow">
                  <TodosEmpty />
                  <p className="text-white mt-4">
                    {searchValue
                      ? 'No se encontraron tareas'
                      : 'Crea tu primer TODO'}
                  </p>
                </div>
              )}

              {!loading && !error && searchedTodos.length > 0 && (
                <TodoList>
                  {searchedTodos.map((todo, index) => (
                    <div
                      key={todo.text}
                      style={{
                        transform: `rotate(${index % 2 === 0 ? '-0.3deg' : '0.3deg'})`,
                      }}
                    >
                      <TodoItem
                        text={todo.text}
                        completed={todo.completed}
                        onToggleCompleted={() =>
                          toggleTodoCompleted(todo.text)
                        }
                        onEdit={() => {
                          setTodoToEdit(todo);
                          setEditModal(true);
                        }}
                        onDelete={() => {
                          setTodoToDelete(todo.text);
                          setPopupOpen(true);
                        }}
                      />
                    </div>
                  ))}
                </TodoList>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#0A1A5E] p-6 rounded-lg shadow-lg text-white max-w-sm w-full">
            <p className="mb-4 text-center">
              ¿Seguro que quieres eliminar la tarea?
            </p>
            <p className="mb-6 text-center font-bold">
              "{todoToDelete}"
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                onClick={() => {
                  deleteTodo(todoToDelete);
                  setPopupOpen(false);
                  setTodoToDelete(null);
                }}
              >
                Sí
              </button>
              <button
                className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
                onClick={() => {
                  setPopupOpen(false);
                  setTodoToDelete(null);
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL PARA EDITAR */}
      {editModal && (
        <Modal>
          <EditTodo />
        </Modal>
      )}
    </div>
  );
}

export { AppUI };