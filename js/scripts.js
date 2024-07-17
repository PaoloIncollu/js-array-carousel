
// creazione e riempimento array
const imgArray = [

    'file:///C:/Users/paolo/AppData/Local/Temp/ea6cc6d4-8a88-4df3-9fb5-ba84aa7d43a6_consegna.zip.3a6/consegna/img/01.webp',
    'file:///C:/Users/paolo/AppData/Local/Temp/a3b841d0-528a-4051-958e-5b00c6dfe0f6_consegna.zip.0f6/consegna/img/02.webp',
    'file:///C:/Users/paolo/AppData/Local/Temp/15d44351-6ef2-4b1c-a8f8-47ce845cd9c4_consegna.zip.9c4/consegna/img/03.webp',
    'file:///C:/Users/paolo/AppData/Local/Temp/1ab3c0ee-51a0-43ec-a7b0-7d23c4713ca0_consegna.zip.ca0/consegna/img/04.webp',
    'file:///C:/Users/paolo/AppData/Local/Temp/65381888-cdea-4b3d-90d5-5b655be21dc6_consegna.zip.dc6/consegna/img/05.webp'

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
  

