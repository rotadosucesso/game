/**
 * Container reutilizável com moldura multicolorida 3D e fundo de madeira.
 * @param {HTMLElement|string} [content=''] - Conteúdo HTML ou elemento DOM para colocar dentro do card.
 * @returns {HTMLElement}
 */
export function ColorfulFrameCard(content = '') {
    const card = document.createElement('div');
    card.className = 'colorful-frame-card';

    const inner = document.createElement('div');
    inner.className = 'colorful-frame-card-inner';

    if (typeof content === 'string') {
        inner.innerHTML = content;
    } else if (content instanceof HTMLElement) {
        inner.appendChild(content);
    }

    card.appendChild(inner);
    return card;
}
