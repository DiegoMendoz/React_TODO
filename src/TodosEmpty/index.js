import React from 'react';
import { CheckCircle2, Plus } from 'lucide-react';

function TodosEmpty({
  message = 'No hay tareas pendientes.',
  onCreateTask,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      {/* Icono de estado vacío */}
      <div className="relative">
        <CheckCircle2 className="w-16 h-16 text-gray-300" strokeWidth={1.5} />
        <div className="absolute inset-0 bg-gray-200/30 rounded-full blur-md" />
      </div>

      {/* Mensaje */}
      <div className="text-center space-y-3">
        <p className="text-gray-500">
          {message}
        </p>

        {/* Botón para crear tarea (opcional) */}
        {onCreateTask && (
          <button
            onClick={onCreateTask}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Crear primera tarea</span>
          </button>
        )}
      </div>
    </div>
  );
}

export { TodosEmpty };
