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
/*
// alternar login e cadastro

btnAcessar = document.getElementById('btn-acessar');

function removeDiv(event){
    if (event.type === 'touchstart') event.preventDefault();
    
    const screen = document.getElementById('screen');
    const ativo = screen.classList.toggle('ativo');
}

btnAcessar.addEventListener('click', removeDiv,);
btnAcessar.addEventListener('touchstart', removeDiv);

//alternar criar para login

btnLogin = document.getElementById('btn-login')

function adicionaDiv(event){
    if (event.type === 'touchstart') event.preventDefault();

    const screenEntrar = document.getElementById('screen-entrar');
    const activo = screenEntrar.classList.toggle('activo')
}
    

btnLogin.addEventListener('click', adicionaDiv,);
btnLogin.addEventListener('touchstart', adicionaDiv);
*/

// manipulação de divs

function ManipulaConteudo(){

    const divUm = document.getElementById('screen')
    const divDois = document.getElementById('screen-entrar')

    if (document.getElementById('btn-acessar').click) {
        divUm.style.display = "none";
        divDois.style.display = "flex";
    } 
}


function retornarConteudo(){
    const divUm = document.getElementById('screen')
    const divDois = document.getElementById('screen-entrar')

    if (document.getElementById('btn-entrar').click){
        divUm.style.display = "flex";
        divDois.style.display = "none";
    }
}


