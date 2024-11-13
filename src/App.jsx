import { useState } from "react";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const [face, setFace] = useState(true);

  const clickHandler = () => {
    setFace(!face);
  };

  return (
    <>
      <div className="webcamCapture">
        <Webcam mirrored={face} className="mycam"/>
      </div>
      <button onClick={clickHandler}>반전</button>
      <h1>Vite + React</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
