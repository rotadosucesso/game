/**
 * Container reutilizável com borda estilo Bengala Doce (Candy Cane).
 * @param {HTMLElement|string} [content=''] - Conteúdo HTML ou elemento DOM para colocar dentro do card.
 * @returns {HTMLElement}
 */
export function CandyCaneCard(content = '') {
    const card = document.createElement('div');
    card.className = 'candy-cane-card';

    const inner = document.createElement('div');
    inner.className = 'candy-cane-card-inner';

    if (typeof content === 'string') {
        inner.innerHTML = content;
    } else if (content instanceof HTMLElement) {
        inner.appendChild(content);
    }

    card.appendChild(inner);
    return card;
}
