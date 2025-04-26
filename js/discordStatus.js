function atualizarPerfilDiscord() {
    // URL atualizada para apontar para o seu serviço no Render
    fetch('https://discorduserstatus.onrender.com/status')
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
        // Adicionar tratamento de erro mais visível para debugging
        const statusElement = document.querySelector('.status-debugging');
        if (statusElement) {
            statusElement.textContent = 'Erro ao conectar: ' + error.message;
            statusElement.style.color = 'red';
        }
    });
}

// Chamar a função imediatamente ao carregar
atualizarPerfilDiscord();

// Chamar a função periodicamente para manter atualizado
setInterval(atualizarPerfilDiscord, 5000); // 5sec
