function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

// Função principal para redirecionar para o WhatsApp com uma mensagem específica
function redirectToWhatsApp(option) {
    let message = "";

    switch(option) {
        case 'orçamento':
            message = "OLÁ, GOSTARIA DE SOLICITAR UM ORÇAMENTO!";
            break;
        case 'conhecer':
            message = "OLÁ, GOSTARIA DE CONHECER MAIS SOBRE O SISTEMA!";
            break;
        case 'visita':
            message = "OLÁ, GOSTARIA DE SOLICITAR UMA VISITA DE UM REPRESENTANTE!";
            break;
    }

    const phoneNumber = "6699247321"; // Insira o número do WhatsApp com o código do país
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}

// Função específica para o botão "Contrate já!"
function redirectToWhatsAppTEF() {
    const phoneNumber = '6699247321'; // Substitua pelo número da sua empresa no formato internacional
    const message = 'Olá, gostaria de saber mais sobre o TEF!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappUrl;
}

// Função específica para o ícone do WhatsApp
function redirectToWhatsAppSystem() {
    const phoneNumber = '6699247321'; // Substitua pelo número da sua empresa no formato internacional
    const message = 'OLÁ, GOSTARIA DE SABER MAIS SOBRE O SISTEMA ERGONTECH';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappUrl;
}
