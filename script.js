"use strict"

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength -1) *100}vh`

upButton.addEventListener("click", () => changeSlide("up"))
downButton.addEventListener("click", () => changeSlide("down"))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight //Changes slider based on browser height
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength -1) {
            activeSlideIndex = 0 //If we reach the end, we go back to the top
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) { //Checks if it's in the last slide
            activeSlideIndex = slidesLength - 1 //If we reach the end, we go back to the top
        }
    }


    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)` //Starts moving the slides
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)` //Moves the left slide the other way
}