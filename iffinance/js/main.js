function openModal (){
        const modal = document.querySelector(".modal")
        modal.style.display = "flex"
}

function closeModal (){
        const modal = document.querySelector(".modal")
        modal.style.display = "none"
}

function cadastrarTicker(event){
    event.preventDefault() //para o efeito  padrao de envio de formulario 
    
    const Ticker = event.target.Ticker.value
    const Bolsa = event.target.Bolsa.value
    const Valor = event.target.Valor.value
    const Ativos = event.target.Ativos.value

    const total = Valor * Ativos

    const card = `

    <div class="pou">
        <sectionp>

            <p><b>${Ticker}</b></p>
            <p><b> ${Bolsa}</b></p>

        </sectionp>

            <h1 style="color: rgb(0, 151, 38);">R$ ${Valor} </h1>

        <sectionp>
            <p><b> ${Ativos} Ativos </b></p>
            <p><b> ${total}</b></p>
         </sectionp>

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