"use client";

import { useState } from "react";

export default function Counter({ user }) {
  const [count, setCount] = useState(0);
  console.log(user);
  return (
    <div>
      <p>are{user.length}</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
    </div>
  );
}
