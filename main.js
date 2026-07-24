// ==========================================
// IMPORTAÇÕES DOS COMPONENTES
// ==========================================
import { Header } from './src/components/Header.js';
import { BubbleButton } from './src/components/BubbleButton.js';
import { CandyCaneCard } from './src/components/CandyCaneCard.js';
import { ColorfulFrameCard } from './src/components/ColorfulFrameCard.js';

// ==========================================
// SISTEMA DE CARREGAMENTO DE CSS
// ==========================================
// Como estamos usando JS puro, essa função garante que os estilos sejam carregados
function loadCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

// Carrega os estilos dos componentes
loadCSS('src/components/Header.css');
loadCSS('src/components/BubbleButton.css');
loadCSS('src/components/CandyCaneCard.css');
loadCSS('src/components/ColorfulFrameCard.css');

// ==========================================
// ESTADO E DADOS (Simulação temporária)
// ==========================================
const app = document.getElementById('app');
let isLoggedIn = false; // Controle de acesso

// SIMULAÇÃO DO BANDO DE DADOS (Substituiremos pelo Supabase depois)
const mockSupabase = {
    getTop3: async () => {
        // Simulando o tempo de resposta da internet
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    { nome_loja: 'Supermercado Silva', score: 4500 },
                    { nome_loja: 'Oficina Carro Bom', score: 3900 },
                    { nome_loja: 'Loja da Cláudia', score: 3200 }
                ]);
            }, 800);
        });
    }
};

// ==========================================
// NAVEGAÇÃO E REGRAS (ROUTER)
// ==========================================
function checarAcesso(acao) {
    if (!isLoggedIn) {
        alert("🔒 Você precisa fazer login ou se cadastrar para acessar essa área!");
        renderAuth(); // Redireciona para o login
    } else {
        acao(); // Executa o que o botão manda
    }
}

// Futuras telas (Por enquanto, apenas limpam a tela e mostram um aviso)
function renderAuth() { app.innerHTML = '<h2 style="text-align:center; margin-top: 50px;">Tela de Login (Auth.js) em construção...</h2>'; }
function renderRanking() { app.innerHTML = '<h2 style="text-align:center; margin-top: 50px;">Tela de Ranking em construção...</h2>'; }
function renderMissions() { app.innerHTML = '<h2 style="text-align:center; margin-top: 50px;">Tela de Missões em construção...</h2>'; }
function renderFeed() { app.innerHTML = '<h2 style="text-align:center; margin-top: 50px;">Tela de Feed em construção...</h2>'; }
function renderInfo() { app.innerHTML = '<h2 style="text-align:center; margin-top: 50px;">Tela de Info em construção...</h2>'; }

