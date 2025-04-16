// // Array com dados dos usuários
// const users = [
//     { id: 'dharlan', username: 'dharlan', avatar: 'https://i.pinimg.com/736x/4c/f0/70/4cf0704300ecfd78770c04f31beee098.jpg' },
//     { id: 'bia', username: 'bia', avatar: 'https://i.pinimg.com/736x/b4/e5/03/b4e5035f2b2a1d98e6d015e35125e9cb.jpg' },
//     { id: 'solunox', username: 'solunox', avatar: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7321883054187692038~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=be77a85e&x-expires=1744758000&x-signature=hdJ54YImsx9r2Y%2FuXQAiI5jXPVI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva' },
//     { id: 'gabyxd', username: 'gabyxd', avatar: 'https://gabyxd.vercel.app/img/rei-ayanami-evangelion.png' },
//     { id: 'dharlan', username: 'dharlan', avatar: 'https://i.pinimg.com/736x/4c/f0/70/4cf0704300ecfd78770c04f31beee098.jpg' },
//     { id: 'bia', username: 'bia', avatar: 'https://i.pinimg.com/736x/b4/e5/03/b4e5035f2b2a1d98e6d015e35125e9cb.jpg' },
//     { id: 'solunox', username: 'solunox', avatar: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7321883054187692038~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=be77a85e&x-expires=1744758000&x-signature=hdJ54YImsx9r2Y%2FuXQAiI5jXPVI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva' },
//     { id: 'gabyxd', username: 'gabyxd', avatar: 'https://gabyxd.vercel.app/img/rei-ayanami-evangelion.png' },
//     // Duplicando para criar efeito de carrossel infinito
//     { id: 'dharlan', username: 'dharlan', avatar: 'https://i.pinimg.com/736x/4c/f0/70/4cf0704300ecfd78770c04f31beee098.jpg' },
//     { id: 'bia', username: 'bia', avatar: 'https://i.pinimg.com/736x/b4/e5/03/b4e5035f2b2a1d98e6d015e35125e9cb.jpg' },
//     { id: 'solunox', username: 'solunox', avatar: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7321883054187692038~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=be77a85e&x-expires=1744758000&x-signature=hdJ54YImsx9r2Y%2FuXQAiI5jXPVI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva' },
//     { id: 'gabyxd', username: 'gabyxd', avatar: 'https://gabyxd.vercel.app/img/rei-ayanami-evangelion.png' },
//     { id: 'dharlan', username: 'dharlan', avatar: 'https://i.pinimg.com/736x/4c/f0/70/4cf0704300ecfd78770c04f31beee098.jpg' },
//     { id: 'bia', username: 'bia', avatar: 'https://i.pinimg.com/736x/b4/e5/03/b4e5035f2b2a1d98e6d015e35125e9cb.jpg' },
//     { id: 'solunox', username: 'solunox', avatar: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7321883054187692038~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=be77a85e&x-expires=1744758000&x-signature=hdJ54YImsx9r2Y%2FuXQAiI5jXPVI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva' },
//     { id: 'gabyxd', username: 'gabyxd', avatar: 'https://gabyxd.vercel.app/img/rei-ayanami-evangelion.png' },
// ];

// // Função para criar cartões de usuário
// function createUserCards() {
//     const carousel = document.getElementById('userCarousel');
    
//     users.forEach(user => {
//         // Criar um elemento anchor (link) como container do card
//         const userLink = document.createElement('a');
//         userLink.href = `/${user.id}`; // Define o link para o perfil do usuário
//         userLink.style.textDecoration = 'none'; // Remove a sublinhado do link
        
//         // Criar o card do usuário dentro do link
//         const userCard = document.createElement('div');
//         userCard.className = 'user-card';
        
//         userCard.innerHTML = `
//             <div class="avatar">
//                 <img src="${user.avatar}" alt="${user.username}">
//             </div>
//             <p class="username">${user.username}</p>
//             <p class="user-path">/${user.id}</p>
//         `;
        
//         // Adiciona o card ao link
//         userLink.appendChild(userCard);
        
//         // Adiciona o link ao carrossel
//         carousel.appendChild(userLink);
//     });
// }

// // Inicializa o carrossel quando a página carrega
// document.addEventListener('DOMContentLoaded', createUserCards);

