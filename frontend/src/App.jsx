import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FeedPage from "./pages/FeedPage";
import CommunityBoardPage from "./pages/CommunityBoardPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/CommunityBoard" element={<CommunityBoardPage />} />
      </Routes>
    </>
  );
}

export default App;
