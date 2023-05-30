
const alunos = [
    { nome: 'Thiago', nota: 9 },
    { nome: 'Thaissa', nota: 5 },
    { nome: 'Julia', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Luiza', nota: 9 },
    ];
    const filtrarAlunos = (alunos) => {
    return alunos.filter((aluno) => aluno.nota >= 6);
    };


    const alunosAprovados = filtrarAlunos(alunos);


    console.log(alunosAprovados);