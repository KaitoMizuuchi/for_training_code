import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/common.scss";
import Header from "./layout/Header";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="l-main">
        <div className="l-main__container">
          <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
