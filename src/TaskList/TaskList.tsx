import React from "react";

export type Item = { id: string; name: string };

interface Props {
  title: string;
  items: Item[];
}

const TaskList: React.FC<Props> = ({ items, title }) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {items.map((i) => (
        <p key={i.name}>{i.name}</p>
      ))}
    </div>
  );
};

export default TaskList;
