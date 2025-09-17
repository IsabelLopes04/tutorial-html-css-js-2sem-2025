function openModal (modalId){
        const modal = document.querySelector(modalId)
        modal.style.display = "flex"
}

function closeModal (modalId){
        const modal = document.querySelector(modalId)
        modal.style.display = "none"
}

function cadastrarTicker(event){
    event.preventDefault() //para o efeito  padrao de envio de formulario (inteerompe o fluxo do evento form, que é o efeito padrão para manipular a página)
    
    const Ticker = event.target.Ticker.value
    const Bolsa = event.target.Bolsa.value
    const Valor = event.target.Valor.value
    const Ativos = event.target.Ativos.value

    const total = Valor * Ativos
//a crase ` é template string 
    const card = ` 

        <div class="pou" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
              <sectionp>

              <p><b>${Ticker}</b></p>
              <p><b> ${Bolsa}</b></p>

             </sectionp>

                <h1 style="color: rgb(0, 151, 38);">R$ ${Valor} </h1>

             <sectionp>
                    <p><b> ${Ativos} Ativos </b></p>
                    <p><b> ${total}</b></p>
             </sectionp>
            <div class="buttons">

                    <button type="button" onclick="openeditcard(event)">Editar</button>
                    <button type="button" onclick="deleteCard(event)">Excluir</button>
            </div>
            <sectionn>
                <img src="img/grafico.png">
            </sectionn>

      </div>
    
    `
    const cards = document.querySelector("#cards")


    cards.innerHTML += card

    closeModal('#add')


    console.log(cards)
    
}

function showButtons (event){
//console.log(event.target) elemento que disparou o evento 
const pou = event.target
const buttons = event.target.querySelector(".buttons")
buttons.style.display = "flex"

}

function hideButtons (event){
//console.log(event.target) elemento que disparou o evento 
const pou = event.target
const buttons = event.target.querySelector(".buttons")
buttons.style.display = "none"

}

function deleteCard (event){
console.log (event.target)
const pou = event.target.closest(".pou")
pou.remove()

}

function OpenEditTicker(event){


    const buttonEdit = event.target
    const pou = buttonEdit.closest (".pou")

    const Ticker = pou.querySelector('.section1 h1').innerText 
    const inputeditticker = document.getElementById('editTicker')
    inputeditticker.value = Ticker

    const Bolsa = pou.querySelector('.section1 h2').innerText 
    const selectEditBolsa = document.getElementById('editBolsa')
    selectEditBolsa.value = Bolsa

    const Valor = pou.querySelector('section1 span ').innerText 
    const inputeditvalor = document.getElementById('editValor')
    inputeditvalor.value = Valor

    const Ativos = pou.querySelector('section2 main span').innerText 
    const inputeditativos = document.getElementById('editAtivos')
    inputeditativos.value = Ativos

    openModal ('#edit')

}