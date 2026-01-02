import React from 'react';

function TodosError({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-6 gap-3">
      <span className="text-red-500 text-sm font-medium">
        {message || 'Se ha producido un error al cargar las tareas.'}
      </span>

      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm text-blue-600 hover:underline"
        >
          Reintentar
        </button>
      )}
    </div>
  );
}

export { TodosError };