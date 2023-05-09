"use client";
import { increment } from "./action";
import { experimental_useOptimistic as useOptimistic } from "react";

export default function Button({
  latestPress,
}: {
  latestPress: { id: number; pressedAt: Date };
}) {
  const [optPress, setOptPress] = useOptimistic(
    latestPress,
    (state, press: { id: number; pressedAt: Date }) => {
      return { ...state, id: press.id, pressedAt: new Date() };
    }
  );

  return (
    <>
      <button
        onClick={() => {
          setOptPress({ id: optPress?.id ?? 0 + 1, pressedAt: new Date() });
          void increment();
        }}
      >
        Click me
      </button>
      <p>Clicked {optPress?.id} times</p>
      <p>Last pressed at {optPress?.pressedAt?.toLocaleTimeString()}</p>
    </>
  );
}
