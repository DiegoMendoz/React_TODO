import { TodoContext } from '../TodoContext/index.js';
import React from 'react';
function CreateToButton({ children }) {
  const { setOpenModal } = React.useContext(TodoContext);
  return (
    <button
      className="
        w-full
        bg-[#DC0000]
        text-white font-semibold tracking-wide
        py-4 px-6
        rounded-xl
        shadow-[0_6px_20px_rgba(0,0,0,0.35)]
        hover:bg-[#0A1A5E]
        hover:scale-[1.02]
        active:scale-95
        transition-all duration-200
        focus:outline-none focus:ring-4 focus:ring-[#FF3838]/40
      "
      onClick={() => setOpenModal(true)}
    >
      {children}
    </button>
  );
}

export { CreateToButton };