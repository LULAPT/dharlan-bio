// Script corrigido para garantir que o header volte à posição centralizada
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelector('.nav-links');
    const gunIcon = document.querySelector('.gun-icon');
    const container = document.querySelector('.container');
    
    // Capturar as posições e dimensões originais
    let originalLeft = 0;
    let originalWidth = 0;
    let originalMarginLeft = 0;
    let originalMarginRight = 0;
    
    // Função para capturar as posições originais após o carregamento completo
    function captureOriginalPositions() {
      const headerRect = header.getBoundingClientRect();
      originalLeft = headerRect.left;
      originalWidth = header.offsetWidth;
      originalMarginLeft = window.getComputedStyle(header).marginLeft;
      originalMarginRight = window.getComputedStyle(header).marginRight;
      
      // Adicionar atributos data para armazenar os valores originais
      header.dataset.originalWidth = originalWidth;
      header.dataset.originalLeft = originalLeft;
      header.dataset.originalMargin = '0 30px'; // Conforme seu CSS original
    }
    
    // Capturar posições assim que possível
    captureOriginalPositions();
    
    // E também após o carregamento completo da página para garantir medidas corretas
    window.addEventListener('load', captureOriginalPositions);
    
    // Adicionar novos estilos ao header para a transição
    const style = document.createElement('style');
    style.textContent = `
      header {
        transition: all 0.3s ease-out;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 1000;
        transform-origin: left center;
      }
      
      header.minimized {
        width: 60px !important; 
        height: 60px !important;
        border-radius: 50% !important;
        overflow: hidden;
        margin: 0 !important;
        position: fixed;
        top: 20px;
        left: 20px;
        padding: 10px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(0);
        background-color: #111111f0 !important;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5) !important;
      }
      
      header.minimized .logo,
      header.minimized .nav-links {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        pointer-events: none;
      }
      
      header.minimized .gun-icon {
        margin: 0 !important;
        position: relative !important;
        display: block !important;
        opacity: 1 !important;
        z-index: 1001;
        height: 35px !important;
        transition: all 0.3s ease-out;
      }
      
      header.centered {
        position: fixed;
        margin: 0 30px !important;
        width: 78rem !important;
        transform: translateX(0) !important;
        left: auto !important;
      }
    `;
    document.head.appendChild(style);
    
    // Função para verificar a posição do scroll e aplicar as mudanças
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const triggerHeight = 100; // Altura em pixels para iniciar a transformação
      
      if (scrollPosition > triggerHeight) {
        header.classList.add('minimized');
        header.classList.remove('centered');
        logo.style.opacity = '0';
        navLinks.style.opacity = '0';
        
        // Garantir que o ícone permaneça visível
        if (gunIcon) {
          gunIcon.style.opacity = '1';
          gunIcon.style.position = 'relative';
          gunIcon.style.zIndex = '1001';
        }
        
        // Definir posição fixa no canto esquerdo
        header.style.left = '20px';
        header.style.transform = 'translateX(0)';
      } else {
        // Calcula a proporção da transição
        const ratio = Math.min(scrollPosition / triggerHeight, 1);
        
        if (ratio > 0) {
          // Calcular a largura da transição
          const width = parseFloat(header.dataset.originalWidth || 78) - (ratio * (parseFloat(header.dataset.originalWidth || 78) - 60));
          
          // Aplicar transformações
          header.style.width = `${width}px`;
          logo.style.opacity = `${1 - ratio}`;
          navLinks.style.opacity = `${1 - ratio}`;
          
          // Mover para a esquerda gradualmente
          const moveDistance = (originalLeft - 20);
          header.style.transform = `translateX(-${moveDistance * ratio}px)`;
          header.style.borderRadius = `${ratio * 50}px`;
          
          // Garantir que o ícone permaneça visível durante a transição
          if (gunIcon) {
            gunIcon.style.opacity = '1';
            gunIcon.style.marginRight = `${10 - ratio * 10}px`;
          }
        } else {
          // Voltar ao estado original centralizado
          header.classList.remove('minimized');
          header.classList.add('centered');
          
          // Restaurar as dimensões e posição originais
          header.style.width = '78rem';
          header.style.left = '';
          header.style.margin = '0 30px';
          header.style.position = 'fixed';
          header.style.transform = 'translateX(0)';
          header.style.borderRadius = '';
          
          logo.style.opacity = '1';
          navLinks.style.opacity = '1';
          
          if (gunIcon) {
            gunIcon.style.marginRight = '10px';
            gunIcon.style.position = '';
            gunIcon.style.zIndex = '';
          }
        }
      }
    });
    
    // Ajuste inicial
    if (window.scrollY > 0) {
      window.dispatchEvent(new Event('scroll'));
    }
  });