import { useState } from "react";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const [mirror, setMirror] = useState(true);
  const [face, setFace] = useState({ facingMode: "user" });

  const clickHandler = () => {
    setMirror(!mirror);
  };
  const frontkHandler = () => {
    if (face == { facingMode: "user" }) setFace({ facingMode: { exact: "environment" } });
    else setFace({ facingMode: "user" });
  };

  return (
    <>
      <div className="webcamCapture">
        <Webcam mirrored={mirror} videoConstraints={face} className="mycam" />
      </div>
      <button onClick={clickHandler}>반전</button>
      <button onClick={frontkHandler}>앞뒤</button>
      <h1>Vite + React</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
