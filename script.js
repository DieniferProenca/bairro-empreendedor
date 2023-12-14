// Função para alternar a visibilidade do menu
function toggleMenu() {
    var menu = document.querySelector('.menu');
    // Verifica se o estilo de exibição atual do menu é 'none' ou está vazio
    // Se for, define o estilo de exibição como 'flex'; caso contrário, define como 'none'
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
}
