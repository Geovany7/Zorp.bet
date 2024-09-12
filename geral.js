

const anunciosReto = [
    {
      src: "sexOfPelotaReto.png",
      name: "sexOfPelotaReto",
      link: "../Sex of Pelotas/index.html",  
    },
    {
        src: "subnauticaReto.png",
        name: "subnauticaReto",
        link: "/subnautica/inicio.html",  
    },
    {
        src:"dimagratis.png",
        name: "dimagratis",
        link: "https://youtube.com/shorts/nquAJ0uMOtQ?si=kSq_PW-iZLPJhDIX"
    },
    {
        src:"megaHReto.png",
        name: "megaHReto",
        link: "../Megahentao/megah.html"
    }
]

const anuncioLado =[
    {
        src: "/src/img/sexOfPelotaLado1.png",
        name: "sexOfPelotaLado1",
        link: "../Sex of Pelotas/index.html",   
    },
    {
        src: "/src/img/sexOfPelotaLado2.png",
        name: "sexOfPelotaLado2",
        link: "../Sex of Pelotas/index.html",  
    },
    {
        src: "/src/img/subnauticaLado1.png",
        name: "subnauticaLado1",
        link: "/subnautica/inicio.html",  
    }
    ,
    {
        src: "/src/img/subnauticaLado2.png",
        name: "subnauticaLado2",
        link: "/subnautica/inicio.html",  
    },
    {
        src: "/src/img/megaHLado1.png",
        name: "megaHLado1",
        link: "../Megahentao/megah.html",  
    },
    {
        src: "/src/img/megaHLado2.png",
        name: "megaHLado1",
        link: "../Megahentao/megah.html",  
    }
]



for (let randomizador = 0; randomizador < anuncioLado.length; randomizador++) {

    const aleatorioLado = Math.floor(Math.random() * (anuncioLado.length));
    const salvar = anuncioLado[aleatorioLado];
    anuncioLado[aleatorioLado] = anuncioLado[randomizador];
    anuncioLado[randomizador] = salvar;
}
console.log(anuncioLado)
let aleatorioReto = Math.floor(Math.random() * anunciosReto.length)

const corpo = document.getElementById("corpo");
const imgLado = document.querySelectorAll(".imagemLado")
let qualAleatorioReto = 0;
imgLado.forEach((lado)=>{
    lado.setAttribute("src", `${anuncioLado[qualAleatorioReto].src}`)
    lado.setAttribute("alt", anuncioLado[qualAleatorioReto].name)
    let sex = lado.parentNode
    sex.setAttribute("href", anuncioLado[qualAleatorioReto].link)
    
    qualAleatorioReto++
})

