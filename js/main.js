// menu mobile
const menuButton = document.querySelector(".menu-hamburguer");
const mobileMenu = document.querySelector(".menu-principal");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        const isOpen = menuButton.classList.toggle("is-open");

        mobileMenu.classList.toggle("is-open", isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

    });


    // fecha o menu quando um link é clicado

    mobileMenu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("is-open");

            mobileMenu.classList.remove("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        });

    });

}

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle__icon");

const applyTheme = (theme) => {
    const isLight = theme === "light";
    document.body.classList.toggle("theme-light", isLight);

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(isLight));
    }

    if (themeIcon) {
        themeIcon.textContent = isLight ? "☀" : "☾";
    }

    localStorage.setItem("theme", theme);
};

if (themeToggle && themeIcon) {
    const savedTheme = localStorage.getItem("theme");
    const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = savedTheme || (prefersLightTheme ? "light" : "dark");

    applyTheme(initialTheme);

    themeToggle.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("theme-light") ? "dark" : "light";
        applyTheme(nextTheme);
    });
}

//esse é o bloco do terminal**
const mensagens = [
    "$ ib notes.md",
    "Nem toda ideia nasce pronta.",
    "Algumas precisam de café.",
    "Outras, de tereré.",
    "",

    "$ git log --oneline",
    "feat: transformar ideias em código",
    "fix: aprender com os próprios erros",
    "refactor: melhorar um pouco todos os dias",
    "",

    "$ npm run portfolio",
    "✔ carregando criatividade...",
    "✔ carregando dedicação...",
    "✔ carregando curiosidade...",
    "",

    "$ git push origin main",
    "Obrigado por visitar meu portfólio.",
    "$"
];

const boardText = document.getElementById("board-text");
let linhaAtual = 0; //digita a primeira linha
let letraAtual = 0; //posição da letra na linha
let textoCompleto = "";

function digitar() {

    const mensagem = mensagens[linhaAtual];
    if (letraAtual < mensagem.length) {
        textoCompleto += mensagem.charAt(letraAtual);
        boardText.textContent = textoCompleto;
        letraAtual++;
        setTimeout(digitar, 40 + Math.random() * 60);
    } else {
        textoCompleto += "\n";
        boardText.textContent = textoCompleto;
        linhaAtual++;
        letraAtual = 0;
        if (linhaAtual < mensagens.length) {
            setTimeout(digitar, 350);
        } else {
            setTimeout(reiniciarTerminal, 3000);   
        }
    } 
}

digitar();

function reiniciarTerminal() {
    textoCompleto = ""; //esvazia o terminal
    linhaAtual = 0; //volta pra primeira linha
    letraAtual = 0; //volta pra primeira letra da primeira linha
    boardText.textContent = ""; //limpa o <p> na tela
    digitar(); //começa tudo novamente
}

//ano dinâmico do footer**
document.getElementById("year").textContent = new Date().getFullYear();