import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddSongPage from "./pages/AddSongPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<AddSongPage />} path="/add-song" exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
