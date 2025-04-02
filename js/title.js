        // Texto que será exibido no <title>
        const titleText = "@biaquista";
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