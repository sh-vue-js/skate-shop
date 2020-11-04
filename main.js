var background_1 = document.getElementById("default").addEventListener('click', clickOne);

function clickOne(){
    document.querySelector(".aside").style.backgroundColor = '#0392BF';
    document.querySelector('button').style.backgroundColor = '#ED48BA';
}

var background_2 = document.getElementById("pink").addEventListener('click', clickTwo);

function clickTwo(){
    document.querySelector(".aside").style.backgroundColor = '#ED48BA';
    document.querySelector('button').style.borderColor = 'white';
    document.querySelector('button').style.backgroundColor = 'grey';
    document.querySelectorAll('value').style.backgroundColor = '#ED48BA'
    
}

let background_3 = document.getElementById('yellow').addEventListener('click', clickThree);

function clickThree(){
    document.querySelector(".aside").style.backgroundColor = '#FBEC06';
    document.querySelector('button').style.backgroundColor = '#ED48BA';
    
}

var background_4 = document.getElementById("last").addEventListener('click', clickFour);

function clickFour(){
    document.querySelector(".aside").style.backgroundColor = ' #B3D4E0';
    document.querySelector('button').style.backgroundColor = '#ED48BA';
    
}

function myFunction() {
  var x = document.querySelector('nav');
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}