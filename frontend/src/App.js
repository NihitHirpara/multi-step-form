import "./App.css";
import LogoHeader from "./components/LogoHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoHeader />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
