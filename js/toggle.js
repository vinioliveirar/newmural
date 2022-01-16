const button = document.getElementById('toggle') /* */

// Quando clicar no botao
button.addEventListener('click', () => {
    // ele verifica se está aberto ou fechado
    // se aberto ele fecha
    // se fechado ele abre
    if (button.getAttribute('estado') === 'aberto') {
        button.setAttribute('estado', 'fechado')
    } else if (button.getAttribute('estado') === 'fechado') {
        button.setAttribute('estado', 'aberto')
    }
})