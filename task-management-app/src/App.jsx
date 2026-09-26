import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return; // 空文字は追加しない

    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput(""); // 入力欄をクリア
  };

  const toggleTask = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    )
  );
};

  const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">タスク管理アプリ</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border rounded px-3 py-2 flex-1"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAdd();
            }
          }}
          placeholder="タスクを入力"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          追加
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center py-1"
          >
          <span
            onClick={() => toggleTask(task.id)}
            className={`cursor-pointer ${
            task.done ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 px-2"
          >
            削除
          </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;