console.log(anunciosReto[aleatorioReto])
corpo.innerHTML += `
<footer>
        <a href="${anunciosReto[aleatorioReto].link}" target="_blank">
            <img class="anuncioBaixo" src="/src/img/${anunciosReto[aleatorioReto].src}" alt="${anunciosReto[aleatorioReto].name}">
        </a>

        <div id="sobreNos">
            <h2>Sobre Nos</h2>
            <div id="sobre">
                <img src="/src/img/max.png" alt="max">
                <p><b class="markOrange">Max</b> sempre foi um cara de visão. Após anos como professor e proprietário de uma empresa de sucesso,
                    ele decidiu mudar de direção. A rotina estava estável, mas algo faltava. Foi então que, com uma
                    pitada de coragem e um grande salto de fé, <b class="markOrange">Max</b> largou tudo para seguir seu verdadeiro sonho: criar
                    um site de apostas.

                    Agora, ele vive em um lugar que muitos só poderiam sonhar, a paradisíaca <b class="markOrange">Ilha Chupa-Chupa</b>. Lá, ele
                    mistura a tranquilidade da ilha com a adrenalina do mundo das apostas. <b class="markOrange">Max</b> encontrou um equilíbrio
                    perfeito entre a liberdade de uma vida simples e a emoção do seu negócio digital.

                    Seu site é mais do que um projeto; é o reflexo de uma jornada de transformação e ousadia. Ele está
                    construindo algo único, assim como sua própria vida.</p>
            </div>
        </div>
    </footer>

<div id="cadastor">
        <div id="parteCadar">
            <img src="/src/img/Super_Sam_Canon.jpg" id="imgSuperSam" alt="Super Sam">
            <div id="informacaoUsuario">
                <h2 class="titleCadastor"><b class="markOrange">Z</b>orp.bet</h2>
                <h2 class="subtitleCadasto"> Cadastre-se na zorp</h2>
                <input type="text" placeholder="Endereço de email">
                <input type="password" placeholder="Senha">
                <input type="number" placeholder="CPF">
                <hr>
                <p class="termosText">Ao se inscrever você concorda com os <a href="">Termos de Serviço</a></p>
                <button type="button" class="buttonConfirm">Comece já!</button>
                <p class="jaTem">já tem uma conta? <b class="markOrange cadastraLogan">Entrar</b></p>

                <img src="/src/img/eR.png" class="closerX" alt="x">
            </div>

        </div>
        <div class="fundo"></div>
    </div>

    <div id="logan">

        <div id="informacaoUsuarioLogin">
            <h2 class="titleCadastor"><b class="markOrange">Z</b>orp.bet</h2>
            <h2 class="subtitleCadasto"> Logan na zorp</h2>
            <input type="text" placeholder="Endereço de email ou CPF">
            <input type="password" placeholder="Senha">
            <hr>
            <p class="termosText">Ao se inscrever você concorda com os <a href="">Termos de Serviço</a></p>
            <button type="button" class="buttonConfirm">Entrar!</button>
            <p class="jaTem">Não tem uma conta? <b class="markOrange cadastraLogan">Cadastre-se</b></p>

            <img src="/src/img/eR.png" class="closerX" alt="x">
        </div>


        <div class="fundo"></div>
    </div>`





const botaoFechar = document.querySelectorAll('.closerX');
const cadastor = document.getElementById("cadas");
const login = document.getElementById("log");
const partecadastor = document.getElementById('cadastor');
const partelogin = document.getElementById("logan");
const fundo = document.querySelectorAll('.fundo');
const buttonConfirm = document.querySelectorAll(".buttonConfirm");
const cadastraLogan = document.querySelectorAll(".cadastraLogan");

function closeCadastor() {
    partecadastor.style.display = 'none';
}

function closeLogin() {
    partelogin.style.display = 'none';
}
function openCadastor() {
    partecadastor.style.display = 'flex';
}
function openLogin() {
    partelogin.style.display = 'flex';
}

botaoFechar.forEach((fecha) => {
    fecha.addEventListener('click', closeCadastor);
    fecha.addEventListener('click', closeLogin);
})
cadastor.addEventListener("click", openCadastor);
login.addEventListener("click", openLogin);
fundo.forEach((fecha) => {
    fecha.addEventListener('click', closeCadastor);
    fecha.addEventListener('click', closeLogin);
})
buttonConfirm.forEach((butot) => {
    butot.addEventListener("click", closeCadastor);
    butot.addEventListener('click', closeLogin);
})

cadastraLogan.forEach((cadlog) => {
    if(cadlog.innerHTML == "Cadastre-se"){
        cadlog.addEventListener("click", openCadastor);
        cadlog.addEventListener("click", closeLogin);
    } else if(cadlog.innerHTML == "Entrar"){
        cadlog.addEventListener("click", openLogin);
        cadlog.addEventListener("click", closeCadastor);
    }
    
})

const gameOpen = document.getElementById('jogoApi');
const gamesDiv = document.getElementById('gamesDiv');
let game = 0;
function openGame(){
    if(game == 0){
        gameOpen.style.background= '#E37436';
        gamesDiv.style.display = "grid";
        game++
    } else if(game == 1){
        gameOpen.style.background= 'transparent';
        gamesDiv.style.display = "none";
        game--
    }
}
gameOpen.addEventListener("click", openGame)
