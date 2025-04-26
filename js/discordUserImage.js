function atualizarPerfilDiscord(userId) {
    // Verificar e logar qual ID está sendo usado
    console.log("Atualizando perfil do usuário ID:", userId);
    
    // URL atualizada para apontar para o endpoint específico do usuário
    fetch(`https://discorduserstatus.onrender.com/status/${userId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Resposta da API não está ok. Status: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("Dados recebidos da API:", data);
        
        // Atualizar a foto do perfil (se disponível)
        const avatarImg = document.querySelector('.avatarImage');
        if (avatarImg && data.avatarUrl) {
            // Adicionar parâmetro de tempo para evitar cache
            const avatarSrc = data.avatarUrl.includes('?') ? 
                data.avatarUrl + '&t=' + Date.now() : 
                data.avatarUrl + '?t=' + Date.now();
            
            avatarImg.src = avatarSrc;
            console.log(`Avatar atualizado:`, avatarSrc);
        } else {
            console.error('Elemento .avatarImage não encontrado ou data.avatarUrl está vazio');
            console.log('Elementos disponíveis:', document.querySelectorAll('.avatarImage'));
        }
        
        // Atualizar o status
        const statusImg = document.querySelector('.discordStatus');
        if (statusImg) {
            // Usar o caminho correto da imagem baseado no status
            switch(data.status) {
                case 'online': statusImg.src = '/img/online.png'; break;
                case 'idle': statusImg.src = '/img/idle.png'; break;
                case 'dnd': statusImg.src = '/img/dnd.png'; break;
                default: statusImg.src = '/img/offline.png';
            }
            console.log(`Status atualizado para:`, data.status);
        } else {
            console.error('Elemento .discordStatus não encontrado no DOM');
        }
        
        // Se você quiser mostrar o nome de usuário também
        const usernameElement = document.querySelector('.username');
        if (usernameElement && data.username) {
            usernameElement.textContent = data.username;
        }
    })
    .catch(error => {
        console.error('Erro ao buscar status:', error);
        // Adicionar tratamento de erro mais visível para debugging
        const statusElement = document.querySelector('.status-debugging');
        if (statusElement) {
            statusElement.textContent = 'Erro ao conectar: ' + error.message;
            statusElement.style.color = 'red';
        }
    });
}

// Determinar qual usuário monitorar com base no domínio
function determinarUsuarioDominio() {
    const hostName = window.location.hostname;
    console.log("Hostname detectado:", hostName);
    
    // Se estamos no site dharlan-bio.vercel.app
    if (hostName.includes('dharlan-bio')) {
        console.log("Identificado como seu site - usando seu ID");
        return '682694935631233203'; // Seu ID
    }
    
    // Por padrão, retornar o ID da Bia
    console.log("Usando ID padrão (Bia)");
    return '874517110678765618';
}

// Tenta obter o ID a partir do atributo data ou do domínio
function obterIdUsuarioDiscord() {
    // Tentar pegar do atributo data
    const dataAttr = document.body.getAttribute('data-discord-user');
    if (dataAttr) {
        console.log("ID encontrado no atributo data:", dataAttr);
        return dataAttr;
    }
    
    // Se não encontrar no atributo, usar baseado no domínio
    return determinarUsuarioDominio();
}

// Inicialização quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM carregado, iniciando script de discord status");
    
    // Determinar qual ID usar
    const userId = obterIdUsuarioDiscord();
    console.log("ID do usuário Discord selecionado:", userId);
    
    // Limpar qualquer cache de imagem que possa existir
    const avatarImg = document.querySelector('.avatarImage');
    if (avatarImg) {
        avatarImg.src = '';
        console.log("Cache de avatar limpo");
    } else {
        console.warn("Elemento .avatarImage não encontrado!");
        console.log("Todos os elementos disponíveis:", document.body.innerHTML);
    }
    
    // Chamar a função para atualizar
    atualizarPerfilDiscord(userId);
    
    // Chamar a função periodicamente para manter atualizado
    setInterval(() => atualizarPerfilDiscord(userId), 5000); // 5sec
});

// Adicionar evento de clique manual para forçar atualização
window.addEventListener('load', function() {
    const avatarImg = document.querySelector('.avatarImage');
    if (avatarImg) {
        avatarImg.addEventListener('click', function() {
            console.log('Atualizando avatar manualmente...');
            const userId = obterIdUsuarioDiscord();
            atualizarPerfilDiscord(userId);
        });
        console.log("Evento de clique adicionado à imagem de avatar");
    } else {
        console.warn("Não foi possível adicionar evento de clique - elemento não encontrado");
    }
});

// Logar inicialização do script
console.log("Script de status Discord inicializado");