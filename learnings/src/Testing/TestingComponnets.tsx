import React from 'react'
import Application from './Application/Application';
import Skills from './Skills/Skills';
import Counter from './Counter/Counter';
import AppProviders from './Providers/app-providers';
import MuiMode from './mui/mui-mode';

function TestingComponnets() {
  return (
    <div>
        <AppProviders>
          <Application />
          <Skills skills={['HTML', 'CSS', 'JS', 'React']} />
          <Counter />
          <MuiMode />
        </AppProviders>
    </div>
  )
}

export default TestingComponnets