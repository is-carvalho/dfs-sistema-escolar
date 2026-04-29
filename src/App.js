import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CadastrarAlunos from "./pages/CadastrarAlunos";
import CadastrarLivro from "./pages/CadastrarLivro";
import Alunos from "./pages/Alunos";
import Biblioteca from "./pages/Biblioteca";
import Dashboard from "./pages/Dashboard";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter basename={"/dfs-sistema-escolar"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/cadastarAlunos" element={<CadastrarAlunos />} />
            <Route path="/cadastrarLivro" element={<CadastrarLivro />} />
            <Route path="/Alunos" element={<Alunos />} />
            <Route path="/Biblioteca" element={<Biblioteca />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
