import React, { useReducer } from "react";
import ClassCounter from "./ClassCounter";
import HookCounter from "./HookCounter";
import HookCounterTwo from "./HookCounterTwo";
import HookCounterThree from "./HookCounterThree";
import HookCounterFour from "./HookCounterFour";
import ClassCounterOne from "./ClassCounterOne";
import HookCounterOne from "./HookCounterOne";
import ClassMouse from "./ClassMouse";
import HookMouse from "./HookMouse";
import MouseContainer from "./MouseContainer";
import IntervalClassCounter from "./IntervalClassCounter";
import IntervalHookCounter from "./IntervalHookCounter";
import DataFetching from "./DataFetching";
import ComponentD from "./ComponentD";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import CounterThree from "./CounterThree";
import { createContext } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import DataFetchingOne from "./DataFetchingOne";
import DataFetchingTwo from "./DataFetchingTwo";
import ParentComponent from "./ParentComponent";
import Counter from "./Counter";

export const UserContext = createContext("");
export const ChannelContext = createContext("");

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function HooksComponents() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <ClassCounterOne />
      <HookCounterOne />
      <ClassMouse />
      <HookMouse />
      <MouseContainer />
      <IntervalClassCounter />
      <IntervalHookCounter />
      <DataFetching />
      <UserContext.Provider value={"Jagadeesh"}>
        <ChannelContext.Provider value={"codevolution"}>
          <ComponentD />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterOne />
      <CounterTwo />
      <CounterThree />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider>
      <DataFetchingOne />
      <DataFetchingTwo />
      <ParentComponent />
      <Counter />
    </div>
  );
}

export default HooksComponents;
