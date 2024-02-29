 
const myGrid = document.querySelector('.myGrid');
const btn = document.querySelector('button')
const sel = document.querySelector('select')



console.log(btn);
alert(' Benvenuto ! per giocare premi gioca!');

btn.addEventListener('click', function(){

  reset();

  alert('scegli la difficoltà ');

  sel.addEventListener('click', function(){

    reset();


    if(sel.value==='facile') {

      for (let i = 1; i <= 100; i++) {

        const box = addInteractiveSquare(i);
    
        box.classList.add('d-flex','square','easy');
       
        myGrid.append(box);
        
     
      }
    
      
      
    } else if (sel.value==='medio') { 
  
      for (let i = 1; i <= 81; i++) {
        const box = addInteractiveSquare(i);
    
        box.classList.add('d-flex','square','middle');
        
        
        myGrid.append(box);
      }
     
        
    } else if (sel.value==='difficile') {
  
      for (let i = 1; i <= 49; i++) {
        const box = addInteractiveSquare(i);
    
        box.classList.add('d-flex', 'square', 'difficult');
        
        
        myGrid.append(box);
      }
  
  
    } 
      
  

  })
  


})

function addInteractiveSquare(num){

  const square= document.createElement('div');

  square._id= num;

  square.innerHTML= num;

  
  square.addEventListener('click', function(){


    this.classList.toggle('bg-primary');

    console.log(num);


  })
  return square;

  

}

function reset() {

  myGrid.innerHTML= '';
  
}