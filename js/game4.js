const end = document.getElementById("finished");
const inputColor = document.getElementById("answer");
const rules = document.getElementById('rules')
const close = document.getElementsByTagName(':after')
const main1 = document.getElementById('main1')
 

rules.addEventListener('click',() => {  
  rules1.style.transform="translateX(0)"
     main1.style.filter = "blur(5px)" 
     inputColor.disabled = true;
  })
  
  close1.addEventListener('click' ,() => {
      rules1.style.transform="translateY(-2000px)"
      main1.style.filter = "blur(0px)" 
      inputColor.disabled = false;
  
      
  })
  
let answer = "";
  let change1 = true;
  let change2 = false;
  let change3 = false;
  let change4 = false;
  let change5 = false;
  let change6 = false;
  let change7 = false;
  let change8 = false;
  let change9 = false;
  let change10 = false;

 

function changecolor1() {
 
  if ( answer === "red" && change1 === true ) {
setTimeout (function () {
   document.body.style.backgroundColor = "rgb(22, 39, 194)";
   inputColor.value = ""
   change1 = false
   score.innerHTML = "1/10"
},800)}}


function changecolor2() {
  if (  answer === "blue" &&  change2 === false) {
    setTimeout (function () {
    document.body.style.backgroundColor = "green";
    inputColor.value = ""
    change2 = true
    score.innerHTML = "2/10"
   
   
  },800)}}

function changecolor3() {
    if (answer === "green" && change3 === false) {
      setTimeout (function () {
      document.body.style.backgroundColor = "pink";
      inputColor.value = ""
      change3 = true
      score.innerHTML = "3/10"
    },800)}
  }
  function changecolor4() {
    if (answer === "pink" &&  change4 === false) {
      setTimeout (function () {
      document.body.style.backgroundColor = "#f68B2D";
      inputColor.value = ""
      change4 = true
      score.innerHTML = "4/10"
    } ,800)}
  }
  function changecolor5() {
    if (answer === "orange" &&  change5 === false) {
      setTimeout (function () {
      document.body.style.backgroundColor = "#582900";
      inputColor.value = ""
      change5 = true
      score.innerHTML = "5/10"
    } ,800)}
  }
  function changecolor6() {
    if (answer === "brown" &&  change6 === false) {
      setTimeout (function () {
      document.body.style.backgroundColor = "yellow";
      inputColor.value = ""
      change5 = true
      score.innerHTML = "6/10"
    } ,800)}
  }
  function changecolor7() {
    if (answer === "yellow" &&  change7 === false) {
      setTimeout (function () {
      document.body.style.backgroundColor = "purple";
      inputColor.value = ""
      change6 = true
      score.innerHTML = "7/10"
    },800)}
  }
  function changecolor8() {
    if (answer === "purple" &&  change8 === false) {
      setTimeout (function () {
      document.body.style.backgroundColor = "black";
      inputColor.value = ""
      change7 = true
      score.innerHTML = "8/10"
      title.style.color = "white"
      score.style.color ="white"
    },800)}
  }
  function changecolor9() {
    if (answer === "black" &&  change9 === false) {
      setTimeout (function () {
      document.body.style.backgroundColor = "white";
      inputColor.value = ""
      change8 = true
      score.innerHTML = "9/10"
      title.style.color = "black"
      score.style.color ="black"
      icon.style.color ="black"
     
      menuHover.style.color = "black"
    },800)}
  }
  function changecolor10() {
    if (answer === "white" &&  change10 === false) {
      
      document.body.style.backgroundColor = "skyblue";
      inputColor.style.display = "none"
      end.style.opacity = "1";
      end.style.zIndex = "5";
      main1.style.filter = "blur(5px)";
      change9 = true;
      score.innerHTML = "10/10";
      setTimeout (function () {
        localStorage.setItem("lvl3", "ok");
        window.location.href = "./index.html";
    },4000)
  
  }}


inputColor.addEventListener("input", (e) => {
  answer = e.target.value;
  changecolor1();
  changecolor2();
  changecolor3()
  changecolor4()
  changecolor5()
  changecolor6()
  changecolor7()
  changecolor8()
  changecolor9()
  changecolor10()

});


menu.addEventListener("mouseenter", () => {
  menuHover.style.opacity = "1";
});

menu.addEventListener("mouseleave", () => {
  menuHover.style.opacity = "0";
});
