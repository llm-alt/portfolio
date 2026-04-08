const formulario = document.querySelector("#meu-formulario");
const containerProjetos = document.querySelector(".projetos-container");

const meusProjetos = [
    {
        titulo: "Projeto 01 - Portfólio em HTML, CSS e JavaScript",
        descricao: "Este portfólio foi desenvolvido com HTML, CSS e JavaScript puro, com foco em estrutura, estilo e responsividade.",
        categoria: "Frontend",
        links: [
            {
                label: "Ver projeto",
                url: "https://llm-alt.github.io/portfolio/"
            },
            {
                label: "Ver repositório",
                url: "https://github.com/llm-alt/portfolio"
            }
        ]
    },
    {
        titulo: "Projeto 02 - Portfólio com React + Vite",
        descricao: "Portfólio desenvolvido em React com componentes reutilizáveis, navegação moderna e interface responsiva.",
        categoria: "React",
        links: [
            {
                label: "Ver projeto",
                url: "https://portfolio-react-dusky-five.vercel.app"
            },
            {
                label: "Ver repositório",
                url: "https://github.com/llm-alt/portfolio-react"
            }
        ]
    }
];

function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const msg = document.querySelector("#msg").value.trim();

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    formulario.reset();
}

function renderizarProjetos() {
    containerProjetos.innerHTML = "";

    meusProjetos.forEach((projeto) => {
        const linksHtml = projeto.links
            .map(
                (link) => `
                    <a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>
                `
            )
            .join("");

        const cardHTML = `
            <article class="card-projeto">
                <p class="eyebrow">${projeto.categoria}</p>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="card-links">
                    ${linksHtml}
                </div>
            </article>
        `;

        containerProjetos.innerHTML += cardHTML;
    });
}

formulario.addEventListener("submit", validarFormulario);
renderizarProjetos();
