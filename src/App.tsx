import React from "react";
import TaskList from "./TaskList/TaskList";
import { Item } from "./TaskList/TaskList";

const ITEMS: Item[] = [
  { id: "1", name: "Task 1" },
  { id: "2", name: "Task 2" },
];

const App: React.FC = () => {
  return (
    <div>
      <TaskList title="Hello React" items={ITEMS} />
    </div>
  );
};

export default App;
