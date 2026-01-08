import React from 'react'
import { SkillProps } from './Skill.types'

function Skills(props: SkillProps) {
    const { skills } = props;
  return (
    <>
    <ul>
        {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>
        })}
    </ul>
    </>
  )
}

export default Skills