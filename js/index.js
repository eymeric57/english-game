const rules1 = document.getElementById("rules1");
const game4 = document.getElementById("game4");
const game1 = document.getElementById("game1");
const alertSave = document.querySelector(".alert")


    let lvl1Value = localStorage.getItem("lvl1");
    if (lvl1Value) {
      game1.style.backgroundColor = "green";
      game2.style.backgroundColor = "rgb(27,26,26)"
      game2.style.pointerEvents='auto';
      lvl2.style.display="none";
      name2.style.display="block";
    }
  
    
    let lvl2Value = localStorage.getItem("lvl2");
    if (lvl2Value) {
      game2.style.backgroundColor = "green";
      game3.style.backgroundColor = "rgb(27,26,26)"
      game3.style.pointerEvents='auto';
      lvl3.style.display="none";
      name3.style.display="block";
     
    }

    let lvl3Value = localStorage.getItem("lvl3");
    if (lvl3Value) {
      game3.style.backgroundColor = "green";
      game4.style.backgroundColor = "rgb(27,26,26)"
      game4.style.pointerEvents='auto';
      lvl4.style.display="none"
      name4.style.display="block"
     
    }

    let lvl4Value = localStorage.getItem("lvl4");
    if (lvl4Value) {
      game4.style.backgroundColor = "green";
     
    }
var clear
var clearButton = document.getElementById("saveClear");

clearButton.addEventListener("click",() =>{
alertSave.style.transform = "translatey(10px)";
main1.style.pointerEvents='none';
});
btn1.addEventListener("click",() =>{
  localStorage.clear()
  location.reload()
})
btn2.addEventListener("click", () => {
  alertSave.style.transform = "translatey(-200px)"
  main1.style.pointerEvents='auto';
})

game1.addEventListener("click", () => {
  document.location.href = "../html/game1.1.html";
});

game1.addEventListener("mouseover", () => {
  rules1.style.display = "grid";
  main1.style.filter = "blur(5px)";
});

game1.addEventListener("mouseout", () => {
  rules1.style.display = "none";
  main1.style.filter = "blur(0px)";
});



game2.addEventListener("click", () => {
  document.location.href = "../html/game3.html";
});
game2.addEventListener("mouseover", () => {
  rules2.style.display = "grid";
  main1.style.filter = "blur(5px)";
});

game2.addEventListener("mouseout", () => {
  rules2.style.display = "none";
  main1.style.filter = "blur(0px)";
});

game3.addEventListener("click", () => {
  document.location.href = "../html/game4.html";
});
game3.addEventListener("mouseover", () => {
  rules3.style.display = "grid";
  main1.style.filter = "blur(5px)";
});

game3.addEventListener("mouseout", () => {
  rules3.style.display = "none";
  main1.style.filter = "blur(0px)";
});

game4.addEventListener("click", () => {
  document.location.href = "../html/game2.1.html";
});
game4.addEventListener("mouseover", () => {
  rules4.style.display = "grid";
  main1.style.filter = "blur(5px)";
});

game4.addEventListener("mouseout", () => {
  rules4.style.display = "none";
  main1.style.filter = "blur(0px)";
});
