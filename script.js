let text ="JavaScript Quiz"
let i=0;
let speed=300;

function type(){
    if(i<text.length){
        document.querySelector("#head").textContent+=text.charAt(i);
        i++;
        setTimeout(type,speed);
    }
}
type();

const button=document.querySelector("#btn");
button.addEventListener("click", result);

const par=document.querySelector("#show");

const correctAnswer=document.querySelectorAll(".true");

function result(e) {
    e.preventDefault();
    
let points= 0;
if(document.querySelector("#flexRadioDefault11").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault22").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault33").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault44").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault55").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault66").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault77").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault88").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault99").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault100").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault111").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault122").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault133").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault144").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault155").checked){
    points++;
}
if(document.querySelector("#flexRadioDefault166").checked){
    points++;
}

text.display= 
Swal.fire({
    title: `Your score: ${points}`,
    width: 400,
    padding: '3em',
    color: '#370665',
    background: '#fff url(111.png)',
    backdrop: `
rgba(0,0,123,0.4)
url("https://sweetalert2.github.io/images/nyan-cat.gif")
left top
no-repeat
`
  })


correctAnswer.forEach(function(item){
    item.classList.add("green");
})
}
