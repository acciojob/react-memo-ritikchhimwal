import React, { useState } from "react";
import TaskList from "./TaskList";

const ReactMemo = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const addSkill = () => {
    if (skill.length > 5) {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  return (
    <div>
      <h1>React.memo</h1>
      <input
        data-testid="skill-input"
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button data-testid="add-skill-btn" onClick={addSkill}>
        Add Skill
      </button>
      <TaskList skills={skills} />
    </div>
  );
};

export default ReactMemo;
