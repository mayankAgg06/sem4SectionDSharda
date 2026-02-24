let counter = document.querySelector("#counter")
const increment = document.querySelector('#increment')
const decrement = document.querySelector('#decrement')
let currentCount=0;

increment.addEventListener('click',()=>{
    currentCount++;
    counter.innerHTML = currentCount
})

decrement.addEventListener('click',()=>{
    currentCount--;
    counter.innerHTML = currentCount
})

