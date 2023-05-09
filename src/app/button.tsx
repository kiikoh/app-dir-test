"use client";
import { increment } from "./action";
import { experimental_useOptimistic as useOptimistic } from "react";

export default function Button({
  latestPress,
}: {
  latestPress: { id: number; pressedAt: Date } | undefined;
}) {
  const [optPress, setOptPress] = useOptimistic(latestPress, (press) => {
    if (!press) return { id: 1, pressedAt: new Date() };

    return { id: press.id + 1, pressedAt: new Date() };
  });

  return (
    <>
      <button
        onClick={() => {
          setOptPress(optPress);
          void increment();
        }}
      >
        Click me
      </button>
      <p>Clicked {optPress?.id} times</p>
      <p>Last pressed at {optPress?.pressedAt?.toLocaleDateString()}</p>
    </>
  );
}
