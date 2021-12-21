let btnMenu = document.getElementsByClassName('menu-logo')[0].addEventListener('click',exibirMenu)
let menu = document.getElementsByClassName('menu-fechado')[0]

function exibirMenu(){
    if(menu.classList.contains('menu-fechado')){
        menu.classList.remove('menu-fechado')
        menu.classList.add('menu-aberto')
        document.getElementsByClassName('menu-logo')[0].setAttribute('src','./menu-fechar-branco.png')
        
    }else{
        menu.classList.remove('menu-aberto')
        menu.classList.add('menu-fechado')
        document.getElementsByClassName('menu-logo')[0].setAttribute('src','./menu-branco.png')
    }
}

//selecao de destino e interação com background

let btnAmostrasDestino1 = document.getElementsByClassName('lista-item')[0].addEventListener('click',exibirAmostra1)
let nomeCidade = document.getElementsByClassName('cidade')[0]
let nomePais = document.getElementsByClassName('pais')[0]

function exibirAmostra1(){
    document.body.style.background= "url('Nepal-Swayambhunath-png-wallpaper.jpg') center";
    document.body.style.backgroundSize="cover" ;
    nomeCidade.innerText="Swayambhunath"
    nomePais.innerText="Nepal"
}

let btnAmostrasDestino2 = document.getElementsByClassName('lista-item')[1].addEventListener('click',exibirAmostra2)
function exibirAmostra2(){
    document.body.style.background="url('taiwan-asia-taipe-fullhd.jpg') ";
    document.body.style.backgroundSize="cover" ;
    nomeCidade.innerText="Taipé"
    nomePais.innerText="Taiwan"
}

let btnAmostrasDestino3 = document.getElementsByClassName('lista-item')[2].addEventListener('click',exibirAmostra3)
function exibirAmostra3(){
    document.body.style.background="url('brasil-salvador-praia-porto-wallpaper-hd.jpg') right";
    document.body.style.backgroundSize="cover" ;
     nomeCidade.innerText="Salvador"
    nomePais.innerText="Brasil "

}

let btnAmostrasDestino4 = document.getElementsByClassName('lista-item')[3].addEventListener('click',exibirAmostra4)
function exibirAmostra4(){
    document.body.style.background="url('tokyo-japao-wallpaper-fullhd-viagem.jpg') center";
    document.body.style.backgroundSize="cover" ;
     nomeCidade.innerText="Tokyo"
    nomePais.innerText="Japão "
}


let btnAmostrasDestino5 = document.getElementsByClassName('lista-item')[4].addEventListener('click',exibirAmostra5)
function exibirAmostra5(){
    document.body.style.background="url('eua-california-geek-wallpaper-google.jpg')  no-repeat" ;
    document.body.style.backgroundSize="cover" ;
     nomeCidade.innerText="California"
     nomePais.innerText="Estados Unidos"

}







//Background aleatorio ao carregar a pagina
let backgroundInicial = [exibirAmostra1,exibirAmostra2,exibirAmostra3,exibirAmostra4,exibirAmostra5]
let i = Math.floor(Math.random()*backgroundInicial.length)
backgroundInicial[i]()