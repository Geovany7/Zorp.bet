import '../geral.js';

const botaoGira = document.getElementById('giraOsNumeros');
const imagemParaMudar = ["src/img/BOBESPONJAGRANDE.png", "src/img/BOLSONARO.png", "src/img/china.png", "src/img/felipeNeto.png", "src/img/fogo 24.png", "src/img/gokuB.png", "src/img/vaca.png", "src/img/vasco.png", "src/img/z.png"];
let lugarCN = document.getElementById('lugarDoCacaNiquel')
const telePremio = document.getElementById("oQueVocêGanhou")
let aleatorioPosicio = [[], [], []]
for (let m = 0; m < 3; m++) {
    for (let i = 0; i < 3; i++) {
        aleatorioPosicio[i].push(Math.floor(Math.random() * (imagemParaMudar.length)))
    }
}


for (let randomizador = 0; randomizador < 3; randomizador++) {
    const aleatorio = `<ul class="listaDaOrdem">
            <li class="oneLine"><img src="${imagemParaMudar[aleatorioPosicio[randomizador][0]]}" alt="imagemNaRoleta"></li>
            <li class="twoLine"><img src="${imagemParaMudar[aleatorioPosicio[randomizador][1]]}" alt="imagemNaRoleta"></li>
            <li class="threeLine"><img src="${imagemParaMudar[aleatorioPosicio[randomizador][2]]}" alt="imagemNaRoleta"></li>
        </ul>`
    if (randomizador == 0) {
        lugarCN.innerHTML = aleatorio
    } else {
        lugarCN.innerHTML += aleatorio
    }
}

let p = 0


