import React from "react";
import ReactDOM from "react-dom";

function Modal({ children, onClose }) {
  // Crear el elemento modal si no existe
  React.useEffect(() => {
    let modalRoot = document.getElementById("modal");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = "modal";
      document.body.appendChild(modalRoot);
    }
  }, []);

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#050E3C] rounded-lg shadow-[0_12px_40px_rgba(220,0,0,0.6)] border-8 border-[#050E3C] p-8 w-full max-w-md relative transform rotate-[-0.5deg] hover:rotate-0 transition-all duration-300 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
       
        
        {/* Contenido del modal */}
        <div className="text-white">
          {children}
          
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;