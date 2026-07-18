document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- 1. Controle do Menu Mobile (Hambúrguer) ---
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // --- 2. Função para carregar a página dinamicamente ---
    async function loadPage(pageName) {
        try {
            // Busca o arquivo HTML parcial dentro da pasta 'paginas'
            const response = await fetch(`paginas/${pageName}.html`);
            
            if (!response.ok) {
                throw new Error('Página não encontrada');
            }

            const html = await response.text();
            
            // Injeta o conteúdo dinâmico na div central
            contentDiv.innerHTML = html;

            // Rola a página de volta para o topo de forma suave
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (error) {
            contentDiv.innerHTML = `
                <section style="padding: 100px 20px; text-align: center;">
                    <h2>Erro 404</h2>
                    <p>Desculpe, não conseguimos carregar essa seção.</p>
                </section>
            `;
            console.error(error);
        }
    }

    // --- 3. Controle de cliques nas guias do Menu ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão de atualizar a página

            // Remove a classe 'active' de todas as guias e coloca na que foi clicada
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Descobre qual página carregar pelo atributo 'data-page'
            const page = link.getAttribute('data-page');
            loadPage(page);

            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
            if (menuToggle && menuToggle.classList.contains('active')) {
                menuToggle.classList.remove('active');
}
        });
    });

    // --- 4. Carrega a página inicial por padrão ao abrir o site ---
    loadPage('inicio');
});
