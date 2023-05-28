function calcularMediaAtletas(atletas) {
    atletas.forEach(atleta => {
      const notas = atleta.notas.slice().sort(); // Faz uma cópia das notas e as ordena
      const notasValidas = notas.slice(1, 4); // Seleciona as notas do meio
  
      const media = calcularMedia(notasValidas);
      exibirResultado(atleta.nome, notas, media);
    });
  }
  
  function calcularMedia(notas) {
    let soma = 0;
    notas.forEach(nota => {
      soma += nota;
    });
    return soma / notas.length;
  }
  
  function exibirResultado(nome, notas, media) {
    console.log(`Atleta: ${nome}`);
    console.log(`Notas Obtidas: ${notas.join(",")}`);
    console.log(`Média Válida: ${media}\n`);
  }
  
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  calcularMediaAtletas(atletas);
  