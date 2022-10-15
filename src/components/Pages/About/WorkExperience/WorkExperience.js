import React, { useState } from "react";
import "./WorkExperience.scss";

export function WorkExperience({ company, title, tasks = [], start, end, summary, developedSkills = [], code }) {
  const [hidden, setHidden] = useState("hidden");

  const handleExpand = () => {
    if (hidden === "hidden") {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  }
  
  return (
    <div className={`work-exp ${hidden}`} onClick={handleExpand}>
      <div className={`work-exp-header ${hidden}`}>
        <div className={`work-exp-title ${hidden}`}>{ company }</div>
        <div className={`work-exp-company ${hidden}`}>{ title }</div>
        <div className={`work-exp-tenure ${hidden}`}>{ start } - { end }</div>
      </div>
      <div className={`work-exp-skills ${hidden}`}>
        <div className={`work-exp-skills-title ${hidden}`}>Skills Developed</div>
        <div className="work-exp-skills-list">
          <div className="work-exp-skills-list-hard">
            { developedSkills.hard.map((skill) => (<div key={`${code}-${skill.substring(0,3)}`} className="work-exp-skill-hard">{skill}</div>)) }
          </div>
          <div className="work-exp-skills-list-soft">
            { developedSkills.soft.map((skill) => (<div key={`${code}-${skill.substring(0,3)}`} className="work-exp-skill-soft">{skill}</div>)) }
          </div>
        </div>
        </div>
      <div className={`work-exp-body ${hidden}`}>
        <div className="work-exp-label">Roles/Responsibilities</div>
        <ul>
          { tasks.map((task, idx) => (<li key={`${idx}-${task.substring(0,3)}`}>{ task }</li>)) }
        </ul>
        <div className="work-exp-summary">{ summary }</div>
      </div>
    </div>
  )
}