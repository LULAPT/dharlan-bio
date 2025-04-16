// Adicione este JavaScript ao seu arquivo JS existente ou crie um novo arquivo

document.addEventListener('DOMContentLoaded', function() {
    // Simulação de funcionalidade de reprodução
    const playBtn = document.querySelector('.play-btn');
    const timeDisplay = document.querySelector('.time-display');
    let playing = false;
    let timer = null;
    let seconds = 0;
    
    playBtn.addEventListener('click', function() {
        if (playing) {
            playing = false;
            playBtn.textContent = '▶';
            clearInterval(timer);
        } else {
            playing = true;
            playBtn.textContent = '⏸';
            timer = setInterval(function() {
                seconds++;
                const min = Math.floor(seconds / 60);
                const sec = seconds % 60;
                timeDisplay.textContent = `${min}:${sec < 10 ? '0' + sec : sec}`;
            }, 1000);
        }
    });
    
    // Hover effect para os cards de feature
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Hover effects para as small features
    const smallFeatures = document.querySelectorAll('.small-feature');
    
    smallFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});