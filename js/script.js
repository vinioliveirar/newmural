const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    // se existe a class 'active' ele remove
    // senão adiciona
    // if (nav.classList.contains('active')) {
    //     nav.classList.remove('active')
    // } else {
    //     nav.classList.add('active')
    // }
    const active = nav.classList.toggle('active');

    //const active = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){ 
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


btnAcessar = document.getElementById('btn-acessar');

function removeDiv(event){
    if (event.type === 'touchstart') event.preventDefault();{
        
    }
    
    const screen = document.getElementById('screen');
    
    const ativo = screen.classList.toggle('ativo');

    //const inputName = document.getElementById('nome')
    //inputName.parentNode.removeChild(inputName);
    
}

btnAcessar.addEventListener('click', removeDiv);
btnAcessar.addEventListener('touchstart', removeDiv);


