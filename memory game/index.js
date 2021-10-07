const card = document.querySelectorAll(".card");
console.log((card));

var isFlipped = false;
var firstCard;
var secondCard;

card.forEach((card) => card.addEventListener("click", flip))



function flip() {
  //  console.log("Card fipped");

  this.classList.add("flip");

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  }
  else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    
    checkit();
  }
}

function checkit() {
  // console.log("checkin....");

  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}


function success() {
  //  console.log("success");
  firstCard.removeEventListener('click', flip);
  secondCard.removeEventListener('click', flip);
  reset();
}



function fail() {
  //  console.log("fail");

  setTimeout(() => {
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    reset();
  }, 1000);

}



function reset() {

  isFlipped = false;
  firstCard = null;
  secondCard = null;
}


(function shuffle()
{
  card.forEach((card) =>{
    var index = Math.floor(Math.random() * 16)
    card.style.order = index;
  });
})();

