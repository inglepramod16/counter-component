
import generateUniqueId  from "../utils/generateUniqueId.js";

function Counter (){
  const  counterId = generateUniqueId({prefix: 'count'});
    let counterValue=0;
    const  Increase =()=>{
        counterValue ++
        console.log(counterValue)
        Update()
    }
       const Decrease =()=>{
        counterValue --
        console.log(counterValue)
        Update()
    }

    const Update=()=>{
       let newCounter=document.getElementById(`${counterId}-id`)
       newCounter.innerText=`Count : ${counterValue}`
       if(counterValue >0){
        newCounter.style.color='green'
       }
       else if(counterValue==0){
        newCounter.style.color='blue'
       }
       else if(counterValue< 0)
       {
        newCounter.style.color='red'
       }
    } 
  
    const render=()=>{
    const div = document.createElement('div');
    const heading= document.createElement('h2');
    const counter =document.createElement('p')
    const increase=document.createElement('button')
    const decrease =document.createElement('button')
    //adding id to counter to access and chge its values

    counter.id=`${counterId}-id`

    //adding innerText
    heading.innerText='Counter'
    counter.innerText=`Count : ${counterValue}`;
    increase.innerText='+';
    decrease.innerText='-';
    //adding listeners
    increase.onclick=Increase;
    decrease.onclick=Decrease;
    //appending child to div
    div.appendChild(heading);
    div.appendChild(counter);
    div.appendChild(increase); 
    div.appendChild(decrease)

    // adding classes
    heading.classList.add('heading');
    div.classList.add('container');
    counter.classList.add('counter')
    increase.classList.add('inc_btn','btn')
    decrease.classList.add('dec_btn','btn')

     // render method return  html container
    return div

    }

    this.mount=() =>{ // used to put html on DOM
     document.getElementById('root').appendChild(render())
    }



}
export default Counter;