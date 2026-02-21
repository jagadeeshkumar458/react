import React from "react";
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
import ComponentC from "./ComponentC";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import CounterThree from "./CounterThree";
import { createContext } from "react";

export const UserContext = createContext("");
export const ChannelContext = createContext("");

function HooksComponents() {
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
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterOne />
      <CounterTwo />
      <CounterThree />
    </div>
  );
}

export default HooksComponents;
