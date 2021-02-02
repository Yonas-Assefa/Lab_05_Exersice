//taking the DOM nodes 
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

//traversing the DOM element

let screenValue;
for(item of buttons){
    item.addEventListener('click',calcFunction)

}

//the calcFunction definition

function calcFunction(e){
    let buttonText = e.target.innerText;
    if(buttonText=='C'){
        screenValue='';
        screen.value =screenValue;
    }
    else if(buttonText=='='){
        screen.value=eval(screenValue);
    }
    else if(buttonText=='n!'){
        screenValue = screen.value;
        let temp=1;
        while(screenValue>0){
            temp = temp* screenValue;
            screenValue = screenValue-1;
        }

        screen.value = temp;

    }

    else if(buttonText=='sqrt'){
        screenValue = screen.value;
        screen.value =Math.sqrt(screenValue);

    }

    else if(buttonText=='log'){
        screenValue =screen.value;
        screen.value=Math.log(screenValue,10); 
    }

    else{
        screenValue+=buttonText;
        screen.value=screenValue;
    }
}


