const Accordion = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border rounded-lg my-4">
      <div
        className="flex justify-between item-center p-4 cursor-pointer"
        onClick={onClick}
      >
        <h2 className="font-bold">{title}</h2>
        <span>{isOpen ? "⬆️" : "⬇️"}</span>
      </div>
      {isOpen && (<div className="p-4 border-t">{children}</div>)}
    </div>
  );
};

export default Accordion;
