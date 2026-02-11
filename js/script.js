
//SELZIONIAMO IL NODO
const lampIMG = document.querySelector('img');

const lampButton = document.getElementById('button-lamp')

const buttonText = lampButton.innerText;




//CREO L'EVENTO
//quando lampButton (la nostra img) viene cliccata
lampButton.addEventListener('click', function(){
    
    //la src dell'immagine cambia
    lampIMG.src = './img/yellow_lamp.png'
    //e il testo del bottono diventa spegni
    lampButton.innerText = 'SPEGNI'
    
    
})



