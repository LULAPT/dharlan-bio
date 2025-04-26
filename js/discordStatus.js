function atualizarPerfilDiscord() {
    // Determinar qual ID usar baseado no domínio
    const hostName = window.location.hostname;
    const userId = hostName.includes('dharlan-bio') ? 
        '682694935631233203' : // Seu ID para dharlan-bio.vercel.app
        '874517110678765618';  // ID da Bia para outros sites
    
    console.log("Atualizando status Discord para usuário:", userId);
    
    // URL atualizada para apontar para o endpoint específico do usuário
    fetch(`https://discorduserstatus.onrender.com/status/${userId}`)
    .then(response => response.json())
    .then(data => {
        // Atualizar a foto do perfil (se disponível)
        const avatarImg = document.querySelector('.avatarImage');
        if (avatarImg && data.avatarUrl) {
            avatarImg.src = data.avatarUrl;
            console.log('Avatar atualizado:', data.avatarUrl);
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
    })
    .catch(error => {
        console.error('Erro ao buscar status:', error);
    });
}

// Chamar a função imediatamente ao carregar
atualizarPerfilDiscord();

// Chamar a função periodicamente para manter atualizado
setInterval(atualizarPerfilDiscord, 5000); // 5sec