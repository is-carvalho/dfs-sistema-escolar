import { useState } from "react";
import styles from "./CadastrarLivro.module.css";

function CadastrarLivro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSucesso("");
    setErro("");

    fetch("http://localhost:5001/livros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, autor }),
    })
      .then((resp) => {
        if (!resp.ok) throw new Error("Erro ao cadastrar livro");
        return resp.json();
      })
      .then(() => {
        setSucesso("Livro cadastrado com sucesso!");
        setTitulo("");
        setAutor("");
      })
      .catch(() => setErro("Erro ao cadastrar livro."))
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.container}>
      <h1>Cadastrar Livro</h1>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.campo}>
          <label htmlFor="titulo">Título:</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="autor">Autor:</label>
          <input
            id="autor"
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Cadastrar"}
        </button>
      </form>
      {sucesso && <p className={styles.sucesso}>{sucesso}</p>}
      {erro && <p className={styles.erro}>{erro}</p>}
    </div>
  );
}

export default CadastrarLivro;
