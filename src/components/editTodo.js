import React from 'react';
import { TodoContext } from '../TodoContext';

function EditTodo() {
  const { editTodo, setEditModal, todoToEdit, setTodoToEdit } = React.useContext(TodoContext);
  const [text, setText] = React.useState(todoToEdit?.text || '');

  React.useEffect(() => {
    setText(todoToEdit?.text || '');
  }, [todoToEdit]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    editTodo(todoToEdit.text, text);
    setText('');
    setEditModal(false);
    setTodoToEdit(null);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-white">
        Editar Tarea
      </h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Descripción de la tarea"
          className="w-full p-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#DC0000]"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => {
              setEditModal(false);
              setTodoToEdit(null);
            }}
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-[#DC0000] text-white rounded hover:bg-[#0A1A5E]"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </>
  );
}

export { EditTodo };
