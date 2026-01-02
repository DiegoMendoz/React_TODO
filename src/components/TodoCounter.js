function TodoCounter({ completedTodos, totalTodos }) {
  const percentage = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;
  return (
    <div className="bg-[#050E3C] rounded-sm border-8 border-[#050E3C] shadow-[0_4px_8px_rgba(220,0,0,0.5)] p-6 rotate-[-0.5deg] hover:rotate-0 transition-transform">
      {/* Barra de progreso */}
        <div className="w-full h-3 bg-[#002455] rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#DC0000] to-[#FF3838] transition-all duration-500 ease-out rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      {/* Caso: no hay tareas */}
      {completedTodos === 0 && totalTodos === 0 && (
        <h1 className="text-white text-center uppercase tracking-wider mt-2">
          ¡Aún no has agregado tareas!
        </h1>
      )}

      {/* Caso: todas completadas */}
      {completedTodos === totalTodos && totalTodos > 0 && (
        <h1 className="text-white text-center uppercase tracking-wider mt-2">
          ¡Felicidades! Has completado todas las tareas
        </h1>
      )}

      {/* Caso: progreso normal */}
      {completedTodos !== totalTodos && totalTodos > 0 && (
        <h1 className="text-white text-center uppercase tracking-wider mt-2">
          Has completado{' '}
          <span className="text-[#FF3838] font-bold">{completedTodos}</span>
          {' '}de{' '}
          <span className="text-[#FF3838] font-bold">{totalTodos}</span>
          {' '}TODOS
      
        </h1>
      )}
  
    </div>
  );
}

export { TodoCounter };
