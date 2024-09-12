import infoAnimal from "./animais.js";



for (let i = 0; i < infoAnimal.length; i++) {
    document.getElementById('jogoDoBicho').innerHTML += `<div class="groupAnimal" name="${infoAnimal[i].name}">
            <p class="numberAnimal">${infoAnimal[i].groupNumber}</p>
            <img class="imageAnimal" src="${infoAnimal[i].image}" alt="${infoAnimal[i].name}">
            <p class="nameAnimal" >${infoAnimal[i].name}</p>
            <ul class="listNumber">
                <li>${infoAnimal[i].numbers[0]}</li>
                <li>${infoAnimal[i].numbers[1]}</li>
                <li>${infoAnimal[i].numbers[2]}</li>
                <li>${infoAnimal[i].numbers[3]}</li>
            </ul>
        </div>`
}
const animals = document.querySelectorAll('.groupAnimal')

animals.forEach((animal) => {
    animal.addEventListener('click', choseAnimal)


});
let animalSelect = []
let l = 0;
let save = '';
function choseAnimal(e) {
    if (l < 2 && e.target.style.background != 'red') {
        animalSelect.push(e.target.querySelector('.numberAnimal').innerHTML)
        l++
        e.target.style.background = 'red'
        save = e.target

        console.log(animalSelect)
    } else if (e.target.style.background == 'red' && (animalSelect[0] == e.target.querySelector('.numberAnimal').innerHTML || animalSelect[1] == e.target.querySelector('.numberAnimal').innerHTML)) {
        l--
        for (i = 0; i < 2; i++) {
            if (animalSelect[i] == e.target.querySelector('.numberAnimal').innerHTML) {
                animalSelect.slice(i, 1)
            }
        }

        e.target.style.background = '#8425CF'

    } else {

    }

}

document.getElementById('betAnimal').addEventListener('click', betAnimal)

function betAnimal() {
    if (animalSelect[0]) {
        let prize = [1, 2, 3, 4, 5]
        let prizeSlice = [1, 2, 3, 4, 5]
        for (let i = 0; i < 5; i++) {
            while (prize[i] < 1000 || prize[i] > 9999) {
                prize[i] = Math.floor(Math.random() * 10000)
                prizeSlice[i] = parseInt(prize[i].toString().slice(2))
            }
        }
        let namePrize = document.getElementsByName('prize')
        animalSelect[0] = parseInt(animalSelect[0]) - 1
        console.log(animalSelect[0])
        namePrize.forEach((prize) => {
            if (prize.checked) {
                namePrize = prize.value

            }

        })
        prizeSlice[0] = 10
        if (namePrize != 'premioTodos') {
            namePrize = parseInt(namePrize)

            for (let i = 0; i < 4; i++) {
                if (infoAnimal[animalSelect[0]].numbers[i] == prizeSlice[namePrize]) {
                    alert('Você ganhou')
                    i = 5
                } else if (i == 3) {
                    alert('Perdeu')
                }
            }
        } else if (namePrize == 'premioTodos') {
            let squal = false
            for (let m = 0; m < 5; m++) {
                for (let i = 0; i < 4; i++) {
                    if (infoAnimal[animalSelect[0]].numbers[i] == prizeSlice[m]) {
                        alert('Você ganhou')
                        squal = true
                        break
                    }
                }
                if (squal) {
                    break
                }
                else if (m == 4) {
                    alert('Perdeu')
                }
            }
        }
        console.log(prize[1], parseInt(prize[1].toString().slice(2)))
        save.style.background = '#8425CF'
        animalSelect.shift()
        l = 0;
    }
}