function gira() {
    let giraGira = setInterval(() => {
        botaoGira.removeEventListener('click', gira)
        botaoGira.style.cursor = 'default'
        for (let i = 0; i < 3; i++) {
            if (i == 0 && p >= 30) { } else if (i == 1 && p >= 40) { } else {
                aleatorioPosicio[i][2] = aleatorioPosicio[i][1]
                aleatorioPosicio[i][1] = aleatorioPosicio[i][0]
                aleatorioPosicio[i][0] = Math.floor(Math.random() * (imagemParaMudar.length - 1))
            }
        }

        lugarCN.innerHTML = `<ul class="listaDaOrdem">
            <li class="oneLine"><img src="${imagemParaMudar[aleatorioPosicio[0][0]]}" alt="imagemNaRoleta"></li>
            <li class="twoLine"><img src="${imagemParaMudar[aleatorioPosicio[0][1]]}" alt="imagemNaRoleta"></li>
            <li class="threeLine"><img src="${imagemParaMudar[aleatorioPosicio[0][2]]}" alt="imagemNaRoleta"></li>
        </ul>
        <ul class="listaDaOrdem">
            <li class="oneLine"><img src="${imagemParaMudar[aleatorioPosicio[1][0]]}" alt="imagemNaRoleta"></li>
            <li class="twoLine"><img src="${imagemParaMudar[aleatorioPosicio[1][1]]}" alt="imagemNaRoleta"></li>
            <li class="threeLine"><img src="${imagemParaMudar[aleatorioPosicio[1][2]]}" alt="imagemNaRoleta"></li>
        </ul>
        <ul class="listaDaOrdem">
            <li class="oneLine"><img src="${imagemParaMudar[aleatorioPosicio[2][0]]}" alt="imagemNaRoleta"></li>
            <li class="twoLine"><img src="${imagemParaMudar[aleatorioPosicio[2][1]]}" alt="imagemNaRoleta"></li>
            <li class="threeLine"><img src="${imagemParaMudar[aleatorioPosicio[2][2]]}" alt="imagemNaRoleta"></li>
        </ul>
        
        `
        p++
        if (p == 50) {
            clearInterval(giraGira)
            botaoGira.addEventListener('click', gira)
            p = 0
            botaoGira.style.cursor = 'pointer'
            
            if (imagemParaMudar[aleatorioPosicio[0][1]] == imagemParaMudar[aleatorioPosicio[1][1]] && imagemParaMudar[aleatorioPosicio[1][1]] == imagemParaMudar[aleatorioPosicio[2][1]]) {
                switch (imagemParaMudar[aleatorioPosicio[1][1]]) {
                    case "src/img/z.png":
                        document.getElementById("msgGanhador").innerHTML = '<h2>Você recebeu 30000, por ter tira três Zorp</h2>'
                 
                        break;
                    case "src/img/BOLSONARO.png":
                        document.getElementById("msgGanhador").innerHTML = '<h2>Você recebeu 10000, por ter tira três Bolsonaro</h2>'
             
                        break;
                    case "src/img/vaca.png":
                        document.getElementById("msgGanhador").innerHTML = '<h2>Você recebeu 5000, por ter tira três Vaca</h2>'
                       
                        break;
                    case "src/img/BOBESPONJAGRANDE.png":
                        document.getElementById("msgGanhador").innerHTML = '<h2>Você recebeu 4000, por ter tira três Bob</h2>'
                  
                        break;
                    case "src/img/fogo 24.png":
                        document.getElementById("msgGanhador").innerHTML = '<h2>Você recebeu 3000, por ter tira três Fogo</h2>'
                  
                        break;
                    case "src/img/china.png":
                        document.getElementById("msgGanhador").innerHTML = '<h2>Você recebeu 2000, por ter tira três Chineses</h2>'
                  
                        break;
                    case "src/img/gokuB.png":
                       document.getElementById("msgGanhador").innerHTML ='<h2>Você recebeu 500, por ter tira três Goku Careca</h2>'
                  
                        break;
                    case "src/img/vasco.png":
                        document.getElementById("msgGanhador").innerHTML = '<h2>Você recebeu 500, por ter tira três Vasco</h2>'
                   
                        break;
                    case "src/img/felipeNeto.png":
                        document.getElementById("msgGanhador").innerHTML ='<h2>Você recebeu 500, por ter tira três Petistas</h2>'
                   
                        break;
                    default:
                        document.getElementById("msgGanhador").innerHTML = '<h2>Você perdeu</h2>'
                        
                        console.log(imagemParaMudar[aleatorioPosicio[0][1]])
                        break;
                }

                telePremio.style.display = "flex";
            } else if ((imagemParaMudar[aleatorioPosicio[0][1]] == "src/img/BOLSONARO.png" && imagemParaMudar[aleatorioPosicio[1][1]] == "src/img/BOLSONARO.png" && imagemParaMudar[aleatorioPosicio[1][1]] != imagemParaMudar[aleatorioPosicio[2][1]]) || (imagemParaMudar[aleatorioPosicio[0][1]] == "src/img/BOLSONARO.png" && imagemParaMudar[aleatorioPosicio[2][1]] == "src/img/BOLSONARO.png" && imagemParaMudar[aleatorioPosicio[0][1]] != imagemParaMudar[aleatorioPosicio[1][1]])
                || (imagemParaMudar[aleatorioPosicio[2][1]] == "src/img/BOLSONARO.png" && imagemParaMudar[aleatorioPosicio[1][1]] == "src/img/BOLSONARO.png" && imagemParaMudar[aleatorioPosicio[1][1]] != imagemParaMudar[aleatorioPosicio[0][1]])) {
                document.getElementById("msgGanhador").innerHTML = '<h2>Você recebeu 1000, por ter tira Dois B</h2>'
                telePremio.style.display = "flex";

            } else {
                if (imagemParaMudar[aleatorioPosicio[0][1]] == "src/img/BOLSONARO.png" || imagemParaMudar[aleatorioPosicio[1][1]] == "src/img/BOLSONARO.png" || imagemParaMudar[aleatorioPosicio[2][1]] == "src/img/BOLSONARO.png") {
                    document.getElementById("msgGanhador").innerHTML = '<h2>Você recebeu 500, por ter tira um Bolsonaro</h2>'
                    telePremio.style.display = "flex";
                } else {
                    document.getElementById("msgGanhador").innerHTML = '<h2>Você perdeu</h2>'
                    telePremio.style.display = "flex";
                }
            }


        }
    }, 100)

}
botaoGira.addEventListener('click', gira);

telePremio.addEventListener("click", ()=>{
    telePremio.style.display = 'none';
})

