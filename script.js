var btn = document.querySelector("button");
var screen = document.querySelectorAll(".screen");
var allElems = document.querySelectorAll(".elem_container");
var img = document.querySelectorAll("img");
var selected = "";
var play = document.querySelector("#playground");
var playImg = document.querySelector("#playground img");
var scoreval = document.querySelector(".screen #scoreval");
var score = 0;
var timeval = document.querySelector(".screen #timerval");
var time = 10;

btn.addEventListener("click", function () {
  screen[1].style.transform = "translateY(-100%)";
});

allElems.forEach(function (elem) {
  elem.addEventListener("click", function () {
    screen[2].style.transform = "translateY(-200%)";

    selected = elem.childNodes[3].getAttribute("src");

    setInterval(function () {
      makeImg();
      // catchImg()
      // console.log(makeImg)
    }, 2200);
    // timerval()
 runTimer()

  });
});


function makeImg() {
  var newImg = document.createElement("img");
  //  var obj = random()
  newImg.setAttribute("src", selected);
  // random()
  var x = Math.random() * 100;
  var y = Math.random() * 100;
  var rot = Math.random() * 360;
  newImg.style.left = x + "%";
  newImg.style.top = y + "%";
  newImg.style.rotate = rot + "deg";
  // return {x,y,rot}
  play.appendChild(newImg);

  catchImg();

  setTimeout(function () {
    play.removeChild(newImg);
  }, 2000);
}
// function random(){

// }
function catchImg() {
  var playImg = document.querySelectorAll("#playground img");
  playImg.forEach(function (elem) {
    elem.addEventListener("click", function () {
      score++;
      scoreval.innerHTML = score;
    });
  });
}


function runTimer(){
  var timerint = setInterval(function(){

      if(time>0){

          time--;
          document.querySelector("#timerval").textContent = time;
          
      }else{
          clearInterval(timerint)
          document.querySelector("#playground").innerHTML = `<h1>Game Over</h1>`
          // document.querySelector("#playground").style.display = "none"
          // play.removeChild(newImg)
          // document.querySelector("#playground img").style.display = "none"
          document.querySelector("#playground").removeChild(newImg)
      }
  },1000)

}