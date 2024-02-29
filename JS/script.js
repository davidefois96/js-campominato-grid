 
const myGrid = document.querySelector('.myGrid');

const btn = document.querySelector('button')



console.log(btn);

btn.addEventListener('click', function(){

  reset();

  for (let i = 1; i <= 100; i++) {
    const box = addInteractiveSquare(i);

    box.classList.add('d-flex');

    box.innerHTML= i;
    
    myGrid.append(box);
    
 
  }


})

function addInteractiveSquare(num){

  const square= document.createElement('div');

  square.className= 'square';

  square._id= num;

  
  square.addEventListener('click', function(){


    this.classList.toggle('bg-primary');

    console.log(num);


  })
  return square;

  

}

function reset() {

  myGrid.innerHTML= '';
  
}