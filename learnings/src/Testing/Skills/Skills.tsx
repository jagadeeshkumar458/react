import React, { useEffect, useState } from 'react'
import { SkillProps } from './Skill.types'

function Skills(props: SkillProps) {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 1001)
    }, []);

  return (
    <>
    <ul>
        {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>
        })}
    </ul>
    {isLoggedIn ? (
        <button>Start learning</button>
    ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
    )}
    </>
  )
}

export default Skills