import React from 'react';
import { Loader2 } from 'lucide-react';

function TodosLoading({ text = 'Cargando tareas...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-3">
      <div className="relative">
        {/* Spinner animado */}
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        
        {/* Efecto de pulso de fondo */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse blur-sm" />
      </div>
      
      {/* Texto con animación de fade */}
      <span className="text-gray-600 animate-pulse">
        {text}
      </span>
    </div>
  );
}

export { TodosLoading };
