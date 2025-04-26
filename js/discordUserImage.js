function atualizarPerfilDiscord() {
    // URL atualizada para apontar para o seu serviço no Render
    fetch('https://discorduserstatus.onrender.com/status')
    .then(response => response.json())
    .then(data => {
        // Atualizar a foto do perfil (se disponível)
        const avatarImg = document.querySelector('.avatarImage');
        if (avatarImg && data.avatarUrl) {
            // Adicionar parâmetro de tempo para evitar cache
            const avatarSrc = data.avatarUrl.includes('?') ? 
                data.avatarUrl + '&t=' + Date.now() : 
                data.avatarUrl + '?t=' + Date.now();
            
            avatarImg.src = avatarSrc;
            console.log('Avatar atualizado:', avatarSrc);
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
            console.log('Status atualizado para:', data.status);
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

// Forçar atualização completa quando o documento carrega
document.addEventListener('DOMContentLoaded', function() {
    // Limpar qualquer cache de imagem que possa existir
    const avatarImg = document.querySelector('.avatarImage');
    if (avatarImg) {
        avatarImg.src = '';
    }
    
    // Chamar a função para atualizar
    atualizarPerfilDiscord();
});

// Chamar a função periodicamente para manter atualizado
setInterval(atualizarPerfilDiscord, 5000); // 5sec

// Adicionar evento de clique manual para forçar atualização
const avatarImg = document.querySelector('.avatarImage');
if (avatarImg) {
    avatarImg.addEventListener('click', function() {
        console.log('Atualizando avatar manualmente...');
        atualizarPerfilDiscord();
    });
}