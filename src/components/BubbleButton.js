/**
 * Botão estilizado em efeito Bolha 3D (Bubble/Jelly).
 * 
 * @param {Object} options - Configurações do botão.
 * @param {string} [options.text=''] - Texto impresso no botão.
 * @param {string} [options.icon=''] - Caminho da imagem/SVG do ícone (ex: 'assets/icone-trofeu.svg').
 * @param {string} [options.color='green'] - Tema de cor: 'green', 'blue', 'purple', 'pink'.
 * @param {string} [options.width=''] - Largura CSS customizada (ex: '100%', '160px').
 * @param {string} [options.height=''] - Altura CSS customizada (ex: '120px', '70px').
 * @param {HTMLElement|string} [options.customContent=null] - Elemento HTML extra (ex: barra de progresso).
 * @param {Function} [options.onClick=null] - Função callback disparada ao clicar.
 * @returns {HTMLButtonElement}
 */
export function BubbleButton({
    text = '',
    icon = '',
    color = 'green',
    width = '',
    height = '',
    customContent = null,
    onClick = null
} = {}) {
    const button = document.createElement('button');
    button.className = `bubble-btn bubble-btn-${color}`;

    // Aplica dimensões customizadas se fornecidas
    if (width) button.style.width = width;
    if (height) button.style.height = height;

    // Brilho reflexivo no topo da bolha (efeito plástico/jelly)
    const gloss = document.createElement('div');
    gloss.className = 'bubble-btn-gloss';
    button.appendChild(gloss);

    // Container de conteúdo interno
    const contentContainer = document.createElement('div');
    contentContainer.className = 'bubble-btn-content';

    // Ícone (se houver)
    if (icon) {
        const img = document.createElement('img');
        img.src = icon;
        img.alt = text || 'Ícone do botão';
        img.className = 'bubble-btn-icon';
        contentContainer.appendChild(img);
    }

    // Texto (se houver)
    if (text) {
        const span = document.createElement('span');
        span.className = 'bubble-btn-text';
        span.textContent = text;
        contentContainer.appendChild(span);
    }

    // Conteúdo HTML Customizado (ex: a barra de progresso do botão inferior)
    if (customContent) {
        if (typeof customContent === 'string') {
            const div = document.createElement('div');
            div.innerHTML = customContent;
            contentContainer.appendChild(div);
        } else if (customContent instanceof HTMLElement) {
            contentContainer.appendChild(customContent);
        }
    }

    button.appendChild(contentContainer);

    // Evento de Clique
    if (typeof onClick === 'function') {
        button.addEventListener('click', onClick);
    }

    return button;
}
