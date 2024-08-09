function toggleMenu() {
    alert('Menu clicked! Aqui você pode implementar a lógica de abrir um menu lateral ou dropdown.');
}

function redirectToWhatsApp() {
    const phoneNumber = '6699247321'; // Substitua pelo número da sua empresa no formato internacional
    const message = 'Olá, gostaria de saber mais sobre o TEF!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappUrl;
}

function redirectToWhatsAppSystem() {
    const phoneNumber = '6699247321'; // Substitua pelo número da sua empresa no formato internacional
    const message = 'OLÁ, GOSTARIA DE SABER MAIS SOBRE O SISTEMA ERGONTECH';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappUrl;
}