// Array com dados dos usuários
const users = [
    { 
        id: 'dharlan', 
        username: 'dharlan', 
        avatar: 'https://i.pinimg.com/736x/4c/f0/70/4cf0704300ecfd78770c04f31beee098.jpg',
        profileUrl: 'https://dharlan-bio.vercel.app/' 
    },
    { 
        id: 'bia', 
        username: 'bia', 
        avatar: 'https://i.pinimg.com/736x/b4/e5/03/b4e5035f2b2a1d98e6d015e35125e9cb.jpg',
        profileUrl: 'https://bia-bio.vercel.app/' 
    },
    { 
        id: 'solunox', 
        username: 'solunox', 
        avatar: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7321883054187692038~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=be77a85e&x-expires=1744758000&x-signature=hdJ54YImsx9r2Y%2FuXQAiI5jXPVI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva',
        profileUrl: 'https://solunox.vercel.app/' 
    },
    { 
        id: 'gabyxd', 
        username: 'gabyxd', 
        avatar: 'https://gabyxd.vercel.app/img/rei-ayanami-evangelion.png',
        profileUrl: 'https://gabyxd.vercel.app/' 
    },
    // Duplicando para criar efeito de carrossel infinito
    { 
        id: 'dharlan', 
        username: 'dharlan', 
        avatar: 'https://i.pinimg.com/736x/4c/f0/70/4cf0704300ecfd78770c04f31beee098.jpg',
        profileUrl: 'https://dharlan-bio.vercel.app/' 
    },
    { 
        id: 'bia', 
        username: 'bia', 
        avatar: 'https://i.pinimg.com/736x/b4/e5/03/b4e5035f2b2a1d98e6d015e35125e9cb.jpg',
        profileUrl: 'https://bia-bio.vercel.app/' 
    },
    { 
        id: 'solunox', 
        username: 'solunox', 
        avatar: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7321883054187692038~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=be77a85e&x-expires=1744758000&x-signature=hdJ54YImsx9r2Y%2FuXQAiI5jXPVI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva',
        profileUrl: 'https://solunox.vercel.app/' 
    },
    { 
        id: 'gabyxd', 
        username: 'gabyxd', 
        avatar: 'https://gabyxd.vercel.app/img/rei-ayanami-evangelion.png',
        profileUrl: 'https://gabyxd.vercel.app/' 
    },
    // Duplicando para criar efeito de carrossel infinito
    { 
        id: 'dharlan', 
        username: 'dharlan', 
        avatar: 'https://i.pinimg.com/736x/4c/f0/70/4cf0704300ecfd78770c04f31beee098.jpg',
        profileUrl: 'https://dharlan-bio.vercel.app/' 
    },
    { 
        id: 'bia', 
        username: 'bia', 
        avatar: 'https://i.pinimg.com/736x/b4/e5/03/b4e5035f2b2a1d98e6d015e35125e9cb.jpg',
        profileUrl: 'https://bia-bio.vercel.app/' 
    },
    { 
        id: 'solunox', 
        username: 'solunox', 
        avatar: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7321883054187692038~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=be77a85e&x-expires=1744758000&x-signature=hdJ54YImsx9r2Y%2FuXQAiI5jXPVI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva',
        profileUrl: 'https://solunox.vercel.app/' 
    },
    { 
        id: 'gabyxd', 
        username: 'gabyxd', 
        avatar: 'https://gabyxd.vercel.app/img/rei-ayanami-evangelion.png',
        profileUrl: 'https://gabyxd.vercel.app/' 
    },
    { 
        id: 'dharlan', 
        username: 'dharlan', 
        avatar: 'https://i.pinimg.com/736x/4c/f0/70/4cf0704300ecfd78770c04f31beee098.jpg',
        profileUrl: 'https://dharlan-bio.vercel.app/' 
    },
    { 
        id: 'bia', 
        username: 'bia', 
        avatar: 'https://i.pinimg.com/736x/b4/e5/03/b4e5035f2b2a1d98e6d015e35125e9cb.jpg',
        profileUrl: 'https://bia-bio.vercel.app/' 
    },
    { 
        id: 'solunox', 
        username: 'solunox', 
        avatar: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7321883054187692038~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=be77a85e&x-expires=1744758000&x-signature=hdJ54YImsx9r2Y%2FuXQAiI5jXPVI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva',
        profileUrl: 'https://solunox.vercel.app/' 
    },
    { 
        id: 'gabyxd', 
        username: 'gabyxd', 
        avatar: 'https://gabyxd.vercel.app/img/rei-ayanami-evangelion.png',
        profileUrl: 'https://gabyxd.vercel.app/' 
    },
];

// Função para criar cartões de usuário
function createUserCards() {
    const carousel = document.getElementById('userCarousel');
    
    users.forEach(user => {
        // Criar um elemento anchor (link) como container do card
        const userLink = document.createElement('a');
        userLink.href = user.profileUrl; // Usa a URL personalizada definida para cada usuário
        userLink.target = "_blank"; // Abre em uma nova aba (opcional)
        userLink.style.textDecoration = 'none'; // Remove o sublinhado do link
        
        // Criar o card do usuário dentro do link
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        
        userCard.innerHTML = `
            <div class="avatar">
                <img src="${user.avatar}" alt="${user.username}">
            </div>
            <p class="username">${user.username}</p>
            <p class="user-path">/${user.id}</p>
        `;
        
        // Adiciona o card ao link
        userLink.appendChild(userCard);
        
        // Adiciona o link ao carrossel
        carousel.appendChild(userLink);
    });
}

// Inicializa o carrossel quando a página carrega
document.addEventListener('DOMContentLoaded', createUserCards);