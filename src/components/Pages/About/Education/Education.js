import React from "react";
import "./Education.scss";

export function Education({ code, institution, pursuing, start, end, learnedSkills, summary, reflection }) {
  return (
    <div className="edu">
    <div className="edu-header">
      <div className="edu-institution">{ institution }</div>
      <div className="edu-pursuing">{ pursuing }</div>
      <div className="edu-tenure">{ start } - { end }</div>
    </div>
    <div className="edu-skills">
      { learnedSkills.map((skill, idx) => (<div key={`${idx}-${code}-${skill.substring(0,3)}`} className="edu-skill">{skill}</div>)) }
    </div>
    <div className="edu-body">
      <div className="edu-summary">{ summary }</div>
      <div className="edu-reflection">{ reflection }</div>
    </div>
  </div>
  )
}