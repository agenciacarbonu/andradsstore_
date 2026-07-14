document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Abre e fecha o menu responsivo no celular
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Fecha o menu automaticamente se o usuário redimensionar a tela com ele aberto
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });

    console.log("Andrads Store script inicializado com sucesso!");
});
