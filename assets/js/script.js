window.onload = function () {
  exibirTodasImagens();
};

import { images } from "./images.js";

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
