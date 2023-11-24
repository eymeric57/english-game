let flippedCards = [];
let clicks = 0;


function checkForMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.card === card2.dataset.card) {
   
    flippedCards.forEach(card => {
      card.style.background = "green";
      setTimeout(function () {
       card.style.opacity ="0"
      }, 1000);
    });
    flippedCards = [];
  } else {
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

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    if (clicks <2 && !flippedCards.includes(card)) {
      card.classList.add('flipped');
      flippedCards.push(card)
      clicks++
      card.style.transform="RotateY(360deg)"
      card.style.color ="white"
      if (clicks === 2) {
        setTimeout(checkForMatch, 1000);
      }
    }
  })
})

