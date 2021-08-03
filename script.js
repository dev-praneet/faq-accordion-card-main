const questionBlocks = document.querySelectorAll('.question-block');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const heights = document.querySelectorAll('.measuringDiv');
const downArrow = document.querySelectorAll('.flex-item--image');

for (let i = 0; i < questionBlocks.length; i++) {
    questionBlocks[i].addEventListener('click', function(){
        console.log('You clicked the question number', i + 1);
        if (answers[i].clientHeight) {
            answers[i].style.height  = 0;
            answers[i].style.marginTop = null;
            downArrow[i].style.transform = null;
            questions[i].style.fontWeight = "400";
        } else {
            answers[i].style.height = heights[i].clientHeight + "px";
            answers[i].style.marginTop = "1em";
            downArrow[i].style.transform = "rotate(180deg)";
            questions[i].style.fontWeight = "700";
        }
    });
}