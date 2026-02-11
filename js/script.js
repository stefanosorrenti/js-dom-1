
//SELZIONIAMO IL NODO
const lampIMG = document.querySelector('img');

const lampButton = document.getElementById('button-lamp')




//CREO L'EVENTO

lampButton.addEventListener('click', function(){
    
    console.log('cliccato');
    lampIMG.src = './img/yellow_lamp.png'
    lampButton.innerText = 'SPEGNI'
    
    
})