import React from 'react';
import Login from './Login';
import { ProfileProps } from './Profile';

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

function Private({ isLoggedIn, component: Component }: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="Jagadeesh" age={25} />;
  } else {
    return <Login />;
  }
}

export default Private