// alert("Wooohooo");
var n = Math.random();
n *= 6;
n = Math.floor(n);
n++;

var temp1 = document.querySelectorAll("img")[0];

var path = "./images/dice"+n+".png";


if(n==1)
    temp1.setAttribute("src",path);
else if(n==2)
    temp1.setAttribute("src",path);
else if(n==3)
    temp1.setAttribute("src",path);
else if(n==4)
    temp1.setAttribute("src",path);
else if(n==5)
    temp1.setAttribute("src",path);
else if(n==6)
    temp1.setAttribute("src",path);

var n2 = Math.random();
n2 *= 6;
n2 = Math.floor(n2);
n2++;

var temp = document.querySelectorAll("img")[1];

var path2 = "./images/dice"+n2+".png";

//temp = temp.querySelector("img");

if(n2==1)
    temp.setAttribute("src",path2);
else if(n2==2)
    temp.setAttribute("src",path2);
else if(n2==3)
    temp.setAttribute("src",path2);
else if(n2==4)
    temp.setAttribute("src",path2);
else if(n2==5)
    temp.setAttribute("src",path2);
else if(n2==6)
    temp.setAttribute("src",path2);

if(n>n2){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if(n2>n)
    document.querySelector("h1").innerHTML="Player 2 won";
else   
document.querySelector("h1").innerHTML="Draw";

var clickMe = document.getElementById("buttonItIs");
clickMe.onclick = function(){
    location.reload();
}