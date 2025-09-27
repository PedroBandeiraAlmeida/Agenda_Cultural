// Arquivo: event-details.js

// Para que esta página conheça os eventos, precisamos ter o mesmo array aqui.
// Em um projeto real, isso viria de um banco de dados ou API.
const todosEventos = [
  {
    id: 1,
    dia: "15",
    mes: "SET",
    titulo: "Show na Praça",
    local: "Praça da Matriz, Recife/PE",
    horario: "19:00",
    imagem: "img/show-praca.jpg",
    descricao:
      'Venha curtir uma noite agradável com muita música ao vivo na Praça da Matriz! A banda local "Os Viajantes do Som" apresentará um repertório variado, com clássicos do rock nacional e da MPB.',
  },
  {
    id: 2,
    dia: "18",
    mes: "SET",
    titulo: "Feira de Artesanato Local",
    local: "Parque Central, São Paulo/SP",
    horario: "09:00 - 17:00",
    imagem: "img/feira.jpg",
    descricao:
      "Descubra o talento dos artesãos locais e encontre peças únicas para você e para presentear. Haverá também comidas típicas e música ao vivo.",
  },
  {
    id: 3,
    dia: "22",
    mes: "SET",
    titulo: "Cinema ao Ar Livre",
    local: "Anfiteatro da Universidade, Salvador/BA",
    horario: "20:00",
    imagem: "img/cinema.jpg",
    descricao:
      "Traga sua cadeira e cobertor para uma sessão de cinema sob as estrelas. O filme exibido será um clássico nacional escolhido por votação popular.",
  },
  {
    id: 3,
    dia: "22",
    mes: "SET",
    titulo: "Cinema ao Ar Livre",
    local: "Anfiteatro da Universidade",
    horario: "20:00",
    cidade: "Salvador",
    estado: "BA",
  },
  {
    id: 4,
    dia: "28",
    mes: "SET",
    titulo: "Maratona de Corridas",
    local: "Orla da cidade",
    horario: "08:00",
    cidade: "Rio de Janeiro",
    estado: "RJ",
  },
];

// Esta função é executada quando a página termina de carregar
document.addEventListener("DOMContentLoaded", () => {
  // 1. Pega os parâmetros da URL
  const params = new URLSearchParams(window.location.search);
  const eventoId = params.get("id"); // Pega o valor do parâmetro 'id'

  // 2. Encontra o evento no nosso array com base no ID
  // O '==' é usado aqui porque o id da URL vem como texto (string)
  const evento = todosEventos.find((e) => e.id == eventoId);

  // 3. Se o evento for encontrado, preenche a página
  if (evento) {
    // Altera o título da aba do navegador
    document.title = evento.titulo;

    // Pega os elementos do HTML e preenche com os dados do evento
    document.getElementById("evento-imagem").src = evento.imagem;
    document.getElementById("evento-imagem").alt = evento.titulo;
    document.getElementById("evento-titulo").textContent = evento.titulo;
    document.getElementById(
      "evento-data"
    ).textContent = `Data: ${evento.dia} de ${evento.mes}`;
    document.getElementById(
      "evento-horario"
    ).textContent = `Horário: ${evento.horario}`;
    document.getElementById(
      "evento-local"
    ).textContent = `Local: ${evento.local}`;
    document.getElementById("evento-descricao").textContent = evento.descricao;
  } else {
    // Se nenhum evento com aquele ID for encontrado
    document.getElementById("evento-titulo").textContent =
      "Evento não encontrado";
    document.getElementById("evento-descricao").textContent =
      "O evento que você está procurando não existe ou foi removido.";
  }
});
