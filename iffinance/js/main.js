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

    closeModal()


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

function openeditcard (event){
    
    const buttonEdit = event.target
    const pou = buttonEdit.closest (".pou")

    const Ticker = pou.querySelector('sectionp h1').innerText 
    const inputeditticker = document.querySelector('#editTicker')
    inputeditticker.value = Ticker

    const Bolsa = pou.querySelector('sectionp h2').innerText 
    const inputeditbolsa = document.querySelector('#editBolsa')
    inputeditbolsa.value = Bolsa 

    const Valor = pou.querySelector('sectionp h5').innerText 
    const inputeditvalor = document.querySelector('#editValor')
    inputeditvalor.value = Valor

    const Ativos = pou.querySelector('sectionp h4').innerText 
    const inputeditativos = document.querySelector('#editAtivos')
    inputeditativos.value = Ativos

    openModal ('#edit')

}