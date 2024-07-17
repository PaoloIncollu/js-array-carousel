
// creazione e riempimento array
const imgArray = [

    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
    

];

console.log(imgArray);

const myContainer = document.querySelector('.container'); // creata costante container

let i = 0;

// imposta funzione per andare avanti con le immagini
function avanti(){
    
    if (i < imgArray.length-1)
        
        i++;
    
    else 

        i=0;
        document.getElementById("image").src = imgArray[i];
    
      
}

// imposta funzione per andare indietro con le immagini

function indietro(){
    if (i == 0)
       i = imgArray.length-1
    else 
       i--;
    
    document.getElementById("image").src = imgArray[i];
}


// ciclo per stambare nel html le immagini prendendo gli url dall'array

for(let j = 0; j < imgArray.length; j ++){
    
    const newImage = document.createElement("img");
    newImage.src = `${imgArray[j]}`;
    document.getElementById('img-container').appendChild(newImage);
}
  

