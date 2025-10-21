import React, { useContext } from "react";
import { ScoreContext } from "./ScoreContext";

function App() {
  const { score, setScore } = useContext(ScoreContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Global Game Score</h1>
      <p>Score: {score}</p>
      <button onClick={() => setScore(score + 1)}>+1</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}

export default App;
