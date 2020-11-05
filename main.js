var background_1 = document.getElementById("default").addEventListener('click', clickOne);

function clickOne(){
    document.querySelector("body").style.backgroundColor = '#0392BF';
    document.querySelector('button').style.backgroundColor = '#ED48BA';
}

var background_2 = document.getElementById("pink").addEventListener('click', clickTwo);

function clickTwo(){
    document.querySelector("body").style.backgroundColor = '#ED48BA';
    document.querySelector('button').style.borderColor = 'white';
    document.querySelector('button').style.backgroundColor = 'grey';
    
}

let background_3 = document.getElementById('yellow').addEventListener('click', clickThree);

function clickThree(){
    document.querySelector("body").style.backgroundColor = '#FBEC06';
    document.querySelector("button").style.backgroundColor = '#ED48BA';
    
}

var background_4 = document.getElementById("last").addEventListener('click', clickFour);

function clickFour(){
    document.querySelector("body").style.backgroundColor = ' #B3D4E0';
    document.querySelector('button').style.backgroundColor = '#ED48BA';
    document.querySelectorAll(".grey").style.color = "white";
    
}
