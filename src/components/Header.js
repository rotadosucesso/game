export function Header() {
    const header = document.createElement('header');
    header.className = 'header-container';

    header.innerHTML = `
        <div class="header-content">
            <!-- Botão Menu (Esquerda) -->
            <button class="header-btn" id="btn-menu" aria-label="Abrir Menu">
                <img src="assets/icone-menu.svg" alt="Menu" class="header-icon" />
            </button>

            <!-- Título 3D -->
            <h1 class="header-title">
                <span class="title-text">ROTA DO SUCESSO</span>
            </h1>

            <!-- Botão Perfil (Direita) -->
            <button class="header-btn" id="btn-profile" aria-label="Abrir Perfil">
                <img src="assets/icone-perfil.svg" alt="Perfil" class="header-icon" />
            </button>
        </div>

        <!-- Efeito Dripping (Calda escorrendo na parte inferior) -->
        <div class="header-drip-container">
            <svg class="drip-svg" viewBox="0 0 500 60" preserveAspectRatio="none">
                <path d="M0,0 
                         L500,0 
                         L500,20 
                         C470,20 460,45 440,45 
                         C420,45 410,15 380,15 
                         C350,15 340,55 310,55 
                         C280,55 270,25 240,25 
                         C210,25 200,50 170,50 
                         C140,50 130,18 100,18 
                         C70,18 60,40 30,40 
                         C15,40 5,22 0,20 Z" 
                      fill="#FFD1E8"/>
            </svg>
        </div>
    `;

    return header;
}
