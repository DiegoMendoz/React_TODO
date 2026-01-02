function TodoItem(props) {
  return (
    <li className="flex items-center gap-4 p-6 bg-[#050E3C] rounded-sm border-8 border-[#050E3C] shadow-[0_4px_6px_rgba(220,0,0,0.5)] hover:shadow-[0_6px_12px_rgba(220,0,0,0.6)] transition-all rotate-[-0.5deg] hover:rotate-0">
      {/* Botón para marcar completado */}
      <span 
        className={`flex items-center justify-center size-8 rounded-full border-2 ${
          props.completed 
            ? 'bg-[#DC0000] border-[#DC0000] text-white' 
            : 'bg-transparent border-white text-white'
        }`}
        onClick={props.onToggleCompleted} // ejecuta toggle desde App
      >
        {props.completed ? "✓" : "X"}
      </span>
      {/* Texto de la tarea */}
      <p className={`flex-1 ${
        props.completed ? 'line-through text-gray-400' : 'text-white'
      }`}>
        {props.text}
      </p>
      {/* Botón para editar */}
      <span
        className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer"
        onClick={props.onEdit}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
          <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a.75.75 0 0 0-.181.408c0 .554-.292 1.083-.716 1.307l-1.24.713a.25.25 0 0 0-.037.036l.767 1.516a.25.25 0 0 0 .463 0l1.516-.767.036.037c.224.424.753.716 1.307.716a.75.75 0 0 0 .408-.181l4.261-4.261a1.75 1.75 0 0 0 0-2.475Zm-2.475 1.06a.25.25 0 0 1 .354 0l4.261 4.261a.25.25 0 0 1 0 .354l-5.39 5.39a.75.75 0 0 1-.535.222H6.75a.75.75 0 0 1-.75-.75v-2.586a.75.75 0 0 1 .222-.535l5.39-5.39Z"/>
        </svg>
      </span>
      {/* Botón para eliminar */}
      <span 
        className="text-sm text-red-500 hover:text-red-700 cursor-pointer" 
        onClick={props.onDelete} // ejecuta la función que abre el popup
      > 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
        </svg>
      </span>
    </li>
  );
}

export { TodoItem };
