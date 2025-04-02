// Função para criar a lockscreen
function criarLockscreen() {
  // Criar elemento da lockscreen
  const lockscreen = document.createElement('div');
  lockscreen.id = 'lockscreen';
  lockscreen.classList.add('lockscreen');
  
  // Aplicar propriedades para otimização de performance
  lockscreen.style.willChange = 'opacity, transform';
  lockscreen.style.backfaceVisibility = 'hidden';
  lockscreen.style.transform = 'translateZ(0)'; // Força aceleração de hardware
  
  // Criar conteúdo interno da lockscreen
  const lockContent = document.createElement('div');
  lockContent.classList.add('lock-content');
  lockContent.style.willChange = 'transform, opacity';
  
  // Texto para clicar com transição suave
  const clickText = document.createElement('div');
  clickText.classList.add('click-text');
  clickText.innerHTML = '[ click to unlock ]';
  clickText.style.willChange = 'opacity, transform';
  
  // Adicionar animação de pulso suave ao texto
  let pulseAnimation;
  function animatePulseText() {
      let scale = 1;
      let growing = false;
      
      pulseAnimation = requestAnimationFrame(function pulse() {
          if (growing) {
              scale += 0.001;
              if (scale >= 1.05) growing = false;
          } else {
              scale -= 0.001;
              if (scale <= 0.95) growing = true;
          }
          
          clickText.style.transform = `scale(${scale})`;
          pulseAnimation = requestAnimationFrame(pulse);
      });
  }
  
  animatePulseText();
  
  // Montar estrutura (agora sem o avatar)
  lockContent.appendChild(clickText);
  lockscreen.appendChild(lockContent);
  
  // Adicionar ao body antes de qualquer outro conteúdo
  document.body.insertBefore(lockscreen, document.body.firstChild);
  
  // Esconder o conteúdo principal
  const container = document.getElementById('container');
  if (container) {
    container.style.opacity = '0';
    container.style.visibility = 'hidden';
    container.style.transition = 'opacity 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000), visibility 0s linear 0.8s';
    container.style.willChange = 'opacity';
  }
  
  // Garantir que os elementos para animar estejam inicialmente ocultos
  const elementosParaAnimar = document.querySelectorAll('.elemento-para-animar');
  elementosParaAnimar.forEach(elemento => {
    elemento.style.opacity = '0';
    elemento.style.transform = 'translateY(20px)';
    elemento.style.willChange = 'opacity, transform';
    // Garantir que não haja animação automática
    elemento.classList.remove('animate-fade-in');
  });
  
  // Evento de clique para desbloquear
  let desbloqueado = false; // Flag para evitar múltiplas execuções
  let animacaoDesbloqueio = null;
  
  lockscreen.addEventListener('click', () => {
    if (desbloqueado) return; // Se já foi desbloqueado, não faz nada
    desbloqueado = true; // Marca como desbloqueado
    
    // Parar a animação de pulso
    cancelAnimationFrame(pulseAnimation);

    // Animar a saída da lockscreen com requestAnimationFrame
    let progress = 0;
    const duration = 500; // duração em ms
    const startTime = performance.now();
    
    // Função para easing (cubic-bezier)
    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }
    
    function animateUnlock(timestamp) {
      const elapsed = timestamp - startTime;
      progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      
      lockscreen.style.opacity = `${1 - eased}`;
      lockscreen.style.transform = `scale(${1 + (eased * 0.1)})`;
      
      if (progress < 1) {
        animacaoDesbloqueio = requestAnimationFrame(animateUnlock);
      } else {
        // Mostrar o conteúdo principal com fade
        if (container) {
          container.style.visibility = 'visible';
          container.style.opacity = '1';
          container.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        
        // Executar animação dos elementos após desbloqueio
        setTimeout(() => {
          animarElementosSequencialmente();
        }, 200);
        
        // Remover lockscreen após completar a animação
        setTimeout(() => {
          lockscreen.remove();
        }, 800);
      }
    }
    
    animacaoDesbloqueio = requestAnimationFrame(animateUnlock);
  });
}

// Animar elementos com classe "elemento-para-animar" usando requestAnimationFrame
function animarElementosSequencialmente() {
  const elementos = document.querySelectorAll('.elemento-para-animar');
  
  elementos.forEach((elemento) => {
    // Verifica se há uma classe de delay (ex: .delay-10, .delay-20)
    const delayClass = Array.from(elemento.classList).find(cls => cls.startsWith('delay-'));
    let delay = 0;

    if (delayClass) {
      // Extrai o número da classe (ex: "delay-20" → 20 → 2000ms)
      const delayValue = parseInt(delayClass.replace('delay-', ''), 10);
      delay = delayValue * 100; // Converte para ms (ex: 20 → 200ms)
    } else if (elemento.dataset.delay) {
      // Se não houver classe, verifica o atributo data-delay (ex: data-delay="300")
      delay = parseInt(elemento.dataset.delay, 10);
    }

    setTimeout(() => {
      let startTime = null;
      
      function animateElement(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / 50, 1); // Duração fixa de 50ms
        
        const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);
        
        elemento.style.opacity = easedProgress.toString();
        elemento.style.transform = `translateY(${20 * (1 - easedProgress)}px)`;
        
        if (progress < 1) {
          requestAnimationFrame(animateElement);
        } else {
          setTimeout(() => {
            elemento.style.willChange = 'auto';
          }, 300);
        }
      }
      
      requestAnimationFrame(animateElement);
    }, delay);
  });
}

// Executar quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  criarLockscreen();
  
  // Pré-processamento para preparar animações futuras
  const elementosParaAnimar = document.querySelectorAll('.elemento-para-animar');
  if (elementosParaAnimar.length > 0) {
    // Informar ao navegador que esses elementos serão animados em breve
    elementosParaAnimar.forEach(elemento => {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Preparar elemento quando estiver próximo do viewport
              entry.target.style.willChange = 'opacity, transform';
              observer.unobserve(entry.target);
            }
          });
        });
        
        observer.observe(elemento);
      }
    });
  }
});