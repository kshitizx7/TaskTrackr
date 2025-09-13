const TaskRow = ({
  id,
  title,
  category,
  completed,
  onDelete,
  onToggleComplete,
}) => {
  console.log(category);
  const categoryColors = {
    red: "bg-red-500",
    gray: "bg-gray-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div
      className={`p-5 mt-5 mx-10 rounded-2xl flex justify-between items-center shadow-2xl shadow-gray-400 transition 
        ${completed ? "bg-green-400" : categoryColors[category]}
      `}
    >
      {/* Checkbox for complete toggle */}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
        className="ml-5 h-5 w-5 cursor-pointer"
      />

      {/* Task details */}
      <div className="flex m-5 justify-between flex-1">
        <div className="mx-5 text-2xl font-bold italic">#{id}</div>
        <div className="font-bold text-white text-xl">{title}</div>
        <div className="font-bold text-white text-lg underline">
          {category === "red"
            ? "Work"
            : category === "yellow"
            ? "Study"
            : "Personal"}
        </div>
      </div>

      {/* Delete button */}
      <div
        onClick={() => onDelete(id)}
        className="mr-5 bg-gray-600 text-white p-1 px-5 rounded-lg cursor-pointer hover:bg-black"
      >
        del
      </div>
    </div>
  );
};

export default TaskRow;
