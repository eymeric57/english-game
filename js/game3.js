const end = document.getElementById("finished");

const btn = document.getElementById("btn1");
const allword = document.getElementsByClassName("word");

const mainMenu = document.getElementById("menu");

let dXaArray = [];

for (let i = 1; i <= 69; i++) {
  dXaArray[i] = "";
}

for (let i = 1; i <= 69; i++) {
  document.getElementById(`d${i}`).addEventListener("input", (e) => {
    dXaArray[i] = e.target.value;
    response1maj();
    response2maj();
    response3maj();
    response4maj();
    response5maj();
    response6maj();
    response7maj();
    response8maj();
    response9maj();
    response10maj();
  });
}

function response1maj() {
  let response1 =
    dXaArray[1] +
    dXaArray[2] +
    dXaArray[3] +
    dXaArray[4] +
    dXaArray[5] +
    dXaArray[6] +
    dXaArray[7] +
    dXaArray[8] +
    dXaArray[9] +
    dXaArray[10] +
    dXaArray[11] +
    dXaArray[12];

  if (response1 === "webdeveloper") {
    setGreenBackground([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    dev.style.textDecoration = "line-through 2px";
    dev.style.color = "red";
  }
  
}

function response2maj() {
  let response2 =
    dXaArray[13] + dXaArray[14] + dXaArray[15] + dXaArray[16] + dXaArray[2];

  if (response2 === "judge") {
    setGreenBackground([13, 14, 15, 16, 2]);
    jug.style.textDecoration = "line-through 2px";
    jug.style.color = "red";
  }

  endgame();
}

function response3maj() {
  let response3 =
    dXaArray[36] +
    dXaArray[32] +
    dXaArray[37] +
    dXaArray[38] +
    dXaArray[39] +
    dXaArray[7] +
    dXaArray[40];

  if (response3 === "teacher") {
    setGreenBackground([36, 32, 37, 38, 39, 7, 40]);
    pro.style.textDecoration = "line-through 2px";
    pro.style.color = "red";
  }
  endgame();
}

function response4maj() {
  let response4 =
    dXaArray[29] +
    dXaArray[30] +
    dXaArray[31] +
    dXaArray[32] +
    dXaArray[33] +
    dXaArray[34] +
    dXaArray[35];

  if (response4 === "fireman") {
    setGreenBackground([29, 30, 31, 32, 33, 34, 35]);
    pom.style.textDecoration = "line-through 2px";
    pom.style.color = "red";
  }
  endgame();
}

function response5maj() {
  let response5 =
    dXaArray[28] +
    dXaArray[50] +
    dXaArray[42] +
    dXaArray[51] +
    dXaArray[52] +
    dXaArray[53] +
    dXaArray[54] +
    dXaArray[55] +
    dXaArray[56] +
    dXaArray[57];

  if (response5 === "translator") {
    setGreenBackground([28, 50, 42, 51, 52, 53, 54, 55, 56, 57]);
    tra.style.textDecoration = "line-through 2px";
    tra.style.color = "red";
  }
  endgame();
}

function response6maj() {
  let response6 =
    dXaArray[58] +
    dXaArray[56] +
    dXaArray[59] +
    dXaArray[60] +
    dXaArray[61] +
    dXaArray[62] +
    dXaArray[63];

  if (response6 === "postman") {
    setGreenBackground([58, 56, 59, 60, 61, 62, 63]);
    fac.style.textDecoration = "line-through 2px";
    fac.style.color = "red";
  }
  endgame();
}

function response7maj() {
  let response7 =
    dXaArray[3] +
    dXaArray[17] +
    dXaArray[18] +
    dXaArray[19] +
    dXaArray[20] +
    dXaArray[21] +
    dXaArray[22];

  if (response7 === "butcher") {
    setGreenBackground([3, 17, 18, 19, 20, 21, 22]);
    bou.style.textDecoration = "line-through 2px";
    bou.style.color = "red";
  }
  endgame();
}

function response8maj() {
  let response8 =
    dXaArray[23] +
    dXaArray[20] +
    dXaArray[24] +
    dXaArray[25] +
    dXaArray[26] +
    dXaArray[27] +
    dXaArray[28];

  if (response8 === "chemist") {
    setGreenBackground([23, 20, 24, 25, 26, 27, 28]);
    chi.style.textDecoration = "line-through 2px";
    chi.style.color = "red";
  }
  endgame();
}

function response9maj() {
  let response9 =
    dXaArray[11] +
    dXaArray[64] +
    dXaArray[65] +
    dXaArray[66] +
    dXaArray[67] +
    dXaArray[68] +
    dXaArray[45] +
    dXaArray[69];

  if (response9 === "engineer") {
    setGreenBackground([11, 64, 65, 66, 67, 67, 68, 45, 69]);
    ing.style.textDecoration = "line-through 2px";
    ing.style.color = "red";
  }
  endgame();
}

function response10maj() {
  let response10 =
    dXaArray[41] +
    dXaArray[42] +
    dXaArray[43] +
    dXaArray[44] +
    dXaArray[45] +
    dXaArray[46] +
    dXaArray[47] +
    dXaArray[48] +
    dXaArray[49];

  if (response10 === "carpenter") 
  {
    setGreenBackground([41, 42, 43, 44, 45, 46, 47, 48, 49]);
    cha.style.textDecoration = "line-through 2px";
    cha.style.color = "red";
  }
  endgame();
}

function setGreenBackground(wordfinished) {
  wordfinished.forEach((index) => {
    let element = document.getElementById(`d${index}`);
    
    if (element) {
      element.style.background = "green";
      element.style.color = "white"; 
      element.disabled = true;
      
    }
  });
}

function endgame() {
  if (
    jug.style.color === "red" &&
    dev.style.color === "red" &&
    pro.style.color === "red" &&
    pom.style.color === "red" &&
    tra.style.color === "red" &&
    fac.style.color === "red" &&
    bou.style.color === "red" &&
    chi.style.color === "red" &&
    ing.style.color === "red" &&
    cha.style.color === "red"
  ) {
    end.style.opacity = "1";
    end.style.zIndex = "5";
    main1.style.filter = "blur(5px)";
    localStorage.setItem("lvl2", "ok");
 

    setTimeout(function () {
      window.location.href = "../html/index.html";
    }, 3000);
  }
}

menu.addEventListener("mouseenter", () => {
  menuHover.style.opacity = "1";
});

menu.addEventListener("mouseleave", () => {
  menuHover.style.opacity = "0";
});

rules.addEventListener("click", () => {
  rules1.style.transform = "translateX(0)";
  main1.style.filter = "blur(5px)";
 
});

close1.addEventListener("click", () => {
  rules1.style.transform = "translateY(-2000px)";
  main1.style.filter = "blur(0px)";
});