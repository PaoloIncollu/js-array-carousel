
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

const imgContainer = document.querySelector('.img-container');





// ciclo per stambare nel html le immagini prendendo gli url dall'array

for(let j = 0; j < imgArray.length; j ++){
    
    /*const newImage = document.createElement("img");
    newImage.src = `${imgArray[j]}`;
    newImage.classList= 'img';
    document.querySelector('.img-container').appendChild(newImage);*/
    if(j == 0){
        imgContainer.innerHTML+= `<img src="${imgArray[j]}" class=" active">`;
    }
    else{

        imgContainer.innerHTML+= `<img src="${imgArray[j]}" >`;

    }
}
  
const allImg = document.querySelectorAll('.img-container > img')
let activeImg = 0;

// imposta funzione per andare avanti con le immagini

    const nextButton = document.getElementById('btn-right');
    nextButton.addEventListener('click',
        function (){
        if (activeImg < (imgArray.length - 1)){  

        allImg[activeImg].classList.remove('active');

        activeImg++;

        allImg[activeImg].classList.add('active');
        
        }
        else{
            allImg[activeImg].classList.remove('active');

            activeImg= 0;

            allImg[activeImg].classList.add('active');
        }
    });
    
// imposta funzione per andare indietro con le immagini
    const prevButton = document.getElementById('btn-left');
    prevButton.addEventListener('click',
        function (){

    if (activeImg > 0){

        allImg[activeImg].classList.remove('active');

        activeImg--;


        allImg[activeImg].classList.add('active');
    }
       
    else{
        allImg[activeImg].classList.remove('active');

        activeImg= 4;

        allImg[activeImg].classList.add('active');
        }
    
}
)

