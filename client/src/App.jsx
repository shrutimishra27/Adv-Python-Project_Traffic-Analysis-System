import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DataSet from "./components/DataSet/DataSet";
import DetectedVideo from "./components/DetectedVideo/Detect";
import Home from "./components/Home/Home";
import Video from "./components/VideoUpload/Video";

function App() {
  return (
    <>
     <Video />
     <DataSet />
    </>
  );
}

export default App;
