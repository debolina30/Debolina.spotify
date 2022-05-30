import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddSongPage from "./pages/AddSongPage";
import { DataContextProvider } from "./contexts/DataContext";

function App() {
  return (
    <div className="App">
      <Router>
        <DataContextProvider>
          <Routes>
            <Route element={<HomePage />} path="/" exact />
            <Route element={<AddSongPage />} path="/add-song" exact />
          </Routes>
        </DataContextProvider>
      </Router>
    </div>
  );
}

export default App;