// ==========================================
// RENDERIZAÇÃO DA TELA INICIAL (HOME)
// ==========================================
async function renderHome() {
    app.innerHTML = ''; // Limpa a tela

    // 1. Injeta o Header
    const header = Header();
    // Botão de perfil redireciona para login
    header.querySelector('#btn-profile').addEventListener('click', renderAuth);
    // Botão de menu (fará algo no futuro)
    header.querySelector('#btn-menu').addEventListener('click', () => alert('Menu aberto'));
    app.appendChild(header);

    // 2. Container principal da Home (Adicionando estilos dinamicamente)
    const mainContent = document.createElement('main');
    mainContent.style.cssText = `
        max-width: 500px;
        margin: 0 auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-bottom: 40px;
    `;

    // 3. Grade de Botões Superiores
    const gridBotoes = document.createElement('div');
    gridBotoes.style.cssText = `
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    `;

    gridBotoes.appendChild(BubbleButton({
        text: 'RANKING', icon: 'assets/icone-trofeu.svg', color: 'green',
        onClick: () => checarAcesso(renderRanking)
    }));
    gridBotoes.appendChild(BubbleButton({
        text: 'MISSÕES', icon: 'assets/icone-prancheta.svg', color: 'blue',
        onClick: () => checarAcesso(renderMissions)
    }));
    gridBotoes.appendChild(BubbleButton({
        text: 'FEED', icon: 'assets/icone-chat.svg', color: 'purple',
        onClick: () => checarAcesso(renderFeed)
    }));
    gridBotoes.appendChild(BubbleButton({
        text: 'INFO', icon: 'assets/icone-interrogacao.svg', color: 'pink',
        onClick: () => checarAcesso(renderInfo)
    }));

    mainContent.appendChild(gridBotoes);

    // 4. Cartão do Prêmio (CandyCaneCard)
    const premioHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="flex: 1;">
                <h3 style="margin: 0; color: #FF0066; font-family: 'Fredoka', sans-serif; font-size: 1.1rem; text-shadow: 1px 1px 0 #FFF;">PRÊMIO FINAL: SITE PERSONALIZADO!</h3>
                <p style="margin: 4px 0 0 0; font-size: 0.8rem; color: #B30047; font-weight: bold;">PARA O 1º COLOCADO EM PONTUAÇÃO!</p>
            </div>
            <!-- Ícone de laptop placeholder (adicione o svg real depois) -->
            <div style="width: 70px; height: 50px; background: #EEE; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px;">💻</div>
        </div>
    `;
    mainContent.appendChild(CandyCaneCard(premioHTML));

    // 5. Cartão de Top 3 (ColorfulFrameCard) - Com estado de carregamento
    const top3HTML = `
        <h3 style="margin: 0 0 12px 0; color: #FFF; text-align: center; font-family: 'Fredoka', sans-serif; text-shadow: 2px 2px 0 #000;">TOP 3 COLOCADOS ATUAL</h3>
        <ul id="top3-list" style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; color: #FFF; font-weight: bold; font-family: sans-serif;">
            <li style="text-align: center; color: #FFF; opacity: 0.7;">Carregando ranking...</li>
        </ul>
    `;
    const top3Card = ColorfulFrameCard(top3HTML);
    mainContent.appendChild(top3Card);

    // 6. Botão de Progresso (Inativo)
    const progressoContent = `
        <div style="font-size: 14px; color: #FFF; margin-bottom: 6px; font-weight: bold;">
            15 / 20 MISSÕES CONCLUÍDAS
        </div>
        <div style="width: 90%; height: 16px; background: rgba(0,0,0,0.2); border-radius: 8px; overflow: hidden; border: 2px solid #5BD922;">
            <div style="width: 75%; height: 100%; background: #FFEA00; box-shadow: inset 0 2px 0 rgba(255,255,255,0.5);"></div>
        </div>
    `;
    const btnProgresso = BubbleButton({
        text: 'SEU PROGRESSO',
        color: 'green',
        height: '90px',
        customContent: progressoContent,
        onClick: null // Não faz nada ao clicar, como solicitado
    });
    // Removemos o efeito de clique para parecer apenas um painel
    btnProgresso.style.cursor = 'default';
    btnProgresso.style.pointerEvents = 'none'; 
    mainContent.appendChild(btnProgresso);

    // Injeta tudo na tela
    app.appendChild(mainContent);

    // ==========================================
    // BUSCA DE DADOS ASSÍNCRONA (A Mágica do Top 3)
    // ==========================================
    // Aqui é onde faremos a leitura da coluna 'score' do Supabase
    const top3Data = await mockSupabase.getTop3();
    const ulTop3 = document.getElementById('top3-list');
    ulTop3.innerHTML = ''; // Limpa o "Carregando..."

    const medalhas = ['🥇', '🥈', '🥉'];
    
    top3Data.forEach((usuario, index) => {
        const li = document.createElement('li');
        li.style.cssText = `
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            background: rgba(0,0,0,0.2);
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid rgba(255,255,255,0.1);
        `;
        li.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span>${index + 1}.</span>
                <span style="font-size: 1.2rem;">${medalhas[index]}</span>
                <span style="font-shadow: 1px 1px 0 #000;">${usuario.nome_loja}</span>
            </div>
            <span style="color: #FFEA00; text-shadow: 1px 1px 0 #000;">${usuario.score} pts.</span>
        `;
        ulTop3.appendChild(li);
    });
}

// ==========================================
// INICIALIZA O APLICATIVO
// ==========================================
renderHome();
