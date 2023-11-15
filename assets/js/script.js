window.onload = function () {
  exibirTodasImagens();
};

const PATH = "../../assets/img/";

var images = [
  {
    id: 1,
    type: "web",
    name: "Site da empresa Grupo Plantão",
    category: "web",
    link: "https://grupoplantao.srv.br/",
    url: PATH + "web-1.png",
  },
  {
    id: 2,
    type: "jogo",
    name: "Jogo da forca",
    category: "jogos",
    link: "https://igorios.github.io/jogo-da-memoria/",
    url: PATH + "jogo-1.png",
  },
  {
    id: 3,
    type: "web",
    name: "Site denuncia CRN5",
    category: "web",
    link: "https://denuncias.crn5.org.br/",
    url: PATH + "web-2.png",
  },
  {
    id: 4,
    type: "jogo",
    name: "Jogo da memoria",
    category: "jogos",
    link: "https://igorios.github.io/criptografia/",
    url: PATH + "jogo-2.png",
  },

  {
    id: 5,
    type: "pessoal",
    name: "Lista de tarefas",
    category: "pessoal",
    link: "https://igorios.github.io/lista-tarefas/",
    url: PATH + "pessoal-1.png",
  },
  {
    id: 6,
    type: "pessoal",
    name: "Site para publicar eventos",
    category: "pessoal",
    link: "https://eventos-igorios.000webhostapp.com/",
    url: PATH + "pessoal.png",
  },
];

const btnTodos = document.querySelector("#btn-todo");
const bntWeb = document.querySelector("#btn-web");
const btnJogo = document.querySelector("#btn-jogo");
const btnPessoal = document.querySelector("#btn-pessoal");

const divContent = document.querySelector("#content-portfolio");

function exibirTodasImagens() {
  const imagesCopy = [...images];

  divContent.innerHTML = "";

  imagesCopy.splice(0, 6).forEach((todasImages) => {
    divContent.innerHTML += `<a href="${todasImages.link}" target="_blank" class="col-md-4 box-img web">
                            <img src="${todasImages.url}" class="img-fluid" alt="${todasImages.name}">
                        </a>`;
  });
}
btnTodos.addEventListener("click", exibirTodasImagens);

btnPessoal.addEventListener("click", () => {
  const todosPessoal = images.filter((image) => image.type == "pessoal");

  divContent.innerHTML = "";

  if (todosPessoal.length > 0) {
    todosPessoal.forEach((pessoal) => {
      divContent.innerHTML += `<a href="${pessoal.link}" target="_blank" class="col-md-4 box-img web">
                <img src="${pessoal.url}" class="img-fluid" alt="${pessoal.name}">
            </a>`;
    });
  }
});

bntWeb.addEventListener("click", () => {
  const todosWeb = images.filter((image) => image.type == "web");

  divContent.innerHTML = "";

  if (todosWeb.length > 0) {
    todosWeb.forEach((web) => {
      divContent.innerHTML += `<a href="${web.link}" target="_blank" class="col-md-4 box-img web">
                <img src="${web.url}" class="img-fluid" alt="${web.name}">
            </a>`;
    });
  }
});

btnJogo.addEventListener("click", () => {
  const todosJogos = images.filter((image) => image.type == "jogo");

  divContent.innerHTML = "";

  if (todosJogos.length > 0) {
    todosJogos.forEach((jogos) => {
      divContent.innerHTML += `<a href="${jogos.link}" target="_blank" class="col-md-4 box-img web">
                <img src="${jogos.url}" class="img-fluid" alt="${jogos.name}">
            </a>`;
    });
  }
});
