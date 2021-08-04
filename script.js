const questionBlocks = document.querySelectorAll('.question-block');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const heights = document.querySelectorAll('.measuringDiv');
const downArrow = document.querySelectorAll('.flex-item--image');

for (let i = 0; i < questionBlocks.length; i++) {
    questionBlocks[i].addEventListener('click', function(e){
        console.log('You clicked the question number', i + 1);
        if (answers[i].clientHeight) {
            answers[i].style.height  = 0;
            answers[i].style.marginTop = null;
            downArrow[i].style.transform = null;
            questions[i].style.fontWeight = "400";
            e.preventDefault();
        } else {
            answers[i].style.height = heights[i].clientHeight + "px";
            answers[i].style.marginTop = "1em";
            downArrow[i].style.transform = "rotate(180deg)";
            questions[i].style.fontWeight = "700";
            e.preventDefault();
        }
    });
}


const root = document.querySelector(':root');
const containerPaddingTop = getComputedStyle(root).getPropertyValue('--container_padding_top');
const mobileWidth = getComputedStyle(root).getPropertyValue('--mobile_width');

const imageBox = document.getElementById('image-box');
imageBox.addEventListener("load", () => {
    if (window.innerWidth <= mobileWidth.slice(0, -2)) {
    imageBox.style.marginLeft = -0.5 * imageBox.clientWidth + "px";
    imageBox.style.top = -0.45 * imageBox.clientHeight - containerPaddingTop.slice(0, -2) + "px";
    } 
});
window.addEventListener("resize", () => {
    if (window.innerWidth <= mobileWidth.slice(0,-2)) {
    imageBox.style.marginLeft = -0.5 * imageBox.clientWidth + "px"; 
    imageBox.style.top = -0.45 * imageBox.clientHeight - containerPaddingTop.slice(0, -2) + "px";
    } else {
        console.log('else block was executed');
        imageBox.style.marginLeft = null;
        imageBox.style.top = null;
    }
});

const imageWoman = document.getElementById('image-woman');
imageBox.addEventListener("load", () => {
    imageWoman.style.marginLeft = -0.5 * imageWoman.clientWidth + "px";
    imageWoman.style.top = -0.6 * imageWoman.clientHeight - containerPaddingTop.slice(0, -2) + "px";
});
window.addEventListener("resize", () => {
    imageWoman.style.marginLeft = -0.5 * imageWoman.clientWidth + "px"; 
    imageWoman.style.top = -0.6 * imageWoman.clientHeight - containerPaddingTop.slice(0, -2) + "px";
});

