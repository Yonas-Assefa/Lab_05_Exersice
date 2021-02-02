/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
let itemArray=document.getElementsByClassName('collection-item');






// Display the BOM Information on the innerHTML of the elements


//Location Information -href
itemArray[0].addEventListener('click',action1);
function action1(e){
    console.log(itemArray[0].firstElementChild.innerHTML=window.location.href);
}


//Location Information -protocol
itemArray[1].addEventListener('click',action2);
function action2(e){
    console.log(itemArray[1].firstElementChild.innerHTML=window.location.protocol);
}


//Location Information -host
itemArray[2].addEventListener('click',action3);
function action3(e){
    console.log(itemArray[2].firstElementChild.innerHTML=window.location.host);
}



//Location Information -port
itemArray[3].addEventListener('click',action4);
function action4(e){
    console.log(itemArray[3].firstElementChild.innerHTML=window.location.port);
}


//Location Information -hostname
itemArray[4].addEventListener('click',action5);
function action5(e){
    console.log(itemArray[4].firstElementChild.innerHTML=window.location.hostname);
}


//browser info-Appname
itemArray[5].addEventListener('click',action6);
function action6(e){
    console.log(itemArray[5].firstElementChild.innerHTML=window.navigator.appName);
}

//browser info-AppVersion
itemArray[6].addEventListener('click',action7);
function action7(e){
    console.log(itemArray[6].firstElementChild.innerHTML=window.navigator.appVersion);
}


//browser info-AppVersion
itemArray[7].addEventListener('click',action8);
function action8(e){
    console.log(itemArray[7].firstElementChild.innerHTML=window.navigator.platform);
}

//browser info-AppVersion
itemArray[8].addEventListener('click',action9);
function action9(e){
    console.log(itemArray[8].firstElementChild.innerHTML=window.navigator.language);
}

//browser info-AppVersion
itemArray[9].addEventListener('click',action10);
function action10(e){
    console.log(itemArray[9].firstElementChild.innerHTML=window.navigator.cookieEnabled);
}



