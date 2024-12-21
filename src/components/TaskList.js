import React from "react";

const TaskList = React.memo(({ skills }) => {
  console.log("Rendering TaskList...");
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

export default TaskList;
