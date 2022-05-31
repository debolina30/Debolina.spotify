import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddSongPage from "./pages/AddSongPage";
import { DataContextProvider } from "./contexts/DataContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
    <div className="App">
      <Router>
        <DataContextProvider>
          <Routes>
            <Route element={<HomePage />} path="/" exact />
            <Route element={<AddSongPage />} path="/add-song" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<LogoutPage />} path="/logout" />
            <Route element={<RegisterPage />} path="/register" />
          </Routes>
        </DataContextProvider>
      </Router>
    </div>
  );
}

export default App;
