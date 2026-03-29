import { useEffect, useState } from "react";
import styles from './Alunos.module.css'

function Alunos(){    

    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=> {

        const dados = [
            {id: 1, nome: 'Maria Silva', curso: 'Informática'},
            {id: 2, nome: 'João Souza', curso: 'Informática'},
            {id: 3, nome: 'Ana Costa', curso: 'Informática'},
            {id: 4, nome: 'José da Silva', curso: 'Informática'},
            {id: 5, nome: 'Fernanda Santos', curso: 'Informática'},
            {id: 6, nome: 'Gabriel Henrique', curso: 'Informática'},
        ]

        setTimeout(() =>{
            setAlunos(dados);
            setLoading(false);
        }, 2000);

    }, []);

    if(loading){
        return <p className={styles.loading}>Carregando alunos...</p>
    }

    return(
        <div className={styles.container}>
            <h1>Lista de Alunos</h1>

            {alunos.length === 0 ? (<p className={styles.vazio}>Nenhum aluno encontrado.</p>) 
            : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    );
}

export default Alunos;