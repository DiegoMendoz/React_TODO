
function TodoList(props) {
  return (
    <div className="rounded-2xl shadow-lg border-8 border-[#050E3C] bg-gradient-to-br from-[#0A1A5E] to-[#050E3C] scroll-smooth  overflow-y-auto pr-2 max-h-[460px]">
      <ul>
      {props.children}

    </ul>
    </div>
    
  );
}

export { TodoList };

