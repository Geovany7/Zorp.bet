import "../geral.js";

const buttonsLoto = document.querySelectorAll('.buttonLoto')
const telePremio = document.getElementById("oQueVocêGanhou")

buttonsLoto.forEach((buttonLoto) => {
    buttonLoto.addEventListener('click', fillButton);
    buttonLoto.style.background = "rgb(191, 141, 182)";
})

let storageNumberLotoSelect = [];

let l = 0;

function fillButton(e) {

    if (l < 15 && e.target.style.background == "rgb(191, 141, 182)") {
        e.target.style.background = 'rgb(156, 76, 140)';
        e.target.style.color = 'black';
        storageNumberLotoSelect.push(parseInt(e.target.innerHTML));
        l++;
        console.log('aumetando ' + l)
        console.log(storageNumberLotoSelect)
    } else if (e.target.style.background == 'rgb(156, 76, 140)') {
        e.target.style.background = "rgb(191, 141, 182)";
        e.target.style.color = 'white';
        let index = storageNumberLotoSelect.indexOf(parseInt(e.target.innerHTML));
        storageNumberLotoSelect.splice(index, 1);
        l--;
        console.log('diminuindo ' + l);
        console.log(storageNumberLotoSelect);
    }

}

document.getElementById('betLoto').addEventListener('click', bet)
let numbersRight = 0
function bet() {
    if (storageNumberLotoSelect.length == 15) {
        let randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        for (let i = 0; i < randomNumbers.length; i++) {
            const random = Math.floor(Math.random() * randomNumbers.length)
            const save = randomNumbers[random]
            randomNumbers[random] = randomNumbers[i]
            randomNumbers[i] = save
        }

        
        for (let m = 0; m < storageNumberLotoSelect.length; m++) {
            for (let i = 0; i < storageNumberLotoSelect.length; i++) {
                if (storageNumberLotoSelect[m] == randomNumbers[i]) {
                    numbersRight++

                }else{

                }
            }
        }
        console.log(numbersRight)
        switch (numbersRight) {
            case 15: // se ordemRoleta for 15
                document.getElementById("msgGanhador").innerHTML ="Parabens Você ganhou R$ 1.305.589,30"// faz um alerta aparece na tela
                break; // quebra o caso
            case 14: // se ordemRoleta for 14
                document.getElementById("msgGanhador").innerHTML ="Parabens Você ganhou R$ 1.115,95";// faz um alerta aparece na tela
                break; // quebra o caso
            case 13: // se ordemRoleta for 13
                document.getElementById("msgGanhador").innerHTML ="Parabens Você ganhou R$ 30,00";// faz um alerta aparece na tela
                break; // quebra o caso
            case 12: // se ordemRoleta for 12
                document.getElementById("msgGanhador").innerHTML ="Parabens Você ganhou R$ 12,00";// faz um alerta aparece na tela
                break; // quebra o caso
            case 11: // se ordemRoleta for 11
                document.getElementById("msgGanhador").innerHTML ="Parabens Você ganhou R$ 6,00";// faz um alerta aparece na tela
                break; // quebra o caso
            default: // padrão se não for nenhum 
                document.getElementById("msgGanhador").innerHTML ="Você perdeu noob";// faz um alerta aparece na tela
                break; // quebra o caso
        }
        telePremio.style.display = "flex"
        numbersRight = 0
    }

}


telePremio.addEventListener("click", ()=>{
    telePremio.style.display = 'none';
})