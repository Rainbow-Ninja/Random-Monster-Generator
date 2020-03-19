var bodyDiv = document.getElementById("body");
bodyDiv.style.height = `${Math.round(Math.random()*50+30)}vh`;
bodyDiv.style.width = `${Math.round(Math.random()*50+10)}vw`;
bodyDiv.style.backgroundColor = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;

//make 1-4eyes
var eyes = document.querySelector("#eyes");
for(let i = 0; i < Math.ceil(Math.random() * 4); i++){
    //make eyes
    var myEyes = document.createElement("div");
    myEyes.setAttribute("class", "eye");
    myEyes.setAttribute("id", `eye${i}`);
    myEyes.style.height = `${Math.round(Math.random()*70+20)}px`;
    myEyes.style.width = myEyes.style.height;//`${Math.round(Math.random()*40+10)}%`;
    eyes.appendChild(myEyes);
    //make iris
    var eyeForIris = document.querySelector(`#eye${i}`);
    var iris = document.createElement("div");
    iris.setAttribute("class", "iris");
    iris.setAttribute("id", `iris${i}`);
    iris.style.backgroundColor = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
    eyeForIris.appendChild(iris);
    //make pupil
    var irisForPupil = document.querySelector(`#iris${i}`);
    var pupil = document.createElement("div");
    pupil.setAttribute("class", "pupil");
    irisForPupil.appendChild(pupil);
}

var teeth = document.querySelector("#mouth");
for(let j = 0; j < Math.ceil(Math.random()*15); j++){
    var myTeeth = document.createElement("div");
    myTeeth.setAttribute("class", "tooth");
    myTeeth.setAttribute("id", `tooth${j}`);
    myTeeth.style.width = `${Math.round(Math.random()*40+10)}px`;
    myTeeth.style.height = `${Math.round(Math.random()*70+10)}px`;
    teeth.appendChild(myTeeth);
}

var refresh = document.getElementById("refresh").addEventListener("click", refreshPage);
// refresh.onClick=window.location.reload();

function refreshPage() {
    location.reload(true);
}