        // Texto que será exibido no <title>
        const titleText = "@sleepmix";
        let index = 0;

        // Função para animar o título
        function typeTitle() {
            if (index < titleText.length) {
                // Atualiza o <title> com uma letra adicional
                document.title += titleText[index];
                index++;
                // Define um intervalo para a próxima letra
                setTimeout(typeTitle, 300); // Ajuste o tempo (em milissegundos) para controlar a velocidade
            } else {
                // Reinicia a animação após um pequeno delay
                setTimeout(() => {
                    document.title = ""; // Limpa o título
                    index = 0; // Reinicia o índice
                    typeTitle(); // Começa novamente
                }, 2000); // Espera 2 segundos antes de reiniciar
            }
        }

        // Inicia a animação quando a página carrega
        typeTitle();

        // Primeiro, vamos adicionar o JavaScript para melhorar as animações dos badges
document.addEventListener('DOMContentLoaded', function() {
    // Selecionamos todos os badges
    const badges = document.querySelectorAll('.profileBadge');
    
    // Para cada badge, adicionamos os eventos de mouse
    badges.forEach(badge => {
      // Criamos um elemento tooltip personalizado
      const tooltip = document.createElement('div');
      tooltip.className = 'badge-tooltip';
      
      // Determinamos o texto baseado na classe do badge
      let tooltipText = '';
      if (badge.classList.contains('dev')) tooltipText = 'Developer';
      else if (badge.classList.contains('staff')) tooltipText = 'Staff';
      else if (badge.classList.contains('certif')) tooltipText = 'Certified';
      else if (badge.classList.contains('premium')) tooltipText = 'Premium';
      else if (badge.classList.contains('bughunter')) tooltipText = 'Bug Hunter';
      else if (badge.classList.contains('earlysupporter')) tooltipText = 'Early Supporter';
      else if (badge.classList.contains('fire')) tooltipText = 'ζξζ ι ζξζ';
      else if (badge.classList.contains('graphic')) tooltipText = 'Graphic Designer';
      else if (badge.classList.contains('imagehost')) tooltipText = 'Image Host';
      else if (badge.classList.contains('og')) tooltipText = 'OG';
      else if (badge.classList.contains('sweet')) tooltipText = 'Candy';
      else if (badge.classList.contains('patrick')) tooltipText = 'St. Patrick';
      
      tooltip.textContent = tooltipText;
      document.body.appendChild(tooltip);
      
      // Posicionamento e animação do tooltip no mouseover
      badge.addEventListener('mouseenter', function(e) {
        const badgeRect = badge.getBoundingClientRect();
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translate(-50%, 10px) scale(0.8)';
        
        // Posicionamos o tooltip acima do badge
        tooltip.style.left = `${badgeRect.left + badgeRect.width/2}px`;
        tooltip.style.top = `${badgeRect.top - 10}px`;
        
        // Aplicamos a animação
        requestAnimationFrame(() => {
          tooltip.style.opacity = '0.9';
          tooltip.style.transform = 'translate(-50%, -30px) scale(1)';
        });
      });
      
      // Ocultar e animar a saída do tooltip
      badge.addEventListener('mouseleave', function() {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translate(-50%, 10px) scale(0.8)';
        
        // Ocultamos completamente após a animação terminar
        setTimeout(() => {
          tooltip.style.visibility = 'hidden';
        }, 300);
      });
    });
  });