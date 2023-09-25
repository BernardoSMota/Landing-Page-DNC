function goRight(){
    var rightArrow = document.getElementById("right-arrow")
    var leftArrow = document.getElementById("left-arrow")
    var allCards = document.getElementsByClassName("card")
    var allCircles = document.getElementsByClassName("circle")

    allCards[0].classList.add("invisible")
    allCards[allCards.length - 1].classList.remove("invisible")

    rightArrow.classList.add("offline")
    leftArrow.classList.remove("offline")

    allCircles[0].classList.add("notInPage")
    allCircles[allCircles.length - 1].classList.remove("notInPage")
}

function goLeft(){
    var rightArrow = document.getElementById("right-arrow")
    var leftArrow = document.getElementById("left-arrow")
    var allCards = document.getElementsByClassName("card")
    var allCircles = document.getElementsByClassName("circle")


    allCards[0].classList.remove("invisible")
    allCards[allCards.length - 1].classList.add("invisible")

    rightArrow.classList.remove("offline")
    leftArrow.classList.add("offline")

    allCircles[0].classList.remove("notInPage")
    allCircles[allCircles.length - 1].classList.add("notInPage")
}