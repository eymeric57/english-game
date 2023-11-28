const end = document.getElementById("finished");

let flippedCards = [];
let clicks = 0;
let allCards = document.querySelectorAll('.card');
let allGreen = false;
let score = 0;


menu.addEventListener("mouseenter", () => {
  menuHover.style.opacity = "1"
})

menu.addEventListener("mouseleave", () => {
  menuHover.style.opacity = "0"
})

rules.addEventListener("click", () => {
  rules1.style.transform = "translateX(0)";
  main1.style.filter = "blur(5px)";
 
});

close1.addEventListener("click", () => {
  rules1.style.transform = "translateY(-2000px)";
  main1.style.filter = "blur(0px)";
});






function checkForMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.card === card2.dataset.card) {
   
    flippedCards.forEach(card => {
      card.style.background = "green";
      
      setTimeout(function () {
       card.style.opacity ="0"
       
       
      }, 1000);
     
      score++
      setTimeout(() => {
        verifierScore();
      }, 2000);
      
    });
    flippedCards = [];
  
   

    }  else {
    flippedCards.forEach(card => {
      card.style.background="red"
      setTimeout(function () {
        card.classList.remove('flipped');
        card.style.color ="grey"
        card.style.transform="RotateY(180deg)"
        card.style.background="grey"
      }, 1000);
    
    });
    flippedCards = [];
  }

  clicks = 0;

}
  
function verifierScore() {
  if (score === 16) {
    localStorage.setItem("lvl4", "ok"); 
    end.style.opacity="1"
    setTimeout(function () {
      window.location.href = "../html/index.html";
    }, 5000);
}}



document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    if (clicks <2 && !flippedCards.includes(card)) {
      card.classList.add('flipped');
      flippedCards.push(card)
      clicks++
      card.style.transform="RotateY(360deg)"
      card.style.color ="white"
      
      
      if (clicks === 2) {
        setTimeout(checkForMatch, 800);
      }
     
      }
    })
})


